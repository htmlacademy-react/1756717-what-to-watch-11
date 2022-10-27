import { Helmet } from 'react-helmet-async';
import FilmCard from '../../components/film-card/film-card';
import filmsMock from '../../mocks/films';
import Logo from '../../components/logo/logo';

function MyListScreen(): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW. Favourite</title>
      </Helmet>
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {filmsMock.slice(0, 10).map(({ id, posterImage, name, description }) => <FilmCard key={id} src={posterImage} alt={description} filmTitle={name} />)}
        </div>
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
