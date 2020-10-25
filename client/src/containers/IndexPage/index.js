import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import PropTypes from "prop-types";

////Components////
import SongsCard from "../../components/SongsCard";
import { getSongs } from "./index/actions";

const IndexPage = (props) => {
  const { onGetSongs, songs } = props;
  
  useEffect(() => {
    // onGetSongs();
    console.log("mount")
  },[]);


  return (
    <div className='container'>
      <div className="row">
      </div>
      <div className='row'>
        <div className='col s12'>
          <h4>Songs</h4>
          <SongsCard songs={songs.songs} type='song' />
        </div>
        {/* <div className='col s12 m6'>
          <h4>Up Next</h4>
          <SongsCards songs={songs.upNextSongs} type='song' />
        </div> */}
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
