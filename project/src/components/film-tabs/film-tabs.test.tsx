import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import { mockFilm, mockReviews } from '../../mocks/mocks';
import FilmTabs from './film-tabs';

const history = createMemoryHistory();
const film = mockFilm;
const reviews = mockReviews;
describe('Component: FilmTabs', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <FilmTabs film={film} reviews={reviews}/>
      </HistoryRouter>
    );

    expect(screen.getByText(/Overview/)).toBeInTheDocument();
    expect(screen.getByText(/Details/)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/)).toBeInTheDocument();
  });
});
