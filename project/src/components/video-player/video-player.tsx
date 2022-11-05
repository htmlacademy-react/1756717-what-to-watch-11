import { useEffect, useRef, useState } from 'react';
import { VideoPlayerProps } from '../../types/types';

function VideoPlayer({ src, poster, autoPlay }: VideoPlayerProps): JSX.Element {
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

    if (autoPlay) {
      setTimeout(() => {
        if (videoRef.current !== null) {
          videoRef.current.play();
        }
      }, 1000);
      return;
    }

    videoRef.current.pause();

    return () => {
      isVideoPlayerMounted = false;
    };
  }, [autoPlay]);


  return (
    <video src={src} poster={poster} width="280" height="175" ref={videoRef} />
  );
}

export default VideoPlayer;
