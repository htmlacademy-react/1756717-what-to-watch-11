import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {State} from '../types/state';
import {Action} from 'redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { checkAuthAction, commentAction, fetchFavoriteFilmsAction, fetchFilmAction, fetchFilmReviewsAction, fetchFilmsAction, fetchPromoFilmAction, fetchSimilarFilmsAction, setFavoriteFilmAction } from './api-actions';
import { mockFilm, mockFilms, mockReviews } from '../mocks/mocks';
import { NewReview } from '../types/reviews';


describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch loadFilms when GET /films', async () => {
    const films = mockFilms;
    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, films);

    const store = mockStore();

    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFilmsAction.pending.type,
      fetchFilmsAction.fulfilled.type
    ]);
  });

  it('should dispatch loadFilm when GET /films/{filmId}', async () => {
    const film = mockFilm;
    mockAPI
      .onGet(`${APIRoute.Films}/${film.id}`)
      .reply(200, film);

    const store = mockStore();

    await store.dispatch(fetchFilmAction(film.id.toString()));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFilmAction.pending.type,
      fetchFilmAction.fulfilled.type
    ]);
  });

  it('should dispatch loadFilmReviews when GET /comments/{filmId}', async () => {
    const reviews = mockReviews;
    const film = mockFilm;
    mockAPI
      .onGet(`${APIRoute.Reviews}/${film.id}`)
      .reply(200, reviews);

    const store = mockStore();

    await store.dispatch(fetchFilmReviewsAction(film.id.toString()));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFilmReviewsAction.pending.type,
      fetchFilmReviewsAction.fulfilled.type
    ]);
  });

  it('should dispatch loadPromoFilm when GET /promo', async () => {
    const promoFilm = mockFilm;
    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, promoFilm);

    const store = mockStore();

    await store.dispatch(fetchPromoFilmAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchPromoFilmAction.pending.type,
      fetchPromoFilmAction.fulfilled.type
    ]);
  });

  it('should dispatch loadSimilarFilms when GET /films/{filmId}/similar', async () => {
    const similarFilms = mockFilms;
    const film = mockFilm;
    mockAPI
      .onGet(`${APIRoute.Films}/${film.id}/similar`)
      .reply(200, similarFilms);

    const store = mockStore();

    await store.dispatch(fetchSimilarFilmsAction(film.id.toString()));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchSimilarFilmsAction.pending.type,
      fetchSimilarFilmsAction.fulfilled.type
    ]);
  });

  it('should dispatch loadFavoriteFilms when GET /favorite', async () => {
    const favoriteFilms = mockFilms;
    mockAPI
      .onGet(APIRoute.Favorite)
      .reply(200, favoriteFilms);

    const store = mockStore();

    await store.dispatch(fetchFavoriteFilmsAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFavoriteFilmsAction.pending.type,
      fetchFavoriteFilmsAction.fulfilled.type
    ]);
  });

  it('should dispatch postNewComment when POST /comments/{filmId}', async () => {
    const fakeComment: NewReview = {comment: 'The film is boring', rating: 4};
    const film = mockFilm;

    mockAPI
      .onPost(`${APIRoute.Reviews}/${film.id}`)
      .reply(200, []);


    const store = mockStore();

    await store.dispatch(commentAction([film.id,fakeComment]));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      commentAction.pending.type,
      commentAction.fulfilled.type
    ]);
  });

  it('should dispatch setFavoriteFilm when POST /favorite/{filmId}/{status}', async () => {
    const film = mockFilm;
    const status = true;

    mockAPI
      .onPost(`${APIRoute.Favorite}/${film.id}/${Number(status)}`)
      .reply(200, []);


    const store = mockStore();

    await store.dispatch(setFavoriteFilmAction([film.id, status]));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      setFavoriteFilmAction.pending.type,
      fetchFavoriteFilmsAction.pending.type,
      setFavoriteFilmAction.fulfilled.type,
    ]);
  });

});
