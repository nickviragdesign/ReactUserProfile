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

export function audioHidden(audioHidden) {
    return {
        type: 'AUDIO_HIDDEN',
        audioHidden
    };
}

export function hideAudio(bool) {
    console.log(bool)
    return (dispatch) => {
        dispatch(audioHidden(bool));
    };
}
