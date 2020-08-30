import React from 'react';

import SongsListItem from './components/SongsListItem'
import SearchListItem from './components/SearchListItem'

const SongsCard = (props) => {
    const {songs, type} = props

    const mapSongs = (songs) => {
        return songs.map((song) => (<SongsListItem key={song._id} song={song}/>))
    }

    const mapSearchSongs = (songs) => {
        return songs.map((song) => (<SearchListItem key={song.id} song={song}/>))
    }

    
    return (
        <div className="card z-depth-5">
            <div className="card-content">
                {type =="song" && (
                    <ul className="collection">
                        {mapSongs(songs)}
                    </ul>
                )}
                {type =="search" && (
                    <ul className="collection">
                        {mapSearchSongs(songs)}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default SongsCard;