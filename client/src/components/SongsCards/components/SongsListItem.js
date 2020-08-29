import React from "react";

const SongsListItem = (props) => {
  const { song } = props;
  return (
 
      <div className='row '>  
        <div className='col s10'>
          <div className='row left'>
            <h5>{song.title}</h5>
            <p>Artist: {song.artist}</p>
          </div>
          <div className='row'></div>
        </div>
        <div className='col s2'>
          <button>Lyrics</button>
        </div>
      </div>
    
  );
};

export default SongsListItem;
