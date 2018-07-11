export function profileDisplayShows(state = true, action) {
    switch (action.type) {
        case 'PROFILE_DISPLAY_SHOWS':
            return action.displayShows;
        default:
            return state;
    }
}
