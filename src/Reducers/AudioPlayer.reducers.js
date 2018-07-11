export function songPlaying(state = false, action) {
    switch (action.type) {
        case 'SONG_PLAYING':
            return action.songPlaying;
        default:
            return state;
    }
}
