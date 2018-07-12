import { connect } from 'react-redux';
import { toggleSongPlay, hideAudio } from '../Actions/AudioPlayer.actions';
import AudioPlayer from '../Components/AudioPlayer';

const mapStateToProps = (state) => {
    return {
        songPlaying: state.songPlaying,
        audioHidden: state.audioHidden
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        toggleSongPlay: (bool) => dispatch(toggleSongPlay(bool)),
        hideAudio: (bool) => dispatch(hideAudio(bool))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
