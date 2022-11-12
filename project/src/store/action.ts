import { createAction } from '@reduxjs/toolkit';
import { Films } from '../types/films';

export const changeGenre = createAction('films/changeGenre', (genre: string) => ({
  payload: genre,
}));

export const getFilmsByGenre = createAction('films/getFilmsByGenre', (films: Films) => ({
  payload: films,
}));
