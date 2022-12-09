import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-router/history-router';
import { AuthorizationStatus, AppRoute } from '../../const';
import App from './app';
import { mockFilm, mockFilms, mockReviews } from '../../mocks/mocks';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);
const promoFilm = mockFilm;
const film = mockFilm;
const similarFilms = mockFilms;
const favoriteFilms = mockFilms;
const genre = 'Drama';
const films = mockFilms;
const reviews = mockReviews;
const noop = jest.fn();
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.NoAuth },
  DATA: { promoFilm: promoFilm, film: film, similarFilms: similarFilms, favoriteFilms: favoriteFilms, films: films, reviews: reviews },
  FILMS: { genre: genre }
});

const authStore = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Auth },
  DATA: { promoFilm: promoFilm, film: film, similarFilms: similarFilms, favoriteFilms: favoriteFilms, films: films, reviews: reviews },
  FILMS: { genre: genre }
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

const authFakeApp = (
  <Provider store={authStore}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "WelcomeScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(fakeApp);

    expect(screen.getByText(promoFilm.name)).toBeInTheDocument();
    expect(screen.getByText(promoFilm.released.toString())).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.SignIn);

    render(fakeApp);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveClass('sign-in__input');
  });

  it('should render "MyListScreen" when user navigate to "/mylist"', () => {
    history.push(AppRoute.MyList);

    render(authFakeApp);

    expect(screen.getByText(/My list/)).toBeInTheDocument();
  });

  it('should render "MovieScreen" when user navigate to "/films/id"', () => {
    history.push(`${AppRoute.Film}/${film.id}`);

    render(fakeApp);

    expect(screen.getByText(/Play/)).toBeInTheDocument();
    expect(screen.getByText(/More like this/)).toBeInTheDocument();
  });

  it('should render "ReviewScreen" when user navigate to "/films/id/addReview"', () => {
    history.push(`${AppRoute.Film}/${film.id}/${AppRoute.AddReview}`);

    render(authFakeApp);

    expect(screen.getByText(/Add review/)).toBeInTheDocument();
  });

  it('should render "PlayerScreen" when user navigate to "/player/id"', () => {
    history.push(`${AppRoute.Player}/${film.id}`);

    render(fakeApp);

    expect(screen.getByText(/Exit/)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText(/404. Page not found/)).toBeInTheDocument();
    expect(screen.getByText(/Back to the main page/)).toBeInTheDocument();
  });
});
