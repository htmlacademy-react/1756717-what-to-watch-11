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
    }
  };

  const handleFilmCardMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="catalog__films-list" onMouseOver={handleFilmCardMouseOver} onMouseLeave={handleFilmCardMouseLeave}>
      {films.map(({ id, posterImage, name }) => <FilmCard key={id} id={id} src={posterImage} alt={name} filmTitle={name} posterImage= {posterImage} isActive={id === activeCardId} />)}
    </div>
  );
}

export default FilmsList;
