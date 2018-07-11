import { connect } from 'react-redux';
import {
    profileHandleShowClick,
    profileHandleSongClick } from '../Actions/ViewProfile.actions';
import ViewProfile from '../Components/ViewProfile';

const mapStateToProps = (state) => {
    return {
        displayShows: state.profileDisplayShows
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleShowClick: () => dispatch(profileHandleShowClick()),
        handleSongClick: () => dispatch(profileHandleSongClick())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
