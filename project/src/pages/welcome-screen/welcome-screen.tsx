import FilmCard from '../../components/film-card/film-card';

type WelcomeScreenProps = {
  title: string;
  genre: string;
  year: number;
}

const filmCardMockList = [
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
  {
    id: 10,
    src: 'img/pulp-fiction.jpg',
    alt: 'Pulp Fiction',
    filmTitle: 'Pulp Fiction',
  },
  {
    id: 11,
    src: 'img/no-country-for-old-men.jpg',
    alt: 'No Country for Old Men',
    filmTitle: 'No Country for Old Men',
  },
  {
    id: 12,
    src: 'img/snatch.jpg',
    alt: 'Snatch',
    filmTitle: 'Snatch',
  },
  {
    id: 13,
    src: 'img/moonrise-kingdom.jpg',
    alt: 'Moonrise Kingdom',
    filmTitle: 'Moonrise Kingdom',
  },
  {
    id: 14,
    src: 'img/seven-years-in-tibet.jpg',
    alt: 'Seven Years in Tibet',
    filmTitle: 'Seven Years in Tibet',
  },
  {
    id: 15,
    src: 'img/midnight-special.jpg',
    alt: 'Midnight Special',
    filmTitle: 'Midnight Special',
  },
  {
    id: 16,
    src: 'img/war-of-the-worlds.jpg',
    alt: 'War of the Worlds',
    filmTitle: 'War of the Worlds',
  },
  {
    id: 17,
    src: 'img/dardjeeling-limited.jpg',
    alt: 'Dardjeeling Limited',
    filmTitle: 'Dardjeeling Limited',
  },
  {
    id: 18,
    src: 'img/orlando.jpg',
    alt: 'Orlando',
    filmTitle: 'Orlando',
  },
  {
    id: 19,
    src: 'img/mindhunter.jpg',
    alt: 'Mindhunter',
    filmTitle: 'Mindhunter',
  },
  {
    id: 20,
    src: 'img/midnight-special.jpg',
    alt: 'Midnight Special',
    filmTitle: 'Midnight Special',
  },
];

function WelcomeScreen({ title, genre, year }: WelcomeScreenProps): JSX.Element {
  return (
    <>
      <section className="film-card">
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

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
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

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            {filmCardMockList.map(({ id, src, alt, filmTitle }) => <FilmCard key={id} src={src} alt={alt} filmTitle={filmTitle} />)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
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
