import React, {useEffect} from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux"; 

import PropTypes from "prop-types";

////Components////
import SongsCards from "../SongsCards";

import { getSongs } from "../../actions/SongActions";

const SongPage = (props) => {
   const { onGetSongs, songs } = props;
  useEffect(() => {
    onGetSongs();
  },[]);


  return (
    <div className='container'>
      <div className='row'>
        <div className='col s10 offset-s1'>
          <div className='input-box'>
            <form>
              <div className='input-field '>
                <input id='search' type='search' required />
                <button className="btn" type="submit" style={{ display: 'inline-block'}}>Find Songs</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='row'>
        <SongsCards songs={songs.searchSongs} type='search' />
      </div>
    </div>
  );
};

SongPage.propTypes = {
  onGetSongs: PropTypes.func.isRequired,
  songs: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  songs: state.songs,
});

const mapDispatchToProps = (dispatch) => ({
  onGetSongs: bindActionCreators(getSongs, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongPage);
