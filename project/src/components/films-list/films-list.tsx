import { useState, BaseSyntheticEvent } from 'react';
import FilmCard from '../film-card/film-card';
import { FilmsListProps } from '../../types/types';
import { playerDelay } from '../../const';

function FilmsList({ films }: FilmsListProps): JSX.Element {
  const [activeCardId, setActiveCard] = useState<number | null>(null);

  let timeoutID: NodeJS.Timeout;
  const timeouts: NodeJS.Timeout[] = [];

  const handleFilmCardMouseOver = (evt: BaseSyntheticEvent) => {
    const target = evt.target as Element;
    const parent = target.parentElement as Element;
    if (target.className === 'small-film-card__link' || parent.classList.contains('small-film-card')) {
      timeoutID = setTimeout(() => {
        setActiveCard(Number(parent.id));
      }, playerDelay);
      timeouts.push(timeoutID);
    } else {
      timeouts.forEach((timeout) => clearTimeout(timeout));
      setActiveCard(null);
    }
  };

  const handleFilmCardMouseLeave = () => {
    timeouts.forEach((timeout) => clearTimeout(timeout));
    setActiveCard(null);
  };

  return (
    <div className="catalog__films-list" onMouseOver={handleFilmCardMouseOver} onMouseLeave={handleFilmCardMouseLeave}>
      {films.map((film) => <FilmCard key={film.id} film={film} isActive={film.id === activeCardId} />)}
    </div>
  );
}

export default FilmsList;
