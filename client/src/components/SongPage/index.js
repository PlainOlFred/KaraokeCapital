import React from "react";

////Components////
import SongsCards from "../SongsCards";

import { searchSongs } from "../utils/songs";

const SongPage = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s10 offset-s1'>
          <div className='input-box'>
            <form>
              <div className='input-field '>
                <input id='search' type='search' required />
                <button className="btn" type="submit" style={{ width: '100vh'}}>Find Songs</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='row'>
        <SongsCards songs={searchSongs} />
      </div>
    </div>
  );
};

export default SongPage;
