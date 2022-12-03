import { useEffect, useRef, useState } from 'react';
import { Film } from '../../types/films';

type VideoPlayerProps = {
  film: Film;
}

function VideoPlayer({ film }: VideoPlayerProps): JSX.Element {
  const [, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => {
      if (isVideoPlayerMounted) {
        setIsLoading(false);
      }
    });

    return () => {
      isVideoPlayerMounted = false;
    };
  }, []);

  return (
    <video src={film.previewVideoLink} width="280" height="175" ref={videoRef} muted autoPlay data-testid="video"/>
  );
}

export default VideoPlayer;
