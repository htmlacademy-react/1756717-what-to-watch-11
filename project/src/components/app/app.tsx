import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import ReviewScreen from '../../pages/review-screen/review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import { Reviews } from '../../types/reviews';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFilms } from '../../store/action';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';
import { useEffect } from 'react';

type AppScreenProps = {
  title: string;
  genre: string;
  year: number;
  reviews: Reviews;
}

function App({ title, genre, year, reviews }: AppScreenProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsDataLoading);

  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.films);

  useEffect(() => {
    dispatch(setFilms(films));
  }, [films, dispatch]);

  if (authorizationStatus === AuthorizationStatus.Unknown || isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<WelcomeScreen title={title} genre={genre} year={year} films={films}/>} />
          <Route path={AppRoute.SignIn} element={<AuthScreen />} />
          <Route path={AppRoute.MyList} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyListScreen films={films}/>
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Film}/:id`} element={<MovieScreen films={films} reviews={reviews}/>} />
          <Route path={`${AppRoute.Film}/:id/${AppRoute.AddReview}`} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <ReviewScreen films={films}/>
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Player}/:id`} element={<PlayerScreen films={films}/>} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
