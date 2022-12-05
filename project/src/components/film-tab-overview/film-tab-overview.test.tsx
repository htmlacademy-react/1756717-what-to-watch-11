import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import { mockFilm } from '../../mocks/mocks';
import FilmTabOverview from './film-tab-overview';
import { getRatingLevel, getRowList } from '../../util';
import { renderWithHistoryRouter } from '../../mocks/test-util';

const history = createMemoryHistory();
const film = mockFilm;
describe('Component: FilmTabOverview', () => {
  it('should render correctly', () => {

    renderWithHistoryRouter(<FilmTabOverview film={film} />, history);

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
