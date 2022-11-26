import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/films';

type PlayerButtonProps = {
  film: Film;
}

function PlayerButton({ film }: PlayerButtonProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <button className="btn btn--play film-card__button" onClick={() => navigate(`${AppRoute.Player}/${film.id}`)} type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayerButton;
