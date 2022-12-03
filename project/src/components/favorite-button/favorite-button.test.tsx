import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import FavoriteButton from './favorite-button';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { mockFilm, mockFilms } from '../../mocks/mocks';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const film = mockFilm;
const favoriteFilms = mockFilms;
const store = mockStore({
  DATA: { film: film, favoriteFilms: favoriteFilms },
});
const filmId = film.id;
describe('Component: FavoriteButton', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoriteButton filmId={filmId} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/My list/)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(favoriteFilms.length.toString());
  });
});
