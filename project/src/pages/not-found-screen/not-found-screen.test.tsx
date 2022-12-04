import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import HistoryRouter from '../../components/history-route/history-route';
import { AppRoute } from '../../const';
import NotFoundScreen from './not-found-screen';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();
describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {

    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <NotFoundScreen />
        </HelmetProvider>
      </HistoryRouter>
    );

    expect(screen.getByText(/404. Page not found/)).toBeInTheDocument();
    expect(screen.getByText(/Back to the main page/)).toBeInTheDocument();
  });

  it('should redirect to main screen if user clicks on the link', async () => {
    history.push('/non-existent-route');
    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <Routes>
            <Route
              path={'/non-existent-route'}
              element={<NotFoundScreen />}
            />
            <Route
              path={AppRoute.Main}
              element={<h1>Main Screen</h1>}
            />
          </Routes>
        </HelmetProvider>
      </HistoryRouter>,
    );

    await userEvent.click(screen.getByText(/Back to the main page/));
    expect(screen.getByText('Main Screen')).toBeInTheDocument();
  });
});
