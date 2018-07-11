export function songPlaying(songPlaying) {
    return {
        type: 'SONG_PLAYING',
        songPlaying
    };
}

export function toggleSongPlay(bool) {
    return (dispatch) => {
        dispatch(songPlaying(bool));
    };
}
