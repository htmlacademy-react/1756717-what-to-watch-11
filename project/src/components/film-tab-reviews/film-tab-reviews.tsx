import { Reviews } from '../../types/reviews';
import FilmReview from '../film-review/film-review';

type FilmTabReviewsProps = {
  reviews: Reviews;
}

function FilmTabReviews({reviews}: FilmTabReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(reviews.length / 2).map((review) => <FilmReview key={review.id} review={review}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice(0, reviews.length / 2).map((review) => <FilmReview key={review.id} review={review} />)}
      </div>
    </div>
  );
}

export default FilmTabReviews;
