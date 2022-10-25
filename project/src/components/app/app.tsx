import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import ReviewScreen from '../../pages/review-screen/review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  title: string;
  genre: string;
  year: number;
}

function App({ title, genre, year }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<WelcomeScreen title={title} genre={genre} year={year} />} />
          <Route path={AppRoute.SignIn} element={<AuthScreen />} />
          <Route path={AppRoute.MyList} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyListScreen />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Film} element={<MovieScreen />}>
            <Route path={AppRoute.AddReview} element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <ReviewScreen />
              </PrivateRoute>
            }
            />
          </Route>
          <Route path={AppRoute.Player} element={<PlayerScreen />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
