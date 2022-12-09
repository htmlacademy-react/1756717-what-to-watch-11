import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRoute, AuthorizationStatus, FilmSettings } from '../../const';
import FilmsList from '../../components/films-list/films-list';
import FilmTabs from '../../components/film-tabs/film-tabs';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchFavoriteFilmsAction, fetchFilmAction, fetchFilmReviewsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import { getFilm, getFilmDataLoadingStatus, getFilmReviews, getFilmReviewsDataLoadingStatus, getSimilarFilms, getSimilarFilmsDataLoadingStatus } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import FavoriteButton from '../../components/favorite-button/favorite-button';

function MovieScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  useEffect(() => {

    if (params.id) {
      dispatch(fetchFilmAction(params.id));
      dispatch(fetchFilmReviewsAction(params.id));
      dispatch(fetchSimilarFilmsAction(params.id));
      if (authorizationStatus === AuthorizationStatus.Auth) {
        dispatch(fetchFavoriteFilmsAction());
      }
    }

  }, [params.id, dispatch, authorizationStatus]);

  const film = useAppSelector(getFilm);
  const reviews = useAppSelector(getFilmReviews);
  const similarFilms = useAppSelector(getSimilarFilms).slice(0, FilmSettings.MaxSimilarFilmsAmount);
  const isFilmDataLoading = useAppSelector(getFilmDataLoadingStatus);
  const isFilmReviewsLoading = useAppSelector(getFilmReviewsDataLoadingStatus);
  const isSimilarFilmsLoading = useAppSelector(getSimilarFilmsDataLoadingStatus);

  if (!film) {
    return <NotFoundScreen />;
  }

  if (isFilmDataLoading || isFilmReviewsLoading || isSimilarFilmsLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      <section className="film-card film-card--full" style={{ backgroundColor: film.backgroundColor }}>
        <Helmet>
          <title>WTW. Film-page</title>
        </Helmet>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Logo />
            </div>

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" onClick={() => navigate(`${AppRoute.Player}/${film.id}`)} type="button" data-testid="play-button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <FavoriteButton filmId={film.id} />
                {authorizationStatus === AuthorizationStatus.Auth && <Link className="btn film-card__button" to={`${AppRoute.Film}/${film.id}/${AppRoute.AddReview}`}>Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>

            <FilmTabs film={film} reviews={reviews} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms} />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Logo light />
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MovieScreen;
