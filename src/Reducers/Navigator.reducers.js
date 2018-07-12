export function uploadScreen(state = false, action) {
    switch (action.type) {
        case 'VIEW_UPLOAD_SCREEN':
            return action.viewUploadScreen;
        default:
            return state;
    }
}

export function profileScreen(state = true, action) {
    switch (action.type) {
        case 'VIEW_PROFILE_SCREEN':
            return action.viewProfileScreen;
        default:
            return state;
    }
}
