import { createReducer } from '@reduxjs/toolkit';
import { FilmSettings } from '../const';
import { filmsMock } from '../mocks/films';
import { changeGenre, setFilms } from './action';

const initialState = {
  genre: FilmSettings.DefaultFilterGenre as string,
  films: filmsMock,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    });
});

export { reducer };
