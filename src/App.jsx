import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className='bg-black h-screen'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio src={track.file} preload='auto' ref={audioRef}></audio>
    </div>
  )
}

export default App
