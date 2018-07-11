import { connect } from 'react-redux';
import AudioSnackbar from '../Components/AudioSnackbar';

const mapStateToProps = (state) => {
    return {
        songPlaying: state.songPlaying
    };
};

export default connect(mapStateToProps)(AudioSnackbar);
