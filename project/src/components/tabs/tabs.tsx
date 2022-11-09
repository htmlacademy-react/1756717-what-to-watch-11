import { Film } from '../../types/types';
import { getRatingLevel } from '../../util';

function Tabs(film: Film): JSX.Element {
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <a href="#" className="film-nav__link">Overview</a>
          </li>
          <li className="film-nav__item">
            <a href="#" className="film-nav__link">Details</a>
          </li>
          <li className="film-nav__item">
            <a href="#" className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>

      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(film.rating)}</span>
          <span className="film-rating__count">{`${film.scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>{`Director: ${film.director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${film.starring[0]} and other`}</strong></p>
      </div>
    </div>
  );
}

export default Tabs;
