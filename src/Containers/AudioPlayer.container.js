import { connect } from 'react-redux';
import { toggleSongPlay } from '../Actions/AudioPlayer.actions';
import AudioPlayer from '../Components/AudioPlayer';

const mapStateToProps = (state) => {
    return {
        songPlaying: state.songPlaying
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        toggleSongPlay: (bool) => dispatch(toggleSongPlay(bool))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
