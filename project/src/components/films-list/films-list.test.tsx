import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import { mockFilms } from '../../mocks/mocks';
import FilmsList from './films-list';

const history = createMemoryHistory();
const films = mockFilms;
describe('Component: FilmsList', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <FilmsList films={films} />
      </HistoryRouter>
    );

    expect(screen.getAllByTestId('film').length).toBe(films.length);
  });
});
