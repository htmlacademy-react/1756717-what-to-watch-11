import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import Logo from './logo';

const history = createMemoryHistory();
describe('Component: Logo', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <Logo />
      </HistoryRouter>
    );

    expect(screen.getByText(/T/)).toBeInTheDocument();
    expect(screen.getAllByText('W').length).toBe(2);
  });
});
