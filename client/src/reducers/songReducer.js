import { SET_SONGS } from "../actions/SongActions";


const initialState = {
  favoriteSongs: [],
  upNextSongs: [],
  searchSongs: [],
};

function songReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        favoriteSongs: action.payload.favoriteSongs,
        upNextSongs: action.payload.upNextSongs,
        searchSongs: action.payload.historySongs
      };
    default:
      return state;
  }
}

export default songReducer;
