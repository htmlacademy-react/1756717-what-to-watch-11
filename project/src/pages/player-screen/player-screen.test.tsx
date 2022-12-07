import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppRoute } from '../../const';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { mockFilm } from '../../mocks/mocks';
import PlayerScreen from './player-screen';
import { renderWithReduxAndHistoryRoaterWithHelmet, renderWithReduxHistoryRoaterHelmetAndRoutes } from '../../test-utils/test-utils';

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
    renderWithReduxAndHistoryRoaterWithHelmet(<PlayerScreen />, store, history);

    expect(screen.getByText(/Exit/)).toBeInTheDocument();
    expect(screen.getByTestId('video')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBe(3);
  });

  it('should redirect to movie screen if user clicks on the exit button', async () => {
    history.push(`${AppRoute.Player}/${film.id}`);
    const store = mockStore({
      DATA: { film: film },
    });

    renderWithReduxHistoryRoaterHelmetAndRoutes(store, history, `${AppRoute.Player}/${film.id}`, <PlayerScreen />, `${AppRoute.Film}/${film.id}`, <h1>Movie Screen</h1>);

    await userEvent.click(screen.getByText(/Exit/));
    expect(screen.getByText('Movie Screen')).toBeInTheDocument();
  });
});
