import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const style = {
    toolbar: {
        background: 'transparent',
        boxShadow: 'none',
        flexGrow: 1
    },
    title: {
        flex: 1,
        color: 'black',
        textAlign: 'left'
    },
    button: {
        color: 'black'
    }

};

export default class ToolBar extends Component {
    render() {
        return (
            <div>
                <AppBar style={style.toolbar} position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" style={style.title}>
                            HeardIt
                        </Typography>
                        <Button style={style.button} color="inherit" onClick={() => {
                            this.props.viewUploadScreen()
                            this.props.hideAudio(true)
                        }}>Upload</Button>
                        <Button style={style.button} color="inherit" onClick={() => {
                            this.props.viewProfileScreen()
                            this.props.hideAudio(false)
                        }}>Profile</Button>
                        <Button style={style.button} color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
