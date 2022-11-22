import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, FilmSettings } from '../const';
import { Film, Films } from '../types/films';
import { Reviews } from '../types/reviews';
import { changeGenre, loadFilms, resetFilmsInListAmount, setFilms, setFilmsInListAmount, setFilmsDataLoadingStatus, requireAuthorization, loadFilm, loadFilmReviews, loadSimilarFilms, setFilmDataLoadingStatus, setReviewFormDisabled } from './action';

type InitialState = {
  genre: string;
  films: Films;
  film?: Film;
  similarFilms: Films;
  filmReviews: Reviews;
  filmsPerStep: number;
  authorizationStatus: AuthorizationStatus;
  isFilmsDataLoading: boolean;
  isFilmDataLoading: boolean;
  isReviewFormDisabled: boolean;
}

const initialState: InitialState = {
  genre: FilmSettings.DefaultFilterGenre as string,
  films: [],
  similarFilms: [],
  filmReviews: [],
  filmsPerStep: FilmSettings.FilmsPerStep as number,
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoading: false,
  isFilmDataLoading: false,
  isReviewFormDisabled: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setFilmsInListAmount, (state) => {
      state.filmsPerStep = state.filmsPerStep + FilmSettings.FilmsPerStep;
    })
    .addCase(resetFilmsInListAmount, (state) => {
      state.filmsPerStep = FilmSettings.FilmsPerStep;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadFilmReviews, (state, action) => {
      state.filmReviews = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setReviewFormDisabled, (state, action) => {
      state.isReviewFormDisabled = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setFilmDataLoadingStatus, (state, action) => {
      state.isFilmDataLoading = action.payload;
    });
});

export { reducer };
