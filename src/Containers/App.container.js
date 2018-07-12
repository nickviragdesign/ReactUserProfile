import { connect } from 'react-redux';
import { viewProfileScreen } from '../Actions/Navigator.actions'
import { hideAudio } from '../Actions/AudioPlayer.actions'
import App from '../App';

const mapStateToProps = (state) => {
    return {
        uploadScreen: state.uploadScreen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        viewProfileScreen: () => dispatch(viewProfileScreen()),
        hideAudio: (bool) => dispatch(hideAudio(bool))
    };
};

export default connect(mapStateToProps)(App);
