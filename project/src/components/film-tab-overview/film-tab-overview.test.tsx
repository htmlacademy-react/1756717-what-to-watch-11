import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import { mockFilm } from '../../mocks/mocks';
import FilmTabOverview from './film-tab-overview';
import { getRatingLevel, getRowList } from '../../util';

const history = createMemoryHistory();
const film = mockFilm;
describe('Component: FilmTabOverview', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <FilmTabOverview film={film} />
      </HistoryRouter>
    );

    const ratings = `${film.scoresCount} ratings`;
    const director = `Director: ${film.director}`;
    const starring = `Starring: ${getRowList(film.starring)} and other`;

    expect(screen.getByText(film.rating.toString())).toBeInTheDocument();
    expect(screen.getByText(getRatingLevel(film.rating))).toBeInTheDocument();
    expect(screen.getByText(ratings)).toBeInTheDocument();
    expect(screen.getByText(film.description)).toBeInTheDocument();
    expect(screen.getByText(director)).toBeInTheDocument();
    expect(screen.getByText(starring)).toBeInTheDocument();
  });
});
