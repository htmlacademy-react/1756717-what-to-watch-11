import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import FavoriteButton from './favorite-button';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockFilm, mockFilms } from '../../mocks/mocks';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import { renderWithReduxAndHistoryRoater } from '../../mocks/test-util';

const history = createMemoryHistory();
const mockStore = configureMockStore([thunk]);
const film = mockFilm;
const favoriteFilms = mockFilms;
const store = mockStore({
  DATA: { film: film, favoriteFilms: favoriteFilms },
});
const filmId = film.id;
describe('Component: FavoriteButton', () => {
  it('should render correctly', () => {

    renderWithReduxAndHistoryRoater(<FavoriteButton filmId={filmId} />, store, history);

    expect(screen.getByText(/My list/)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(favoriteFilms.length.toString());
  });

  it('should dispatch setFavoriteFilmAction when user clicked to the button', async () => {

    renderWithReduxAndHistoryRoater(<FavoriteButton filmId={filmId} />, store, history);

    await userEvent.click(screen.getByRole('button'));

    const actions = store.getActions();

    expect(actions[0].type).toBe('data/setFavoriteFilm/pending');
  });
});
