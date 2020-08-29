import React from "react";

////Components////
import SongsCards from "../SongsCards";

import {searchSongs} from "../utils/songs"


const SongPage = (props) => {
  return (
    <div className='container'>
      <div className='row'>
          <h1>Song Page</h1>
          <SongsCards songs={searchSongs}/>
      </div>
    </div>
  );
};

export default SongPage;
