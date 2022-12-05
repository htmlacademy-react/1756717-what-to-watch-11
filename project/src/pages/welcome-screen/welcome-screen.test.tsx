import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockFilm, mockFilms } from '../../mocks/mocks';
import { AppRoute, AuthorizationStatus } from '../../const';
import userEvent from '@testing-library/user-event';
import WelcomeScreen from './welcome-screen';
import thunk from 'redux-thunk';
import { renderWithReduxAndHistoryRoaterWithHelmet, renderWithReduxHistoryRoaterHelmetAndRoutes } from '../../mocks/test-util';

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

    renderWithReduxAndHistoryRoaterWithHelmet(<WelcomeScreen />, store, history);

    expect(screen.getAllByText(promoFilm.name)[0]).toBeInTheDocument();
    expect(screen.getByText(promoFilm.released.toString())).toBeInTheDocument();
  });

  it('should redirect to player screen if user clicks on the promo film\'s play button', async () => {
    history.push(AppRoute.Main);

    renderWithReduxHistoryRoaterHelmetAndRoutes(store, history, AppRoute.Main, <WelcomeScreen />, `${AppRoute.Player}/${promoFilm.id}`, <h1>Player Screen</h1>);

    await userEvent.click(screen.getByTestId('play-button'));
    expect(screen.getByText('Player Screen')).toBeInTheDocument();
  });
});
