import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { AppRoute } from '../../const';
import NotFoundScreen from './not-found-screen';
import userEvent from '@testing-library/user-event';
import { renderWithHistoryRouterAndHelmet, renderWithHistoryRouterHelmetAndRoutes } from '../../mocks/test-util';

const history = createMemoryHistory();
describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {

    renderWithHistoryRouterAndHelmet(<NotFoundScreen />, history);

    expect(screen.getByText(/404. Page not found/)).toBeInTheDocument();
    expect(screen.getByText(/Back to the main page/)).toBeInTheDocument();
  });

  it('should redirect to main screen if user clicks on the link', async () => {
    history.push('/non-existent-route');

    renderWithHistoryRouterHelmetAndRoutes(history, '/non-existent-route', <NotFoundScreen />, AppRoute.Main, <h1>Main Screen</h1>);

    await userEvent.click(screen.getByText(/Back to the main page/));
    expect(screen.getByText('Main Screen')).toBeInTheDocument();
  });
});
