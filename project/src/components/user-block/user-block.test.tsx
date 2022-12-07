import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import UserBlock from './user-block';
import { AppRoute, AuthorizationStatus } from '../../const';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';
import { renderWithReduxAndHistoryRoater, renderWithReduxHistoryRoaterAndRoutes } from '../../test-utils/test-utils';

const history = createMemoryHistory();
const mockStore = configureMockStore([thunk]);
describe('Component: UserBlock', () => {
  it('should render correctly when user is auth', () => {

    const authorizationStatus = AuthorizationStatus.Auth;

    const store = mockStore({
      USER: { authorizationStatus: authorizationStatus }
    });
    renderWithReduxAndHistoryRoater(<UserBlock />, store, history);

    expect(screen.getByText(/Sign out/)).toBeInTheDocument();
    expect(screen.getByAltText('User avatar')).toBeInTheDocument();
  });

  it('should render correctly when user is noauth', () => {

    const authorizationStatus = AuthorizationStatus.NoAuth;

    const store = mockStore({
      USER: { authorizationStatus: authorizationStatus }
    });
    renderWithReduxAndHistoryRoater(<UserBlock />, store, history);

    expect(screen.getByText(/Sign in/)).toBeInTheDocument();
  });

  it('should dispatch logoutAction when user is auth and click "sign out"', async () => {

    const authorizationStatus = AuthorizationStatus.Auth;

    const store = mockStore({
      USER: { authorizationStatus: authorizationStatus }
    });
    renderWithReduxAndHistoryRoater(<UserBlock />, store, history);

    await userEvent.click(screen.getByRole('link'));

    const actions = store.getActions();

    expect(actions[0].type).toBe('user/logout/pending');
  });

  it('should redirect to AuthScreen when user is noauth and clicks the link', async () => {

    const authorizationStatus = AuthorizationStatus.NoAuth;

    const store = mockStore({
      USER: { authorizationStatus: authorizationStatus }
    });
    renderWithReduxHistoryRoaterAndRoutes(store, history, AppRoute.Main, <UserBlock />, AppRoute.SignIn, <h1>Auth Screen</h1>);

    await userEvent.click(screen.getAllByRole('link')[0]);

    expect(screen.getByText('Auth Screen')).toBeInTheDocument();
  });

});
