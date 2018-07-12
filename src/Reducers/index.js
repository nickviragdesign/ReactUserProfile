import { combineReducers } from 'redux';
import { profileDisplayShows } from './ViewProfile.reducers';
import { songPlaying, audioHidden } from './AudioPlayer.reducers';
import { uploadScreen } from './Navigator.reducers';

const rootReducer = combineReducers({
    profileDisplayShows,
    songPlaying,
    uploadScreen,
    audioHidden
});


export default rootReducer;
