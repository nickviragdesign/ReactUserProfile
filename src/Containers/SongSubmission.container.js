import { connect } from 'react-redux';
import SongSubmission from '../Components/SongSubmission';

const mapStateToProps = (state) => {
    return {
        audioHidden: state.audioHidden
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongSubmission);
