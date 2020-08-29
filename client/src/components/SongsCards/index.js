import React from 'react';

import SongsListItem from './components/SongsListItem'
import SearchListItem from './components/SearchListItem'

const SongsCard = (props) => {
    const {songs, type} = props

    const mapSongs = (songs) => {
        return songs.map((song) => (<SongsListItem song={song}/>))
    }

    const mapSearchSongs = (songs) => {
        return songs.map((song) => (<SearchListItem song={song}/>))
    }

    
    return (
        <div className="card z-depth-5">
            <div className="card-content">
                {type == 'song' && mapSongs(songs)}
                {type == 'search' && mapSearchSongs(songs)}
            </div>
        </div>
    )
}

export default SongsCard