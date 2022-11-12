import { createReducer } from '@reduxjs/toolkit';
import { FilmSettings } from '../const';
import { filmsMock } from '../mocks/films';
import { changeGenre, getFilmsByGenre } from './action';

const initialState = {
  genre: FilmSettings.DefaultFilterGenre as string,
  films: filmsMock,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmsByGenre, (state, action) => {
      state.films = action.payload;
    });
});

export { reducer };
