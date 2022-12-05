import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import { mockFilm } from '../../mocks/mocks';
import FilmCard from './film-card';
import userEvent from '@testing-library/user-event';
import { AppRoute } from '../../const';
import { renderWithHistoryRouter, renderWithHistoryRouterAndRoutes } from '../../mocks/test-util';

const history = createMemoryHistory();
const film = mockFilm;
describe('Component: FilmCard', () => {
  it('should render correctly', () => {

    renderWithHistoryRouter(<FilmCard film={film} />, history);

    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to movie screen when user click on the link', async () => {
    history.push(AppRoute.Main);
    renderWithHistoryRouterAndRoutes(history, AppRoute.Main, <FilmCard film={film}/>, `${AppRoute.Film}/${film.id}`, <h1>Movie Screen</h1>);

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText('Movie Screen')).toBeInTheDocument();
  });

  it('should redirect to movie screen when user click on the card', async () => {
    history.push(AppRoute.Main);
    renderWithHistoryRouterAndRoutes(history, AppRoute.Main, <FilmCard film={film}/>, `${AppRoute.Film}/${film.id}`, <h1>Movie Screen</h1>);

    await userEvent.click(screen.getByTestId('film'));

    expect(screen.getByText('Movie Screen')).toBeInTheDocument();
  });
});
