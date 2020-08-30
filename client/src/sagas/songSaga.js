import { all, take, put, takeEvery, call } from "redux-saga/effects";

import { GET_SONGS, SET_SONGS } from "../actions/SongActions";

import { fetchSongsApi } from "../api/songs";

function* watchForGetSong() {
  yield takeEvery(GET_SONGS, handleGetSongs);
}

function* handleGetSongs() {
  try {
    const songs = yield call(fetchSongsApi);

    const formattedSongs = yield {
      favoriteSongs: [],
      upNextSongs: [],
      historySongs: [],
    };

    yield songs.forEach((song) => {
      if (song.inFavorite) {
        formattedSongs.favoriteSongs.push(song);
      }
      if (song.inUpNext) {
        formattedSongs.upNextSongs.push(song);
      }
      if (song.inHistory) {
        formattedSongs.historySongs.push(song);
      }
    });
    console.log("formattedSongs", formattedSongs);

    yield put({
      type: SET_SONGS,
      payload: formattedSongs,
    });
  } catch (error) {
      console.warn("Error occured in handleGetSongs saga", error)
  }
}

export default function* songSaga() {
  yield all([watchForGetSong()]);
}
