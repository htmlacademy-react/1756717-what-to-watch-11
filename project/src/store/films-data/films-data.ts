import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Film } from '../../types/films';
import { FilmsData } from '../../types/state';
import { commentAction, fetchFilmAction, fetchFilmReviewsAction, fetchFilmsAction, fetchPromoFilmAction, fetchSimilarFilmsAction } from '../api-actions';

const initialState: FilmsData = {
  films: [],
  filmReviews: [],
  promoFilm: {} as Film,
  similarFilms: [],
  isFilmsDataLoading: false,
  isFilmDataLoading: false,
  isFilmReviewsDataLoading: false,
  isSimilarFilmsDataLoading: false,
  isReviewFormDisabled: false,
};

export const filmsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setReviewFormDisabled: (state, action: PayloadAction<boolean>) => {
      state.isReviewFormDisabled = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmDataLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isFilmDataLoading = false;
      })
      .addCase(fetchFilmReviewsAction.pending, (state) => {
        state.isFilmReviewsDataLoading = true;
      })
      .addCase(fetchFilmReviewsAction.fulfilled, (state, action) => {
        state.filmReviews = action.payload;
        state.isFilmReviewsDataLoading = false;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isSimilarFilmsDataLoading = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isSimilarFilmsDataLoading = false;
      })
      .addCase(commentAction.pending, (state) => {
        state.isReviewFormDisabled = true;
      })
      .addCase(commentAction.fulfilled, (state) => {
        state.isReviewFormDisabled = false;
      })
      .addCase(commentAction.rejected, (state) => {
        state.isReviewFormDisabled = false;
      });
  }
});

export const {setReviewFormDisabled} = filmsData.actions;
