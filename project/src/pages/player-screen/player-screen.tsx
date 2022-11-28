import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { getFormatPlayerTime } from '../../util';
import { APIRoute } from '../../const';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilm, getFilmDataLoadingStatus } from '../../store/films-data/selectors';
import { fetchFilmAction } from '../../store/api-actions';
import { useEffect, useRef, useState } from 'react';
import LoadingScreen from '../loading-screen/loading-screen';

function PlayerScreen(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isFullscreen, setFullscreen] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(0);

  const progressValue = `${(currentTime / durationTime) * 100}%`;
  const timeLeft = durationTime - currentTime;

  useEffect(() => {

    let isVideoPlayerMounted = true;

    if (params.id && isVideoPlayerMounted) {
      dispatch(fetchFilmAction(params.id));
    }

    return () => {
      isVideoPlayerMounted = false;
    };
  }, [dispatch, params.id]);

  useEffect(() => {
    let isVideoPlayerMounted = true;

    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => {
      if (videoRef.current && isVideoPlayerMounted) {
        setDurationTime(Math.trunc(videoRef.current.duration));
      }
    });

    videoRef.current.addEventListener('timeupdate', () => {
      if (videoRef.current && isVideoPlayerMounted) {
        setCurrentTime(Math.trunc(videoRef.current.currentTime));
      }
    });

    return () => {
      isVideoPlayerMounted = false;
    };
  });

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isFullscreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }

    return () => setFullscreen(false);
  }, [isFullscreen]);

  const film = useAppSelector(getFilm);
  const isFilmDataLoading = useAppSelector(getFilmDataLoadingStatus);


  if (film === undefined) {
    return <NotFoundScreen />;
  }

  const handleExitButtonClick = () => {
    navigate(`${APIRoute.Films}/${film.id.toString()}`);
    setIsPlaying(false);
  };

  const handlePauseButtonClick = () => {
    if (videoRef.current === null) {
      return;
    }
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handlePlayButtonClick = () => {
    if (videoRef.current === null) {
      return;
    }
    videoRef.current.play();
    setIsPlaying(true);
  };

  if (isFilmDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="player">
      <Helmet>
        <title>WTW. Player</title>
      </Helmet>
      <video src={film.videoLink} className="player__video" poster={film.backgroundImage} ref={videoRef} autoPlay></video>

      <button type="button" className="player__exit" onClick={handleExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentTime} max={durationTime}></progress>
            <div className="player__toggler" style={{ left: progressValue }}>Toggler</div>
          </div>
          <div className="player__time-value">{getFormatPlayerTime(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          {isPlaying ? (
            <button type="button" className="player__play" onClick={handlePauseButtonClick}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>) : (
            <button type="button" className="player__play" onClick={handlePlayButtonClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>)}
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen" onClick={() => setFullscreen(true)}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
