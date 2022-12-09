import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import ReviewForm from '../../components/review-form/review-form';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getFilm, getFilmDataLoadingStatus } from '../../store/films-data/selectors';
import { useEffect } from 'react';
import { fetchFilmAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function ReviewScreen(): JSX.Element {

  const params = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const isFilmDataLoading = useAppSelector(getFilmDataLoadingStatus);

  useEffect(() => {
    if (params.id && film?.id.toString() !== params.id) {
      dispatch(fetchFilmAction(params.id));
    }
  }, [dispatch, film?.id, params.id]);

  if (isFilmDataLoading && film) {
    return <LoadingScreen />;
  }

  if(!film) {
    return <NotFoundScreen />;
  }

  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>WTW. Leave a review</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Film}/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>
  );
}

export default ReviewScreen;
