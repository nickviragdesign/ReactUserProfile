import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from '../logo.svg';
import '../App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};

export default class SongSubmission extends Component {
    constructor(props) {
        super(props);
        this.state = { isTopicSelected: false, sent: false, songNameValue: '', songDescriptionValue: '', songFileValue: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    openFileDialog() {
        var fileInputDom = ReactDOM.findDOMNode(this.refs.input);
        fileInputDom.click();
    }

    handleFileChange(event) {
        var fileInputDom = ReactDOM.findDOMNode(this.refs.input);
        var fileInputValue = fileInputDom.files[0];
        this.setState({songFileValue: fileInputValue}, function () {
            console.log(this.state.songFileValue);
        });
    }

    handleNameChange(event) {
        this.setState({songNameValue: event.target.value});
        console.log(this.state.songNameValue);
    }

    handleDescriptionChange(event) {
        this.setState({songDescriptionValue: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        var submitData = new FormData();
        submitData.append('songName',this.state.songNameValue);
        submitData.append('songDescription',this.state.songDescriptionValue);
        submitData.append('songFile',this.state.songFileValue);
        fetch('/artist-submit',
            {
                method: 'POST',
                body: submitData
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit} className="Input" enctype="multipart/form-data">
                    <input type="hidden" value={this.props.selectedTopic}/>
                    <input type="hidden" value={this.props.location}/>
                    <TextField
                        style={{textAlign: 'left'}}
                        rows="2"
                        rowsMax="4"
                        multiLine="true"
                        hintText="ex: 'This song is about your movie festival!''"
                        floatingLabelText="Song Description"
                        onChange={this.handleDescriptionChange}
                        value={this.state.songDescriptionValue} /><br />
                    <TextField
                        hintText="Ex: 'Broooklyn's Favorite Movie'"
                        floatingLabelText="Song Name"
                        onChange={this.handleNameChange}
                        value={this.state.songNameValue} /><br />
                    <RaisedButton
                        label='New Song'
                        onClick={this.openFileDialog.bind(this)} /><br />
                    <input
                        type='file'
                        ref='input'
                        value={this.state.songFileValue}
                        onChange={this.handleFileChange.bind(this)}
                        style={{ display: 'none' }} /><br />
                    <RaisedButton type="submit" label="Primary" primary={true} style={style} /><br />
                </form>
            </div>
        );
    }
}
