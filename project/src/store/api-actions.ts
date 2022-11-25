import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { Film, Films } from '../types/films.js';
import { redirectToRoute } from './action';
import { APIRoute, AppRoute } from '../const';
import { AuthData } from '../types/auth-data.js';
import { UserData } from '../types/user-data.js';
import { dropToken, saveToken } from '../services/token';
import { NewReview, Reviews } from '../types/reviews.js';

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Films>(APIRoute.Films);
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<Film, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
    return data;
  },
);

export const fetchFilmReviewsAction = createAsyncThunk<Reviews, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilmReviews',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);
    return data;
  },
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoFilm',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

export const commentAction = createAsyncThunk<void, [number, NewReview], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/comment',
  async ([id, {comment, rating}], { dispatch, extra: api}) => {
    await api.post<Reviews>(`${APIRoute.Reviews}/${id}`, {comment, rating});
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<Films, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoute.Login);
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
  },
);
