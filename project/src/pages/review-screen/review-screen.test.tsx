import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../../components/history-route/history-route';
import ReviewScreen from './review-screen';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockFilm } from '../../mocks/mocks';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';

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
});
