import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { mockFilm } from '../../mocks/mocks';
import ReviewForm from './review-form';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const film = mockFilm;

const store = mockStore({
  DATA: { film: film }
});
describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewForm />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Post/)).toBeInTheDocument();
    expect(screen.getAllByRole('radio').length).toBe(10);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
