import { createReducer } from '@reduxjs/toolkit';
import { FilmSettings } from '../const';
import { filmsMock } from '../mocks/films';
import { changeGenre, setFilmsByGenre } from './action';

const initialState = {
  genre: FilmSettings.DefaultFilterGenre as string,
  films: filmsMock,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilmsByGenre, (state, action) => {
      state.films = action.payload;
    });
});

export { reducer };
