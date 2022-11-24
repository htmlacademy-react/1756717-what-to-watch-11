import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';

export const changeGenre = createAction('films/changeGenre', (genre: string) => ({
  payload: genre,
}));

export const setFilmsInListAmount = createAction('films/setFilmsInListAmount');

export const resetFilmsInListAmount = createAction('films/resetFilmsInListAmount');

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadFilm = createAction<Film>('data/loadFilm');

export const loadFilmReviews = createAction<Reviews>('data/loadFilmReviews');

export const loadSimilarFilms = createAction<Films>('data/loadSimilarFilms');

export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const setFilmDataLoadingStatus = createAction<boolean>('data/setFilmDataLoadingStatus');

export const setPromoFilmDataLoadingStatus = createAction<boolean>('data/setPromoFilmDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const setReviewFormDisabled = createAction<boolean>('form/setReviewFormDisabled');
