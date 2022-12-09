import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';
import { getFavoriteFilms, getFavoriteFilmsDataLoadingStatus } from '../../store/films-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

function MyListScreen(): JSX.Element {
  const films = useAppSelector(getFavoriteFilms);
  const isFavoriteFilmsDataLoading = useAppSelector(getFavoriteFilmsDataLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);

  if (isFavoriteFilmsDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="user-page">
      <Helmet>
        <title>WTW. Favorite</title>
      </Helmet>
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={films} />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Logo light/>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;
