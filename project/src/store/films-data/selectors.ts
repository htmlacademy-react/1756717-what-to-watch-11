import { NameSpace } from '../../const';
import { Film, Films } from '../../types/films';
import { Reviews } from '../../types/reviews';
import { State } from '../../types/state';

export const getFilms = (state: State): Films => state[NameSpace.Data].films;

export const getFilm = (state: State): Film | undefined => state[NameSpace.Data].film;

export const getFilmReviews = (state: State): Reviews => state[NameSpace.Data].filmReviews;

export const getPromoFilm = (state: State): Film => state[NameSpace.Data].promoFilm;

export const getSimilarFilms = (state: State): Films => state[NameSpace.Data].similarFilms;

export const getFilmsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmsDataLoading;

export const getFilmDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmDataLoading;

export const getFilmReviewsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmReviewsDataLoading;

export const getSimilarFilmsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isSimilarFilmsDataLoading;

export const getReviewFormAvailabilityStatus = (state: State): boolean => state[NameSpace.Data].isReviewFormDisabled;
