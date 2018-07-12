import { connect } from 'react-redux';
import { viewUploadScreen, viewProfileScreen } from '../Actions/Navigator.actions';
import { hideAudio } from '../Actions/AudioPlayer.actions'
import ToolBar from '../Components/ToolBar';

const mapStateToProps = (state) => {
    return {
        uploadScreen: state.uploadScreen,
        profileScreen: state.profileScreen
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        viewUploadScreen: () => dispatch(viewUploadScreen()),
        viewProfileScreen: () => dispatch(viewProfileScreen()),
        hideAudio: (bool) => dispatch(hideAudio(bool))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
