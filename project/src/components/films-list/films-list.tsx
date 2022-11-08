import FilmCard from '../film-card/film-card';
import { FilmsListProps } from '../../types/types';

function FilmsList({ films }: FilmsListProps): JSX.Element {

  return (
    <div className="catalog__films-list" >
      {films.map((film) => <FilmCard key={film.id} film={film} />)}
    </div>
  );
}

export default FilmsList;
