import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import { mockFilm } from '../../mocks/mocks';
import FilmCard from './film-card';
import userEvent from '@testing-library/user-event';
import { AppRoute } from '../../const';
import { Route, Routes } from 'react-router-dom';

const history = createMemoryHistory();
const film = mockFilm;
describe('Component: FilmCard', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <FilmCard film={film} />
      </HistoryRouter>
    );

    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to movie screen when user click on the link', async () => {

    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<FilmCard film={film}/>}
          />
          <Route
            path={`${AppRoute.Film}/${film.id}`}
            element={<h1>Movie Screen</h1>}
          />
        </Routes>
      </HistoryRouter>
    );

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText('Movie Screen')).toBeInTheDocument();
  });
});
