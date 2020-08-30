import React from "react";

const SongsListItem = (props) => {
  const { song } = props;
  return (
    <li className="collection-item">
      <div className='row'>  
        <div className='col s10'>
          <div className='row left-align'>
            <h5>{song.title}</h5>
            <p>Artist: {song.artist}</p>
          </div>
          <div className='row'></div>
        </div>
        <div className='col s2'>
          <button>Lyrics</button>
        </div>
      </div>
    </li>
    
  );
};

export default SongsListItem;
