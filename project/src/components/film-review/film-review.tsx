import { Review } from '../../types/reviews';
import { getFormatReviewDate } from '../../util';

type FilmReviewProps = {
  review: Review;
}

function FilmReview({review}: FilmReviewProps): JSX.Element {
  return (
    <div className="review" data-testid="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={review.date}>{getFormatReviewDate(review.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default FilmReview;
