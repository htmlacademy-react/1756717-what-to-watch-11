import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, FilmSettings } from '../const';
import { Films } from '../types/films';
import { changeGenre, loadFilms, resetFilmsInListAmount, setFilms, setFilmsInListAmount, setFilmsDataLoadingStatus, requireAuthorization } from './action';

type InitialState = {
  genre: string;
  films: Films;
  filmsPerStep: number;
  authorizationStatus: AuthorizationStatus;
  isFilmsDataLoading: boolean;
}

const initialState: InitialState = {
  genre: FilmSettings.DefaultFilterGenre as string,
  films: [],
  filmsPerStep: FilmSettings.FilmsPerStep as number,
  authorizationStatus: AuthorizationStatus.Unknown,
  isFilmsDataLoading: false,
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
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    });
});

export { reducer };
