import React from 'react';



////Components////
import Navbar from '../Navbar';
import SongsCards from '../SongsCards';


import {favoriteSongs, upNextSongs} from '../utils/songs'


const IndexPage = (props) => {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <h1>Favorite Songs</h1>
                        <SongsCards songs={favoriteSongs}/>
                    </div>
                    <div className="col s12 m6">
                        <h1>Up Next</h1>
                        <SongsCards songs={upNextSongs}/>
                    </div>
                </div>
            </div>
            


    
        </React.Fragment>
    )
}

export default IndexPage;