import {render, screen} from '@testing-library/react';
import { mockFilm } from '../../mocks/mocks';
import VideoPlayer from './video-player';

const film = mockFilm;
describe('Component: VideoPlayer', () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
  });

  it('should render correctly', () => {

    render(
      <VideoPlayer film={film}/>,
    );

    expect(screen.getByTestId('video')).toBeInTheDocument();
  });
});
