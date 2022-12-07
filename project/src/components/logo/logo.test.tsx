import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import Logo from './logo';
import { AppRoute } from '../../const';
import userEvent from '@testing-library/user-event';
import {renderWithHistoryRouter, renderWithHistoryRouterAndRoutes} from '../../test-utils/test-utils';

const history = createMemoryHistory();
describe('Component: Logo', () => {
  it('should render correctly', () => {

    renderWithHistoryRouter(<Logo />, history);

    expect(screen.getByText(/T/)).toBeInTheDocument();
    expect(screen.getAllByText('W').length).toBe(2);
  });

  it('should redirect to main when user clicks', async () => {
    history.push(AppRoute.SignIn);

    renderWithHistoryRouterAndRoutes(history, AppRoute.SignIn, <Logo />, AppRoute.Main, <h1>Main Screen</h1>);

    await userEvent.click(screen.getAllByRole('link')[0]);

    expect(screen.getByText('Main Screen')).toBeInTheDocument();
  });
});
