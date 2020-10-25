/**
 * Get Songs
 */
export const GET_SONGS = 'GET_SONGS';


export function getSongs() {
    return {
        type: GET_SONGS
    }
};

export const SET_SONGS = 'SET_SONGS';
export function setSongs(songs){
    return {
        type:SET_SONGS,
        songs
    }
}
