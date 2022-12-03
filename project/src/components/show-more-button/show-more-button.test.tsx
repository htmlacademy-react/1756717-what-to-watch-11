import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import ShowMoreButton from './show-more-button';

const history = createMemoryHistory();
describe('Component: ShowMoreButton', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <ShowMoreButton onClick={jest.fn()}/>
      </HistoryRouter>
    );

    expect(screen.getByText(/Show more/)).toBeInTheDocument();
  });
});
