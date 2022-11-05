import { useState, BaseSyntheticEvent } from 'react';
import FilmCard from '../film-card/film-card';
import { FilmsListProps } from '../../types/types';

function FilmsList({ films }: FilmsListProps): JSX.Element {
  const [activeCardId, setActiveCard] = useState<number | null>(null);

  const handleFilmCardMouseOver = (evt: BaseSyntheticEvent) => {
    const target = evt.target as Element;
    const parent = target.parentElement as Element;
    if (target.className === 'small-film-card__link' || parent.classList.contains('small-film-card')) {
      setActiveCard(Number(parent.id));
    } else {
      setActiveCard(null);
    }
  };

  const handleFilmCardMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="catalog__films-list" onMouseOver={handleFilmCardMouseOver} onMouseLeave={handleFilmCardMouseLeave}>
      {films.map((film) => <FilmCard key={film.id} film={film} isActive={film.id === activeCardId} />)}
    </div>
  );
}

export default FilmsList;
