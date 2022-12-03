import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import Logo from './logo';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import userEvent from '@testing-library/user-event';

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

  it('should redirect to main when user clicks', async () => {
    history.push(AppRoute.SignIn);

    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path={AppRoute.SignIn}
            element={<Logo />}
          />
          <Route
            path={AppRoute.Main}
            element={<h1>Main Screen</h1>}
          />
        </Routes>
        <Logo />
      </HistoryRouter>
    );

    await userEvent.click(screen.getAllByRole('link')[0]);

    expect(screen.getByText('Main Screen')).toBeInTheDocument();
  });
});
