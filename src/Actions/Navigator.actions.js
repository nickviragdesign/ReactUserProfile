export function uploadScreen(viewUploadScreen) {
    return {
        type: 'VIEW_UPLOAD_SCREEN',
        viewUploadScreen
    }
}

export function viewUploadScreen() {
    return (dispatch) => {
        dispatch(uploadScreen(true));
        dispatch(profileScreen(false));
    }
}

export function profileScreen(viewProfileScreen) {
    return {
        type: 'VIEW_PROFILE_SCREEN',
        viewProfileScreen
    }
}

export function viewProfileScreen() {
    return (dispatch) => {
        dispatch(profileScreen(true));
        dispatch(uploadScreen(false));
    }
}
