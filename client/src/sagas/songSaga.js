import { all, take, put, takeEvery, call } from "redux-saga/effects";

import { GET_SONGS, setSongs } from "../containers/IndexPage/index/actions";

import {fetchSongsApi} from "../containers/IndexPage/index/api";


function* fetchSongs() {
  const songs = yield call(fetchSongsApi);
  // console.log(songs)

  return songs;
}

function* watchForGetSong() {
  yield takeEvery(GET_SONGS, handleGetSongs);
}

function* handleGetSongs() {
  try {
    const songs = yield call(fetchSongs);

    yield put(setSongs(songs));
  } catch (error) {
      console.warn("Error occured in handleGetSongs saga", error)
  }
}

export default function* songSaga() {
  yield all([watchForGetSong()]);
}
