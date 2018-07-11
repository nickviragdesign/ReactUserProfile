import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

export default class AudioPlayer extends Component {
    render() {
        return (
            <ReactAudioPlayer
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
