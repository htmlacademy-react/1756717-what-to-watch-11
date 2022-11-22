import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Film, Films } from '../types/films.js';
import { loadFilms, redirectToRoute, requireAuthorization, loadFilm, setFilmDataLoadingStatus, loadFilmReviews, setFilmsDataLoadingStatus, loadSimilarFilms, setReviewFormDisabled } from './action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { AuthData } from '../types/auth-data.js';
import { UserData } from '../types/user-data.js';
import { dropToken, saveToken } from '../services/token';
import { NewReview, Reviews } from '../types/reviews.js';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const { data } = await api.get<Films>(APIRoute.Films);
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);

export const fetchFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, { dispatch, extra: api }) => {
    dispatch(setFilmDataLoadingStatus(true));
    const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
    dispatch(setFilmDataLoadingStatus(false));
    dispatch(loadFilm(data));
  },
);

export const fetchFilmReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilmReviews',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);
    dispatch(loadFilmReviews(data));
  },
);

export const commentAction = createAsyncThunk<void, [number, NewReview], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/comment',
  async ([id, {comment, rating}], { dispatch, extra: api}) => {
    try {
      await api.post<Reviews>(`${APIRoute.Reviews}/${id}`, {comment, rating});
      dispatch(setReviewFormDisabled(false));
    } catch {
      dispatch(setReviewFormDisabled(false));
    }
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
    dispatch(loadSimilarFilms(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
