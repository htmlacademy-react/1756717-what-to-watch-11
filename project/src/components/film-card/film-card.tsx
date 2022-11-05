import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmCardProps } from '../../types/types';
import VideoPlayer from '../video-player/video-player';

function FilmCard({ film, isActive }: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" id={film.id.toString()}>
      <div className="small-film-card__image">
        {
          isActive ?
            <VideoPlayer film={film} autoPlay/> :
            <img src={film.posterImage} alt={film.name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
