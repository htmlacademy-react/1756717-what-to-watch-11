import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import FilmTabDetails from './film-tab-details';
import { mockFilm } from '../../mocks/mocks';
import { getFormatDetailsFilmRunTime } from '../../util';

const history = createMemoryHistory();
const film = mockFilm;
describe('Component: FilmTabDetails', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <FilmTabDetails film={film} />
      </HistoryRouter>
    );

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
