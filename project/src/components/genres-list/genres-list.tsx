import cn from 'classnames';
import { MouseEvent, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilms } from '../../store/films-data/selectors';
import { changeGenre, resetFilmsInListAmount } from '../../store/films-process/films-process';
import { getGenre } from '../../store/films-process/selectors';
import { getGenres } from '../../util';

function GenresList(): JSX.Element {

  const dispatch = useAppDispatch();
  const films = useAppSelector(getFilms);
  const currentGenre = useAppSelector(getGenre);
  const genres = useMemo(() => getGenres(films), [films]);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          data-testid="genre"
          className={cn(
            'catalog__genres-item',
            { 'catalog__genres-item--active': genre === currentGenre }
          )}
        >
          <Link
            to="#"
            className="catalog__genres-link"
            onClick={(evt: MouseEvent) => {
              evt.preventDefault();
              dispatch(changeGenre(genre));
              dispatch(resetFilmsInListAmount());
            }}
          >
            {genre}
          </Link>
        </li>
      ))}

    </ul>
  );
}

export default GenresList;
