import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FilmsList from '../../components/films-list/films-list';
import UserBlock from '../../components/user-block/user-block';
import { AppRoute } from '../../const';
import GenresList from '../../components/genres-list/genres-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilmsSelectedByGenre } from '../../util';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useEffect } from 'react';
import { fetchFilmsAction, fetchPromoFilmAction } from '../../store/api-actions';
import { getFilms, getPromoFilm } from '../../store/films-data/selectors';
import { getFilmsAmount, getGenre } from '../../store/films-process/selectors';
import { resetFilmsInListAmount, setFilmsInListAmount } from '../../store/films-process/films-process';

function WelcomeScreen(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const films = useAppSelector(getFilms);

  useEffect(() => {
    if (films.length <= 0) {
      dispatch(fetchFilmsAction());
    }
  }, [films, dispatch]);

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(resetFilmsInListAmount());
  }, [location, dispatch]);

  const promoFilm = useAppSelector(getPromoFilm);

  const handlePlayPromoFilmButtonClick = () => {
    if (promoFilm === undefined) {
      return navigate('*');
    }
    return navigate(`${AppRoute.Player}/${promoFilm.id}`);
  };

  const currentGenre = useAppSelector(getGenre);

  const renderedFilmsAmount = useAppSelector(getFilmsAmount);

  const selectedFilms = getFilmsSelectedByGenre(films, currentGenre);

  const renderedFilms = getFilmsSelectedByGenre(films, currentGenre).slice(0, renderedFilmsAmount);

  return (
    <>
      <section className="film-card">
        <Helmet>
          <title>WTW. Welcome!</title>
        </Helmet>
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" onClick={handlePlayPromoFilmButtonClick} type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <FilmsList films={renderedFilms} />

          <div className="catalog__more">
            {selectedFilms.length > renderedFilms.length &&
              <ShowMoreButton
                onClick={() => dispatch(setFilmsInListAmount())}
              />}
          </div>

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default WelcomeScreen;
