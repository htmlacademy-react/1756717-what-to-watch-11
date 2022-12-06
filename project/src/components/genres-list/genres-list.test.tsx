import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockFilms } from '../../mocks/mocks';
import GenresList from './genres-list';
import userEvent from '@testing-library/user-event';
import { renderWithReduxAndHistoryRoater } from '../../test-utils/test-utils';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const films = mockFilms;
const genre = 'Drama';
const store = mockStore({
  DATA: { films: films },
  FILMS: {genre: genre}
});
describe('Component: GenresList', () => {
  it('should render correctly', () => {
    renderWithReduxAndHistoryRoater(<GenresList />, store, history);

    expect(screen.getAllByTestId('genre').length).toBe(films.length + 1);
    expect(screen.getByText(films[0].genre)).toBeInTheDocument();
    expect(screen.getByText(films[1].genre)).toBeInTheDocument();
    expect(screen.getByText(/All genre/)).toBeInTheDocument();
  });

  it('should dispatch changeGenre and resetFilmsInListAmount when user click on the link', async () => {

    renderWithReduxAndHistoryRoater(<GenresList />, store, history);

    await userEvent.click(screen.getByText('Drama'));

    const actions = store.getActions();

    expect(actions[0].type).toBe('FILMS/changeGenre');
    expect(actions[1].type).toBe('FILMS/resetFilmsInListAmount');
  });
});
