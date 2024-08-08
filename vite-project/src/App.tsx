import { useState } from 'react'
import './App.css'
import playButton from './assets/music-play-play-button-svgrepo-com.svg'
import pauseButton from './assets/media-player-music-pause-svgrepo-com (1).svg'

function App() {
  
  const [play, setPause] = useState(playButton)
  return (
    <>
      <h1 className='text-center text-7xl text-zinc-50'>Numbers</h1>
      <button className='flex justify-center p-10' onClick={() => setPause(play === playButton ? pauseButton : playButton)}>
        <img className='w-16' src={play} alt="Play/Pause Button" />
      </button>
    </>
  )
}

export default App
