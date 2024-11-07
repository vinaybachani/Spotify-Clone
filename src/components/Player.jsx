import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
    const { seekBar, seekBg, playStatus, play, pause, track, time, previous, next, seekSong } = useContext(PlayerContext);
    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            <div className="hidden lg:flex items-center gap-4">
                <img src={track.image} className='w-12' alt="song image" />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img src={assets.shuffle_icon} className='w-4 cursor-pointer' alt="shuffle icon" />
                    <img onClick={previous} src={assets.prev_icon} className='w-4 cursor-pointer' alt="prev icon" />
                    {
                        playStatus ? <img onClick={pause} src={assets.pause_icon} className='w-4 cursor-pointer' alt="play icon" />
                            : <img onClick={play} src={assets.play_icon} className='w-4 cursor-pointer' alt="play icon" />
                    }
                    <img onClick={next} src={assets.next_icon} className='w-4 cursor-pointer' alt="next icon" />
                    <img src={assets.loop_icon} className='w-4 cursor-pointer' alt="loop icon" />
                </div>
                <div className="flex items-center gap-5">
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div onClick={seekSong} ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <img className='w-4' src={assets.play_icon} alt="play icon" />
                <img className='w-4' src={assets.mic_icon} alt="mic icon" />
                <img className='w-4' src={assets.queue_icon} alt="queue icon" />
                <img className='w-4' src={assets.speaker_icon} alt="speaker icon" />
                <img className='w-4' src={assets.volume_icon} alt="volume icon" />
                <div className="w-20 bg-slate-50 h-1 rounded"></div>
            </div>
        </div>
    )
}

export default Player
