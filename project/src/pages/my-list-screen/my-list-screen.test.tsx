import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppRoute, AuthorizationStatus } from '../../const';
import thunk from 'redux-thunk';
import { mockFilms } from '../../mocks/mocks';
import MyListScreen from './my-list-screen';
import { renderWithReduxAndHistoryRouterWithHelmet } from '../../test-utils/test-utils';

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
    renderWithReduxAndHistoryRouterWithHelmet(<MyListScreen />, store, history);

    expect(screen.getByText(/My list/)).toBeInTheDocument();
  });
});
