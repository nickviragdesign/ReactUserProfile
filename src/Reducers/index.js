import { combineReducers } from 'redux';
import { profileDisplayShows } from './ViewProfile.reducers';
import { songPlaying } from './AudioPlayer.reducers';

const rootReducer = combineReducers({
    profileDisplayShows,
    songPlaying
});


export default rootReducer;
