export function profileDisplayShows(displayShows) {
    return {
        type: 'PROFILE_DISPLAY_SHOWS',
        displayShows
    };
}

export function profileHandleShowClick() {
    return (dispatch) => {
        dispatch(profileDisplayShows(true));
    };
}

export function profileHandleSongClick() {
    return (dispatch) => {
        dispatch(profileDisplayShows(false));
    };
}
