import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import { mockReviews } from '../../mocks/mocks';
import FilmTabReviews from './film-tab-reviews';

const history = createMemoryHistory();
const reviews = mockReviews;
describe('Component: FilmTabReviews', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <FilmTabReviews reviews={reviews} />
      </HistoryRouter>
    );

    expect(screen.getAllByTestId('review').length).toBe(reviews.length);
  });
});
