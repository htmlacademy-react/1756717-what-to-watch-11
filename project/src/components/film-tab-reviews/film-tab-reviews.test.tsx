import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import { mockReviews } from '../../mocks/mocks';
import FilmTabReviews from './film-tab-reviews';
import { renderWithHistoryRouter } from '../../test-utils/test-utils';

const history = createMemoryHistory();
const reviews = mockReviews;
describe('Component: FilmTabReviews', () => {
  it('should render correctly', () => {

    renderWithHistoryRouter(<FilmTabReviews reviews={reviews} />, history);

    expect(screen.getAllByTestId('review').length).toBe(reviews.length);
  });
});
