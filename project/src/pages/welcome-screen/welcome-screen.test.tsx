import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../../components/history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockFilm, mockFilms } from '../../mocks/mocks';
import { Provider } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import WelcomeScreen from './welcome-screen';
import thunk from 'redux-thunk';

const history = createMemoryHistory();
const mockStore = configureMockStore([thunk]);
const films = mockFilms;
const promoFilm = mockFilm;
const genre = 'All genre';
const favoriteFilms = mockFilms;
const store = mockStore({
  DATA: { films: films, promoFilm: promoFilm, favoriteFilms: favoriteFilms },
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  FILMS: { genre: genre }
});
describe('Component: ReviewScreen', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <WelcomeScreen />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getAllByText(promoFilm.name)[0]).toBeInTheDocument();
    expect(screen.getByText(promoFilm.released.toString())).toBeInTheDocument();
  });

  it('should redirect to player screen if user clicks on the promo film\'s play button', async () => {
    history.push(AppRoute.Main);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Routes>
              <Route
                path={AppRoute.Main}
                element={<WelcomeScreen />}
              />
              <Route
                path={`${AppRoute.Player}/${promoFilm.id}`}
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
