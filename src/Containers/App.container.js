import { connect } from 'react-redux';
import { viewProfileScreen } from '../Actions/Navigator.actions'
import App from '../App';

const mapStateToProps = (state) => {
    return {
        uploadScreen: state.uploadScreen,
        profileScreen: state.profileScreen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        viewProfileScreen: () => dispatch(viewProfileScreen())
    };
};

export default connect(mapStateToProps)(App);
