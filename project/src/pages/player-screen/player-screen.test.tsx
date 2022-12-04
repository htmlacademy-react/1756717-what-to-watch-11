import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../components/history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { AppRoute } from '../../const';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { mockFilm } from '../../mocks/mocks';
import PlayerScreen from './player-screen';

const history = createMemoryHistory();
const mockStore = configureMockStore([thunk]);
const film = mockFilm;


describe('Component: PlayerScreen', () => {

  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
  });
  it('should render correctly', () => {
    const store = mockStore({
      DATA: { film: film },
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <PlayerScreen />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Exit/)).toBeInTheDocument();
    expect(screen.getByTestId('video')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBe(3);
  });

  it('should redirect to movie screen if user clicks on the exit button', async () => {
    history.push(`${AppRoute.Player}/${film.id}`);
    const store = mockStore({
      DATA: { film: film },
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Routes>
              <Route
                path={`${AppRoute.Player}/${film.id}`}
                element={<PlayerScreen />}
              />
              <Route
                path={`${AppRoute.Film}/${film.id}`}
                element={<h1>Movie Screen</h1>}
              />
            </Routes>
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    await userEvent.click(screen.getByText(/Exit/));
    expect(screen.getByText('Movie Screen')).toBeInTheDocument();
  });
});
