import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilmSettings, NameSpace } from '../../const';
import { FilmsProcess } from '../../types/state';

const initialState: FilmsProcess = {
  genre: FilmSettings.DefaultFilterGenre as string,
  filmsPerStep: FilmSettings.FilmsPerStep as number,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setFilmsInListAmount: (state) => {
      state.filmsPerStep = state.filmsPerStep + FilmSettings.FilmsPerStep;
    },
    resetFilmsInListAmount: (state) => {
      state.filmsPerStep = FilmSettings.FilmsPerStep;
    }
  },
});

export const {changeGenre, setFilmsInListAmount, resetFilmsInListAmount} = filmsProcess.actions;
