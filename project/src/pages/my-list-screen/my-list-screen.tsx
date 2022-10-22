import FilmCard from '../../components/film-card/film-card';

const filmFavouriteMockList = [
  {
    id: 1,
    src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    alt: 'Fantastic Beasts: The Crimes of Grindelwald',
    filmTitle: 'Fantastic Beasts: The Crimes of Grindelwald',
  },
  {
    id: 2,
    src: 'img/bohemian-rhapsody.jpg',
    alt: 'Bohemian Rhapsody',
    filmTitle: 'Bohemian Rhapsody',
  },
  {
    id: 3,
    src: 'img/macbeth.jpg',
    alt: 'Macbeth',
    filmTitle: 'Macbeth',
  },
  {
    id: 4,
    src: 'img/aviator.jpg',
    alt: 'Aviator',
    filmTitle: 'Aviator',
  },
  {
    id: 5,
    src: 'img/we-need-to-talk-about-kevin.jpg',
    alt: 'We need to talk about Kevin',
    filmTitle: 'We need to talk about Kevin',
  },
  {
    id: 6,
    src: 'img/what-we-do-in-the-shadows.jpg',
    alt: 'What We Do in the Shadows',
    filmTitle: 'What We Do in the Shadows',
  },
  {
    id: 7,
    src: 'img/revenant.jpg',
    alt: 'Revenant',
    filmTitle: 'Revenant',
  },
  {
    id: 8,
    src: 'img/johnny-english.jpg',
    alt: 'Johnny English',
    filmTitle: 'Johnny English',
  },
  {
    id: 9,
    src: 'img/shutter-island.jpg',
    alt: 'Shutter Island',
    filmTitle: 'Shutter Island',
  },
];

function MyListScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
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
          {filmFavouriteMockList.map(({ id, src, alt, filmTitle }) => <FilmCard key={id} src={src} alt={alt} filmTitle={filmTitle} />)}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
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
  );
}

export default MyListScreen;
