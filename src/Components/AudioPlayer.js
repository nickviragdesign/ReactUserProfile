import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default class AudioPlayer extends Component {
    render() {
        console.log(this.props.audioHidden)
        return (
            <ReactAudioPlayer
                style={{display: this.props.audioHidden ? 'none' : 'inline'}}
                src={'/_bensound-goinghigher.mp3'}
                autoPlay
                controls
                onPlay={ () => {
                    this.props.toggleSongPlay(!this.props.songPlaying)
                }}
                onEnded={ this.props.toggleSongPlay(this.props.songPlaying) }
                onPause={ () => {
                    this.props.toggleSongPlay(!this.props.songPlaying)
                }}
            />
        )
    }
}
