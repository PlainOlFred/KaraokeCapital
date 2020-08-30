import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PropTypes from "prop-types";

////Components////
import SongsCards from "../SongsCards";

import { getSongs } from "../../actions/SongActions";

const IndexPage = (props) => {
  const { onGetSongs, songs } = props;
  


  useEffect(() => {
    onGetSongs();
  },[]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6'>
          <h4>Favorite Songs</h4>
          <SongsCards songs={songs.favoriteSongs} type='song' />
        </div>
        <div className='col s12 m6'>
          <h4>Up Next</h4>
          <SongsCards songs={songs.upNextSongs} type='song' />
        </div>
      </div>
    </div>
  );
};

IndexPage.propTypes = {
  onGetSongs: PropTypes.func.isRequired,
  songs: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  songs: state.songs,
});

const mapDispatchToProps = (dispatch) => ({
  onGetSongs: bindActionCreators(getSongs, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
