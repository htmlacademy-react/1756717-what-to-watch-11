import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../../components/history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { Route, Routes } from 'react-router-dom';
import AuthScreen from './auth-screen';
import { HelmetProvider } from 'react-helmet-async';

const history = createMemoryHistory();
const mockStore = configureMockStore([thunk]);
describe('Component: AuthScreen', () => {
  it('should render correctly', () => {

    const authorizationStatus = AuthorizationStatus.Unknown;

    const store = mockStore({
      USER: { authorizationStatus: authorizationStatus }
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <AuthScreen />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getAllByText(/Sign in/).length).toBe(2);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should dispatch loginAction when submit', async () => {

    const authorizationStatus = AuthorizationStatus.Unknown;

    const store = mockStore({
      USER: { authorizationStatus: authorizationStatus }
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <AuthScreen />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    await userEvent.type(screen.getByPlaceholderText('Email address'), 'elis@mail.ru');
    await userEvent.type(screen.getByPlaceholderText('Password'), '159357');

    expect(screen.getByDisplayValue(/elis@mail.ru/)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/159357/)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    const actions = store.getActions();

    expect(actions[0].type).toBe('user/login/pending');
  });

  it('should redirect to main screen if user is auth', () => {

    const authorizationStatus = AuthorizationStatus.Auth;

    const store = mockStore({
      USER: { authorizationStatus: authorizationStatus }
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <Routes>
              <Route
                path={AppRoute.SignIn}
                element={<AuthScreen />}
              />
              <Route
                path={AppRoute.Main}
                element={<h1>Main Screen</h1>}
              />
            </Routes>
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Main Screen')).toBeInTheDocument();
  });
});
