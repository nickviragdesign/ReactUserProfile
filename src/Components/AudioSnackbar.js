import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';

export default class AudioSnackbar extends Component {
    render() {
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={true}
                autoHideDuration={500}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={
                    this.props.songPlaying
                    ? <span id="message-id">Song is playing</span>
                    : <span id="message-id">Song has stopped</span>}
             />
        )
    }
}
