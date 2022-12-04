import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../components/history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import thunk from 'redux-thunk';
import { HelmetProvider } from 'react-helmet-async';
import { mockFilms } from '../../mocks/mocks';
import MyListScreen from './my-list-screen';

const history = createMemoryHistory();
const mockStore = configureMockStore([thunk]);
const favoriteFilms = mockFilms;

describe('Component: MyListScreen', () => {
  it('should render correctly', () => {
    const authorizationStatus = AuthorizationStatus.Auth;
    history.push(AppRoute.MyList);
    const store = mockStore({
      DATA: { favoriteFilms: favoriteFilms },
      USER: {authorizationStatus: authorizationStatus}
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <MyListScreen />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/My list/)).toBeInTheDocument();
  });
});
