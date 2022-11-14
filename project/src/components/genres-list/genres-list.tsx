import cn from 'classnames';
import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeGenre } from '../../store/action';

type GenreListProps = {
  currentGenre: string;
  genres: string[];
}

function GenresList({ currentGenre, genres }: GenreListProps): JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
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
