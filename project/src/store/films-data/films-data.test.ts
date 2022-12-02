import { mockFilm, mockFilms, mockReviews } from '../../mocks/mocks';
import { Film } from '../../types/films';
import { commentAction, fetchFavoriteFilmsAction, fetchFilmAction, fetchFilmReviewsAction, fetchFilmsAction, fetchPromoFilmAction, fetchSimilarFilmsAction } from '../api-actions';
import { filmsData } from './films-data';


const films = mockFilms;
const film = mockFilm;
const promoFilm = mockFilm;
const similarFilms = mockFilms;
const favoriteFilms = mockFilms;
const reviews = mockReviews;

describe('Reducer: filmsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmsData.reducer(undefined, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        films: [],
        filmReviews: [],
        similarFilms: [],
        promoFilm: {} as Film,
        favoriteFilms: [],
        isFilmsDataLoading: false,
        isFilmDataLoading: false,
        isFilmReviewsDataLoading: false,
        isSimilarFilmsDataLoading: false,
        isFavoriteFilmsDataLoading: false,
        isReviewFormDisabled: false,
      });
  });

  it('should change films\' loading status to true if fetchFilmsAction pending', () => {
    const state = {
      films: [],
      filmReviews: [],
      similarFilms: [],
      promoFilm: {} as Film,
      favoriteFilms: [],
      isFilmsDataLoading: false,
      isFilmDataLoading: false,
      isFilmReviewsDataLoading: false,
      isSimilarFilmsDataLoading: false,
      isFavoriteFilmsDataLoading: false,
      isReviewFormDisabled: false,
    };
    expect(filmsData.reducer(state, { type: fetchFilmsAction.pending.type }))
      .toEqual({
        films: [],
        filmReviews: [],
        similarFilms: [],
        promoFilm: {} as Film,
        favoriteFilms: [],
        isFilmsDataLoading: true,
        isFilmDataLoading: false,
        isFilmReviewsDataLoading: false,
        isSimilarFilmsDataLoading: false,
        isFavoriteFilmsDataLoading: false,
        isReviewFormDisabled: false,
      });
  });

  it('should update films by load films', () => {
    const state = {
      films: [],
      filmReviews: [],
      similarFilms: [],
      promoFilm: {} as Film,
      favoriteFilms: [],
      isFilmsDataLoading: true,
      isFilmDataLoading: false,
      isFilmReviewsDataLoading: false,
      isSimilarFilmsDataLoading: false,
      isFavoriteFilmsDataLoading: false,
      isReviewFormDisabled: false,
    };

    expect(filmsData.reducer(state, { type: fetchFilmsAction.fulfilled.type, payload: films }))
      .toEqual({
        films,
        filmReviews: [],
        similarFilms: [],
        promoFilm: {} as Film,
        favoriteFilms: [],
        isFilmsDataLoading: false,
        isFilmDataLoading: false,
        isFilmReviewsDataLoading: false,
        isSimilarFilmsDataLoading: false,
        isFavoriteFilmsDataLoading: false,
        isReviewFormDisabled: false,
      });
  });
  it('should change film\'s loading status to true if fetchFilmAction pending', () => {
    const state = {
      films: [],
      filmReviews: [],
      similarFilms: [],
      promoFilm: {} as Film,
      favoriteFilms: [],
      isFilmsDataLoading: false,
      isFilmDataLoading: false,
      isFilmReviewsDataLoading: false,
      isSimilarFilmsDataLoading: false,
      isFavoriteFilmsDataLoading: false,
      isReviewFormDisabled: false,
    };
    expect(filmsData.reducer(state, { type: fetchFilmAction.pending.type }))
      .toEqual({
        films: [],
        filmReviews: [],
        similarFilms: [],
        promoFilm: {} as Film,
        favoriteFilms: [],
        isFilmsDataLoading: false,
        isFilmDataLoading: true,
        isFilmReviewsDataLoading: false,
        isSimilarFilmsDataLoading: false,
        isFavoriteFilmsDataLoading: false,
        isReviewFormDisabled: false,
      });
  });

  it('should update film by load film', () => {
    const state = {
      films: [],
      filmReviews: [],
      similarFilms: [],
      promoFilm: {} as Film,
      favoriteFilms: [],
      isFilmsDataLoading: false,
      isFilmDataLoading: true,
      isFilmReviewsDataLoading: false,
      isSimilarFilmsDataLoading: false,
      isFavoriteFilmsDataLoading: false,
      isReviewFormDisabled: false,
    };

    expect(filmsData.reducer(state, { type: fetchFilmAction.fulfilled.type, payload: film }))
      .toEqual({
        films: [],
        film,
        filmReviews: [],
        similarFilms: [],
        promoFilm: {} as Film,
        favoriteFilms: [],
        isFilmsDataLoading: false,
        isFilmDataLoading: false,
        isFilmReviewsDataLoading: false,
        isSimilarFilmsDataLoading: false,
        isFavoriteFilmsDataLoading: false,
        isReviewFormDisabled: false,
      });
  });

  it('should change film\'s reviews loading status to true if fetchFilmReviewsAction pending', () => {
    const state = {
      films: [],
      filmReviews: [],
      similarFilms: [],
      promoFilm: {} as Film,
      favoriteFilms: [],
      isFilmsDataLoading: false,
      isFilmDataLoading: false,
      isFilmReviewsDataLoading: false,
      isSimilarFilmsDataLoading: false,
      isFavoriteFilmsDataLoading: false,
      isReviewFormDisabled: false,
    };
    expect(filmsData.reducer(state, { type: fetchFilmReviewsAction.pending.type }))
      .toEqual({
        films: [],
        filmReviews: [],
        similarFilms: [],
        promoFilm: {} as Film,
        favoriteFilms: [],
        isFilmsDataLoading: false,
        isFilmDataLoading: false,
        isFilmReviewsDataLoading: true,
        isSimilarFilmsDataLoading: false,
        isFavoriteFilmsDataLoading: false,
        isReviewFormDisabled: false,
      });
  });

  it('should update film\'s reviews by load film\'s reviews', () => {
    const state = {
      films: [],
      filmReviews: [],
      similarFilms: [],
      promoFilm: {} as Film,
      favoriteFilms: [],
      isFilmsDataLoading: false,
      isFilmDataLoading: false,
      isFilmReviewsDataLoading: true,
      isSimilarFilmsDataLoading: false,
      isFavoriteFilmsDataLoading: false,
      isReviewFormDisabled: false,
    };

    expect(filmsData.reducer(state, { type: fetchFilmReviewsAction.fulfilled.type, payload: reviews }))
      .toEqual({
        films: [],
        filmReviews: reviews,
        similarFilms: [],
        promoFilm: {} as Film,
        favoriteFilms: [],
        isFilmsDataLoading: false,
        isFilmDataLoading: false,
        isFilmReviewsDataLoading: false,
        isSimilarFilmsDataLoading: false,
        isFavoriteFilmsDataLoading: false,
        isReviewFormDisabled: false,
      });
  });

  it('should update promo film by load promo film', () => {
    const state = {
      films: [],
      filmReviews: [],
      similarFilms: [],
      promoFilm: {} as Film,
      favoriteFilms: [],
      isFilmsDataLoading: false,
      isFilmDataLoading: false,
      isFilmReviewsDataLoading: false,
      isSimilarFilmsDataLoading: false,
      isFavoriteFilmsDataLoading: false,
      isReviewFormDisabled: false,
    };

    expect(filmsData.reducer(state, { type: fetchPromoFilmAction.fulfilled.type, payload: promoFilm }))
      .toEqual({
        films: [],
        filmReviews: [],
        similarFilms: [],
        promoFilm,
        favoriteFilms: [],
        isFilmsDataLoading: false,
        isFilmDataLoading: false,
        isFilmReviewsDataLoading: false,
        isSimilarFilmsDataLoading: false,
        isFavoriteFilmsDataLoading: false,
        isReviewFormDisabled: false,
      });
  });

  it('should change similar films\' loading status to true if fetchSimilarFilmsAction pending', () => {
    const state = {
      films: [],
      filmReviews: [],
      similarFilms: [],
      promoFilm: {} as Film,
      favoriteFilms: [],
      isFilmsDataLoading: false,
      isFilmDataLoading: false,
      isFilmReviewsDataLoading: false,
      isSimilarFilmsDataLoading: false,
      isFavoriteFilmsDataLoading: false,
      isReviewFormDisabled: false,
    };
    expect(filmsData.reducer(state, { type: fetchSimilarFilmsAction.pending.type }))
      .toEqual({
        films: [],
        filmReviews: [],
        similarFilms: [],
        promoFilm: {} as Film,
        favoriteFilms: [],
        isFilmsDataLoading: false,
        isFilmDataLoading: false,
        isFilmReviewsDataLoading: false,
        isSimilarFilmsDataLoading: true,
        isFavoriteFilmsDataLoading: false,
        isReviewFormDisabled: false,
      });
  });

  it('should update similar films by load similar films', () => {
    const state = {
      films: [],
      filmReviews: [],
      similarFilms: [],
      promoFilm: {} as Film,
      favoriteFilms: [],
      isFilmsDataLoading: false,
      isFilmDataLoading: false,
      isFilmReviewsDataLoading: false,
      isSimilarFilmsDataLoading: true,
      isFavoriteFilmsDataLoading: false,
      isReviewFormDisabled: false,
    };

    expect(filmsData.reducer(state, { type: fetchSimilarFilmsAction.fulfilled.type, payload: similarFilms }))
      .toEqual({
        films: [],
        filmReviews: [],
        similarFilms,
        promoFilm: {} as Film,
        favoriteFilms: [],
        isFilmsDataLoading: false,
        isFilmDataLoading: false,
        isFilmReviewsDataLoading: false,
        isSimilarFilmsDataLoading: false,
        isFavoriteFilmsDataLoading: false,
        isReviewFormDisabled: false,
      });
  });

  it('should change favorite films\' loading status to true if fetchFavoriteFilmsAction pending', () => {
    const state = {
      films: [],
      filmReviews: [],
      similarFilms: [],
      promoFilm: {} as Film,
      favoriteFilms: [],
      isFilmsDataLoading: false,
      isFilmDataLoading: false,
      isFilmReviewsDataLoading: false,
      isSimilarFilmsDataLoading: false,
      isFavoriteFilmsDataLoading: false,
      isReviewFormDisabled: false,
    };
    expect(filmsData.reducer(state, { type: fetchFavoriteFilmsAction.pending.type }))
      .toEqual({
        films: [],
        filmReviews: [],
        similarFilms: [],
        promoFilm: {} as Film,
        favoriteFilms: [],
        isFilmsDataLoading: false,
        isFilmDataLoading: false,
        isFilmReviewsDataLoading: false,
        isSimilarFilmsDataLoading: false,
        isFavoriteFilmsDataLoading: true,
        isReviewFormDisabled: false,
      });
  });

  it('should update favorite films by load favorite films', () => {
    const state = {
      films: [],
      filmReviews: [],
      similarFilms: [],
      promoFilm: {} as Film,
      favoriteFilms: [],
      isFilmsDataLoading: false,
      isFilmDataLoading: false,
      isFilmReviewsDataLoading: false,
      isSimilarFilmsDataLoading: false,
      isFavoriteFilmsDataLoading: true,
      isReviewFormDisabled: false,
    };

    expect(filmsData.reducer(state, { type: fetchFavoriteFilmsAction.fulfilled.type, payload: favoriteFilms }))
      .toEqual({
        films: [],
        filmReviews: [],
        similarFilms: [],
        promoFilm: {} as Film,
        favoriteFilms,
        isFilmsDataLoading: false,
        isFilmDataLoading: false,
        isFilmReviewsDataLoading: false,
        isSimilarFilmsDataLoading: false,
        isFavoriteFilmsDataLoading: false,
        isReviewFormDisabled: false,
      });
  });

  it('should change review form\'s availability status to true if commentAction pending', () => {
    const state = {
      films: [],
      filmReviews: [],
      similarFilms: [],
      promoFilm: {} as Film,
      favoriteFilms: [],
      isFilmsDataLoading: false,
      isFilmDataLoading: false,
      isFilmReviewsDataLoading: false,
      isSimilarFilmsDataLoading: false,
      isFavoriteFilmsDataLoading: false,
      isReviewFormDisabled: false,
    };
    expect(filmsData.reducer(state, { type: commentAction.pending.type }))
      .toEqual({
        films: [],
        filmReviews: [],
        similarFilms: [],
        promoFilm: {} as Film,
        favoriteFilms: [],
        isFilmsDataLoading: false,
        isFilmDataLoading: false,
        isFilmReviewsDataLoading: false,
        isSimilarFilmsDataLoading: false,
        isFavoriteFilmsDataLoading: false,
        isReviewFormDisabled: true,
      });
  });

  it('should change review form\'s availability status to false if commentAction fulfilled', () => {
    const state = {
      films: [],
      filmReviews: [],
      similarFilms: [],
      promoFilm: {} as Film,
      favoriteFilms: [],
      isFilmsDataLoading: false,
      isFilmDataLoading: false,
      isFilmReviewsDataLoading: false,
      isSimilarFilmsDataLoading: false,
      isFavoriteFilmsDataLoading: false,
      isReviewFormDisabled: true,
    };
    expect(filmsData.reducer(state, { type: commentAction.fulfilled.type }))
      .toEqual({
        films: [],
        filmReviews: [],
        similarFilms: [],
        promoFilm: {} as Film,
        favoriteFilms: [],
        isFilmsDataLoading: false,
        isFilmDataLoading: false,
        isFilmReviewsDataLoading: false,
        isSimilarFilmsDataLoading: false,
        isFavoriteFilmsDataLoading: false,
        isReviewFormDisabled: false,
      });
  });

  it('should change review form\'s availability status to false if commentAction rejected', () => {
    const state = {
      films: [],
      filmReviews: [],
      similarFilms: [],
      promoFilm: {} as Film,
      favoriteFilms: [],
      isFilmsDataLoading: false,
      isFilmDataLoading: false,
      isFilmReviewsDataLoading: false,
      isSimilarFilmsDataLoading: false,
      isFavoriteFilmsDataLoading: false,
      isReviewFormDisabled: true,
    };
    expect(filmsData.reducer(state, { type: commentAction.rejected.type }))
      .toEqual({
        films: [],
        filmReviews: [],
        similarFilms: [],
        promoFilm: {} as Film,
        favoriteFilms: [],
        isFilmsDataLoading: false,
        isFilmDataLoading: false,
        isFilmReviewsDataLoading: false,
        isSimilarFilmsDataLoading: false,
        isFavoriteFilmsDataLoading: false,
        isReviewFormDisabled: false,
      });
  });
});
