export function songPlaying(state = false, action) {
    switch (action.type) {
        case 'SONG_PLAYING':
            return action.songPlaying;
        default:
            return state;
    }
}

export function audioHidden(state = false, action) {
    switch (action.type) {
        case 'AUDIO_HIDDEN':
            return action.audioHidden;
        default:
            return state;
    }
}
