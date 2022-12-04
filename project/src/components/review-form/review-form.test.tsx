import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { mockFilm } from '../../mocks/mocks';
import ReviewForm from './review-form';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';

const history = createMemoryHistory();
const mockStore = configureMockStore([thunk]);
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

  it('should dispatch addCommentAction when the form is valid and user clicks the button to submit', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewForm />
        </HistoryRouter>
      </Provider>,
    );

    await userEvent.click(screen.getByText(/Rating 8/));
    await userEvent.type(screen.getByPlaceholderText('Review text'), 'The editing is a mess, and the transitions of the plot or characters are rather strange.');
    await userEvent.click(screen.getByRole('button'));

    const actions = store.getActions();

    expect(actions[0].type).toBe('DATA/setReviewFormDisabled');
    expect(actions[1].type).toBe('data/comment/pending');
  });
});
