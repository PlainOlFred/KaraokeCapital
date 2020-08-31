import React from "react";

////Components////
import SongsCards from "../SongsCards";

const UpNextPage = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6'>
          <h4>Up Next</h4>
          {/* <SongsCards songs={upNextSongs} /> */}
        </div>
      </div>
    </div>
  );
};

export default UpNextPage;
