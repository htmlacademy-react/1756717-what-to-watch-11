import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import { mockReviews } from '../../mocks/mocks';
import FilmReview from './film-review';
import { getFormatReviewDate } from '../../util';
import { renderWithHistoryRouter } from '../../test-utils/test-utils';

const history = createMemoryHistory();
describe('Component: FilmReview', () => {
  it('should render correctly', () => {
    const review = mockReviews[0];

    renderWithHistoryRouter(<FilmReview review={review} />, history);

    expect(screen.getByText(review.comment)).toBeInTheDocument();
    expect(screen.getByText(review.user.name)).toBeInTheDocument();
    expect(screen.getByText(getFormatReviewDate(review.date))).toBeInTheDocument();
    expect(screen.getByText(review.rating.toString())).toBeInTheDocument();
  });
});
