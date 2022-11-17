import { createReducer } from '@reduxjs/toolkit';
import { FilmSettings } from '../const';
import { Films } from '../types/films';
import { changeGenre, loadFilms, resetFilmsInListAmount, setFilms, setFilmsInListAmount, setError, setFilmsDataLoadingStatus } from './action';

type InitialState = {
  genre: string;
  films: Films;
  filmsPerStep: number;
  isFilmsDataLoading: boolean;
  error: string | null;
}

const initialState: InitialState = {
  genre: FilmSettings.DefaultFilterGenre as string,
  films: [],
  filmsPerStep: FilmSettings.FilmsPerStep as number,
  isFilmsDataLoading: false,
  error: null,
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
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setError,(state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
