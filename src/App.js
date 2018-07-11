import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToolBar from './Components/ToolBar';
import ViewProfile from './Containers/ViewProfile.container';
import AudioSnackbar from './Containers/AudioSnackbar.container';
import request from 'request';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <ToolBar/>
                    <div style={{
                        width: '100%',
                        height: '300px',
                        backgroundPosition: 'center 30%',
                        backgroundImage: "url('https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c391a28620658e1a99824868a8e00566&auto=format&fit=crop&w=1350&q=80')"}}></div>
                    <ViewProfile/>
                    <AudioSnackbar/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
