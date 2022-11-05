import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmCardProps } from '../../types/types';
import VideoPlayer from '../video-player/video-player';

function FilmCard({ id, src, alt, filmTitle, posterImage, previewVideoLink, isActive }: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" id={id.toString()}>
      <div className="small-film-card__image">
        {
          isActive ?
            <VideoPlayer src={previewVideoLink} poster={posterImage} autoPlay/> :
            <img src={src} alt={alt} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>{filmTitle}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
