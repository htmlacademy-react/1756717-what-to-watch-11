import { createReducer } from '@reduxjs/toolkit';
import { FilmSettings } from '../const';
import { filmsMock } from '../mocks/films';
import { changeGenre, resetFilmsInListAmount, setFilms, setFilmsInListAmount } from './action';

const initialState = {
  genre: FilmSettings.DefaultFilterGenre as string,
  films: filmsMock,
  filmsPerStep: FilmSettings.FilmsPerStep as number,
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
    });
});

export { reducer };
