import React, {useEffect, useState} from "react";
import MusicList from '../components/MusicList.js';

const ItunesMusic = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => res.json())
            .then(data => {
                setSongs(data.feed.entry);
            }
            )
    }, []);

    return (
        <div>
            <MusicList songs={songs} />
        </div>
    )
}

export default ItunesMusic;