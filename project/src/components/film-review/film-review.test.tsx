import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import { mockReviews } from '../../mocks/mocks';
import FilmReview from './film-review';
import { getFormatReviewDate } from '../../util';

const history = createMemoryHistory();
describe('Component: FilmReview', () => {
  it('should render correctly', () => {
    const review = mockReviews[0];

    render(
      <HistoryRouter history={history}>
        <FilmReview review={review} />
      </HistoryRouter>
    );

    expect(screen.getByText(review.comment)).toBeInTheDocument();
    expect(screen.getByText(review.user.name)).toBeInTheDocument();
    expect(screen.getByText(getFormatReviewDate(review.date))).toBeInTheDocument();
    expect(screen.getByText(review.rating.toString())).toBeInTheDocument();
  });
});
