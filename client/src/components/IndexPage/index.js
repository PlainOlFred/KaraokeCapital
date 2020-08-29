import React from "react";

////Components////
import SongsCards from "../SongsCards";

import { favoriteSongs, upNextSongs } from "../utils/songs";

const IndexPage = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6'>
          <h4>Favorite Songs</h4>
          <SongsCards songs={favoriteSongs} />
        </div>
        <div className='col s12 m6'>
          <h4>Up Next</h4>
          <SongsCards songs={upNextSongs} />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
