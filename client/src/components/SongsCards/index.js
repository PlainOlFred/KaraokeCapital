import React from 'react';

import SongsListItem from './components/SongsListItem'

const SongsCard = (props) => {
    const {songs} = props

    const mapSongs = (songs) => {
        return songs.map((song) => (<SongsListItem song={song}/>))
    }

    
    return (
        <div className="card z-depth-5">
            <div className="card-content">
                {mapSongs(songs)}
            </div>
        </div>
    )
}

export default SongsCard