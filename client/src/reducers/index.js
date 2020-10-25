import { combineReducers } from "redux";

import songReducer from '../containers/IndexPage/index/reducer';

export default combineReducers({
    songs: songReducer
})
