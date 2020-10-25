import { SET_SONGS } from "./actions";

const initialState = {
  songs: [],
};

function songReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        songs: action.songs,
      };
    default:
      return state;
  }
}

export default songReducer;
