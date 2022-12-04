import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../../components/history-route/history-route';
import ReviewScreen from './review-screen';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockFilm } from '../../mocks/mocks';
import { Provider } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const film = mockFilm;
const store = mockStore({
  DATA: { film: film },
  USER: {authorizationStatus: AuthorizationStatus.Auth}
});
describe('Component: ReviewScreen', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <ReviewScreen />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Add review/)).toBeInTheDocument();
    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(screen.getByAltText(film.name)).toBeInTheDocument();
  });

  it('should redirect to movie screen if user clicks on the breadcrumbs', async () => {
    history.push(`${AppRoute.Film}/${film.id}/${AppRoute.AddReview}`);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Routes>
              <Route
                path={`${AppRoute.Film}/${film.id}/${AppRoute.AddReview}`}
                element={<ReviewScreen />}
              />
              <Route
                path={`${AppRoute.Film}/${film.id}`}
                element={<h1>Movie Screen</h1>}
              />
            </Routes>
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    await userEvent.click(screen.getByText(film.name));
    expect(screen.getByText('Movie Screen')).toBeInTheDocument();
  });
});
