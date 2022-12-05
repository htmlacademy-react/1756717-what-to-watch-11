import { AuthorizationStatus } from '../const';
import { store } from '../store/index';
import { Film, Films } from './films';
import { Reviews } from './reviews';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type FilmsData = {
  films: Films;
  film?: Film;
  filmReviews: Reviews;
  promoFilm: Film;
  similarFilms: Films;
  favoriteFilms: Films;
  isFilmsDataLoading: boolean;
  isFilmDataLoading: boolean;
  isFilmReviewsDataLoading: boolean;
  isSimilarFilmsDataLoading: boolean;
  isFavoriteFilmsDataLoading: boolean;
  isReviewFormDisabled: boolean;
}

export type FilmsProcess = {
  genre: string;
  filmsPerStep: number;
};
