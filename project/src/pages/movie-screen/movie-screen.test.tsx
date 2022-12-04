import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../components/history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MovieScreen from './movie-screen';
import { mockFilm, mockFilms } from '../../mocks/mocks';

const history = createMemoryHistory();
const mockStore = configureMockStore([thunk]);
const film = mockFilm;
const similarFilms = mockFilms;
const favoriteFilms = mockFilms;
const noop = jest.fn();
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
describe('Component: MovieScreen', () => {
  it('should render correctly if user is not auth', () => {
    const authorizationStatus = AuthorizationStatus.NoAuth;
    const store = mockStore({
      DATA: { film: film, similarFilms: similarFilms, favoriteFilms: favoriteFilms },
      USER: {authorizationStatus: authorizationStatus}
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <MovieScreen />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Play/)).toBeInTheDocument();
    expect(screen.getByText(/More like this/)).toBeInTheDocument();
    expect(screen.getAllByText(film.name).length).toBe(2);
    expect(screen.getByText(film.genre)).toBeInTheDocument();
    expect(screen.getByText(film.released.toString())).toBeInTheDocument();
    expect(screen.queryByText(/Add review/)).not.toBeInTheDocument();
  });

  it('should render correctly if user is auth', () => {
    const authorizationStatus = AuthorizationStatus.Auth;
    const store = mockStore({
      DATA: { film: film, similarFilms: similarFilms, favoriteFilms: favoriteFilms },
      USER: {authorizationStatus: authorizationStatus}
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <MovieScreen />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Play/)).toBeInTheDocument();
    expect(screen.getByText(/More like this/)).toBeInTheDocument();
    expect(screen.getAllByText(film.name).length).toBe(2);
    expect(screen.getByText(film.genre)).toBeInTheDocument();
    expect(screen.getByText(film.released.toString())).toBeInTheDocument();
    expect(screen.getByText(/Add review/)).toBeInTheDocument();
  });

  it('should redirect to player screen if user clicks on the play button', async () => {
    history.push(`${AppRoute.Film}/${film.id}`);
    const authorizationStatus = AuthorizationStatus.Auth;
    const store = mockStore({
      DATA: { film: film, similarFilms: similarFilms, favoriteFilms: favoriteFilms },
      USER: {authorizationStatus: authorizationStatus}
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Routes>
              <Route
                path={`${AppRoute.Film}/${film.id}`}
                element={<MovieScreen />}
              />
              <Route
                path={`${AppRoute.Player}/${film.id}`}
                element={<h1>Player Screen</h1>}
              />
            </Routes>
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    await userEvent.click(screen.getByTestId('play-button'));
    expect(screen.getByText('Player Screen')).toBeInTheDocument();
  });
});
