import { useEffect, useRef, useState } from 'react';
import { VideoPlayerProps } from '../../types/types';

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
    <video src={film.previewVideoLink} poster={film.posterImage} width="280" height="175" ref={videoRef} muted autoPlay/>
  );
}

export default VideoPlayer;
