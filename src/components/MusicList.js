import React from 'react';
import Song from './Song';



const MusicList = ({songs}) => {

    return (
        <>
        {songs.map(song => {
            return <Song song={song} key={song.trackId} />
        })}
        </>
    )
}



export default MusicList;