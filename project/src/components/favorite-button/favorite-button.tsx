import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFavoriteFilmAction } from '../../store/api-actions';
import { getFavoriteFilms } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type FavoriteButtonProps = {
  filmId: number;
};

function FavoriteButton({ filmId }: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const isFilmFavorite = favoriteFilms.some((film) => film.id === filmId);

  const handleFavoriteAddButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.SignIn);
      return;
    }
    if (!isFilmFavorite) {
      dispatch(setFavoriteFilmAction([filmId, true]));
    } else {
      dispatch(setFavoriteFilmAction([filmId, false]));
    }
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={handleFavoriteAddButtonClick}>
      {isFilmFavorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>)}
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}

export default memo(FavoriteButton);
