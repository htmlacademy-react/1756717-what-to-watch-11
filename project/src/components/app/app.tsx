import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import ReviewScreen from '../../pages/review-screen/review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks/hooks';
import { getAuthCheckedStatus, getAuthorizationStatus } from '../../store/user-process/selectors';
import { getFilmsDataLoadingStatus } from '../../store/films-data/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoadingStatus);

  if (!isAuthChecked || isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Main} element={<WelcomeScreen />} />
        <Route path={AppRoute.SignIn} element={<AuthScreen />} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyListScreen />
          </PrivateRoute>
        }
        />
        <Route path={`${AppRoute.Film}/:id`} element={<MovieScreen />} />
        <Route path={`${AppRoute.Film}/:id/${AppRoute.AddReview}`} element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <ReviewScreen />
          </PrivateRoute>
        }
        />
        <Route path={`${AppRoute.Player}/:id`} element={<PlayerScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
