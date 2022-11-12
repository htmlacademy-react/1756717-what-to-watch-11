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
import { Reviews } from '../../types/reviews';
import { Films } from '../../types/films';

type AppScreenProps = {
  title: string;
  genre: string;
  year: number;
  films: Films;
  reviews: Reviews;
}

function App({ title, genre, year, films, reviews }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<WelcomeScreen title={title} genre={genre} year={year} films={films}/>} />
          <Route path={AppRoute.SignIn} element={<AuthScreen />} />
          <Route path={AppRoute.MyList} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyListScreen films={films}/>
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Film}/:id`} element={<MovieScreen films={films} reviews={reviews}/>} />
          <Route path={`${AppRoute.Film}/:id/${AppRoute.AddReview}`} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <ReviewScreen films={films}/>
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Player}/:id`} element={<PlayerScreen films={films}/>} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
