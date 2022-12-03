import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import UserBlock from './user-block';
import { AuthorizationStatus } from '../../const';

const history = createMemoryHistory();
const mockStore = configureMockStore();
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
});
