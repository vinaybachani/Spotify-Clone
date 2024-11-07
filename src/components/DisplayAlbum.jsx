import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext);

    // Check if albumData is valid
    if (!albumData) {
        return <div>Album not found</div>;
    }

    const convertToSeconds = (time) => {
        const [minutes, seconds] = time.split(':').map(Number);
        return minutes * 60 + seconds;
    };

    const calculateTotalTime = () => {
        const totalSeconds = songsData.reduce((total, item) => {
            return total + convertToSeconds(item.duration);
        }, 0);

        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const totalTimeString = calculateTotalTime();

    return (
        <>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt="album data image" />
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='mt-1 flex items-center w-full gap-2'>
                        <img src={assets.spotify_logo} alt="logo" className='inline-block w-5' />
                        <b>Spotify</b>
                        • 1,32,315 likes
                        <b>• 50 songs,</b>
                        about {totalTimeString}
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img src={assets.clock_icon} alt="clock icon" className='m-auto w-4' />
            </div>
            <hr />
            {songsData.map((item, index) => (
                <div onClick={() => playWithId(item.id)} key={index} className="grid grid-cols-3 md:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                    <p className="text-white">
                        <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                        <img src={item.image} alt="item" className="inline w-10 mr-5" />
                        {item.name}
                    </p>
                    <p className='text-[15px]'>{albumData.name}</p>
                    <p className='text-[15px] hidden sm:block'>5 days ago</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
            ))}
        </>
    );
};

export default DisplayAlbum;