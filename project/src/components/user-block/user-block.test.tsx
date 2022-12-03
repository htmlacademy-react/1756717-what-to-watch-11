import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import UserBlock from './user-block';
import { AppRoute, AuthorizationStatus } from '../../const';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';

const history = createMemoryHistory();
const mockStore = configureMockStore([thunk]);
describe('Component: UserBlock', () => {
  it('should render correctly when user is auth', () => {

    const authorizationStatus = AuthorizationStatus.Auth;

    const store = mockStore({
      USER: { authorizationStatus: authorizationStatus }
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <UserBlock />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/)).toBeInTheDocument();
    expect(screen.getByAltText('User avatar')).toBeInTheDocument();
  });

  it('should render correctly when user is noauth', () => {

    const authorizationStatus = AuthorizationStatus.NoAuth;

    const store = mockStore({
      USER: { authorizationStatus: authorizationStatus }
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <UserBlock />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Sign in/)).toBeInTheDocument();
  });

  it('should dispatch logoutAction when user is auth and click "sign out"', async () => {

    const authorizationStatus = AuthorizationStatus.Auth;

    const store = mockStore({
      USER: { authorizationStatus: authorizationStatus }
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <UserBlock />
        </HistoryRouter>
      </Provider>,
    );

    await userEvent.click(screen.getByRole('link'));

    const actions = store.getActions();

    expect(actions[0].type).toBe('user/logout/pending');
  });

  it('should redirect to AuthScreen when user is noauth and clicks the link', async () => {

    const authorizationStatus = AuthorizationStatus.NoAuth;

    const store = mockStore({
      USER: { authorizationStatus: authorizationStatus }
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={AppRoute.Main}
              element={<UserBlock />}
            />
            <Route
              path={AppRoute.SignIn}
              element={<h1>Auth Screen</h1>}
            />
          </Routes>
          <UserBlock />
        </HistoryRouter>
      </Provider>,
    );

    await userEvent.click(screen.getAllByRole('link')[0]);

    expect(screen.getByText('Auth Screen')).toBeInTheDocument();
  });

});
