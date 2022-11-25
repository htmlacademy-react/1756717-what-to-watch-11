import { Film } from '../../types/films';
import { getRatingLevel, getRowList } from '../../util';

type FilmTabOverviewProps = {
  film: Film;
}

function FilmTabOverview({film}: FilmTabOverviewProps): JSX.Element {

  return (
    <>
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

        <p className="film-card__starring"><strong>{`Starring: ${getRowList(film.starring)} and other`}</strong></p>
      </div>
    </>
  );
}

export default FilmTabOverview;
