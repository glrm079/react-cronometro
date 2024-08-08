import { useState } from 'react';
import './App.css';
import playButton from './assets/music-play-play-button-svgrepo-com.svg';
import pauseButton from './assets/media-player-music-pause-svgrepo-com (1).svg';
import resetButton from './assets/reset-svgrepo-com.svg'
import { useStopwatch } from 'react-timer-hook';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonImage, setButtonImage] = useState(playButton);

  const {
    seconds,
    minutes,
    hours,
    days,
    start,
    pause,
    reset
  } = useStopwatch({ autoStart: false });

  const handleClick = () => {
    if (isPlaying) {
      pause();
      setButtonImage(playButton);
    } else {
      start();
      setButtonImage(pauseButton);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="flex justify-center items-center text-zinc-50 text-8xl">
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
     <div className='flex flex-row items-center justify-center p-7 gap-14'>
      <button onClick={handleClick}> 
        <img className='w-16' src={buttonImage} alt="Play/Pause Button" />
      </button>
      <button onClick={reset}>
        <img className='w-16' src={resetButton} alt="" />
      </button>
     </div>
    </>
  );
}

export default App;
