import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, PLAYER_DELAY } from '../../const';
import { Film } from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: Film;
}

function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [isActive, setActiveCard] = useState(false);

  let timeoutID: NodeJS.Timeout;

  const handleFilmCardMouseEnter = () => {
    timeoutID = setTimeout(() => {
      setActiveCard(true);
    }, PLAYER_DELAY);
  };


  const handleFilmCardMouseLeave = () => {
    clearTimeout(timeoutID);
    setActiveCard(false);
  };

  return (
    <article className="small-film-card catalog__films-card" id={film.id.toString()} onMouseEnter={handleFilmCardMouseEnter} onMouseLeave={handleFilmCardMouseLeave} data-testid="film">
      <div className="small-film-card__image">
        {
          isActive ?
            <VideoPlayer film={film} /> :
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
