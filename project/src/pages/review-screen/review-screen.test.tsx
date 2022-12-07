import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import ReviewScreen from './review-screen';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockFilm } from '../../mocks/mocks';
import { AppRoute, AuthorizationStatus } from '../../const';
import userEvent from '@testing-library/user-event';
import { renderWithReduxAndHistoryRoaterWithHelmet, renderWithReduxHistoryRoaterHelmetAndRoutes } from '../../test-utils/test-utils';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const film = mockFilm;
const store = mockStore({
  DATA: { film: film },
  USER: {authorizationStatus: AuthorizationStatus.Auth}
});
describe('Component: ReviewScreen', () => {
  it('should render correctly', () => {
    renderWithReduxAndHistoryRoaterWithHelmet(<ReviewScreen />, store, history);

    expect(screen.getByText(/Add review/)).toBeInTheDocument();
    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(screen.getByAltText(film.name)).toBeInTheDocument();
  });

  it('should redirect to movie screen if user clicks on the breadcrumbs', async () => {
    history.push(`${AppRoute.Film}/${film.id}/${AppRoute.AddReview}`);

    renderWithReduxHistoryRoaterHelmetAndRoutes(store, history, `${AppRoute.Film}/${film.id}/${AppRoute.AddReview}`, <ReviewScreen />, `${AppRoute.Film}/${film.id}`, <h1>Movie Screen</h1>);

    await userEvent.click(screen.getByText(film.name));
    expect(screen.getByText('Movie Screen')).toBeInTheDocument();
  });
});
