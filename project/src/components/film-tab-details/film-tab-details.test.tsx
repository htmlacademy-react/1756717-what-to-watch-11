import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import FilmTabDetails from './film-tab-details';
import { mockFilm } from '../../mocks/mocks';
import { getFormatDetailsFilmRunTime } from '../../util';
import { renderWithHistoryRouter } from '../../test-utils/test-utils';

const history = createMemoryHistory();
const film = mockFilm;
describe('Component: FilmTabDetails', () => {
  it('should render correctly', () => {

    renderWithHistoryRouter(<FilmTabDetails film={film} />, history);

    expect(screen.getByText(/Director/)).toBeInTheDocument();
    expect(screen.getByText(/Starring/)).toBeInTheDocument();
    expect(screen.getByText(/Run Time/)).toBeInTheDocument();
    expect(screen.getByText(/Genre/)).toBeInTheDocument();
    expect(screen.getByText(/Released/)).toBeInTheDocument();
    expect(screen.getByText(film.director)).toBeInTheDocument();
    expect(screen.getByText(getFormatDetailsFilmRunTime(film.runTime))).toBeInTheDocument();
    expect(screen.getByText(film.genre)).toBeInTheDocument();
    expect(screen.getByText(film.released.toString())).toBeInTheDocument();
  });
});
