import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppRoute, AuthorizationStatus } from '../../const';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import AuthScreen from './auth-screen';
import { renderWithReduxAndHistoryRouterWithHelmet, renderWithReduxHistoryRouterHelmetAndRoutes } from '../../test-utils/test-utils';

const history = createMemoryHistory();
const mockStore = configureMockStore([thunk]);
describe('Component: AuthScreen', () => {
  it('should render correctly', () => {

    const authorizationStatus = AuthorizationStatus.Unknown;

    const store = mockStore({
      USER: { authorizationStatus: authorizationStatus }
    });
    renderWithReduxAndHistoryRouterWithHelmet(<AuthScreen />, store, history);

    expect(screen.getAllByText(/Sign in/).length).toBe(2);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should dispatch loginAction when submit', async () => {

    const authorizationStatus = AuthorizationStatus.Unknown;

    const store = mockStore({
      USER: { authorizationStatus: authorizationStatus }
    });
    renderWithReduxAndHistoryRouterWithHelmet(<AuthScreen />, store, history);

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
    renderWithReduxHistoryRouterHelmetAndRoutes(store, history, AppRoute.SignIn, <AuthScreen />, AppRoute.Main, <h1>Main Screen</h1>);

    expect(screen.getByText('Main Screen')).toBeInTheDocument();
  });
});
