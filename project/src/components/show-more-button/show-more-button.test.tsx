import { createMemoryHistory } from 'history';
import { screen } from '@testing-library/react';
import ShowMoreButton from './show-more-button';
import { renderWithHistoryRouter } from '../../mocks/test-util';

const history = createMemoryHistory();
describe('Component: ShowMoreButton', () => {
  it('should render correctly', () => {

    renderWithHistoryRouter(<ShowMoreButton onClick={jest.fn()}/>, history);

    expect(screen.getByText(/Show more/)).toBeInTheDocument();
  });
});
