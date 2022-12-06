import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import { mockFilms } from '../../mocks/mocks';
import FilmsList from './films-list';
import { renderWithHistoryRouter } from '../../test-utils/test-utils';

const history = createMemoryHistory();
const films = mockFilms;
describe('Component: FilmsList', () => {
  it('should render correctly', () => {

    renderWithHistoryRouter(<FilmsList films={films} />, history);

    expect(screen.getAllByTestId('film').length).toBe(films.length);
  });
});
