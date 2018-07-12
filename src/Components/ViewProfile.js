import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const selected = '6px solid #292828'
const unselected = '6px solid hsla(0, 1%, 90%, 1)'

const style = {
    row: {
        justifyContent: 'center'
    },
    intro: {
        margin: '-53px auto 0',
        padding: '27px 16px',
        width: 332,
        borderRadius: 0,
        boxShadow: 'none'
    },
    detailsContainer: {
        width: 364,
        margin: 'auto auto 70px'
    },
    detailsLeft: {
        margin: '8px 4px 0 0',
        padding: '13px 0 13px 66px',
        textAlign: 'left',
        borderRadius: 0,
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.1), 0px 2px 2px 0px rgba(0, 0, 0, 0.04), 0px 3px 1px -2px rgba(0, 0, 0, 0.02)',
    },
    detailsRight: {
        margin: '8px auto 0 4px',
        padding: '13px 0 13px 66px',
        textAlign: 'left',
        borderRadius: 0,
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.1), 0px 2px 2px 0px rgba(0, 0, 0, 0.04), 0px 3px 1px -2px rgba(0, 0, 0, 0.02)',

    },
    detailSelected: {
        borderBottom: selected,
        transition: 'border-bottom .5s'
    },
    detailUnselected: {
        borderBottom: unselected,
        transition: 'border-bottom .5s'
    },
    detailsHeading: {
        fontWeight: 900
    },
    name: {
        fontWeight: 300,
        letterSpacing: 6
    },
    role: {
        fontWeight: 900,
        textTransform: 'uppercase',
        fontSize: 23,
        marginTop: 6,
        color: '#cc5113',

    },
    avatar: {
        width: 200,
        height: 200,
        margin: '30px auto',
        display: 'block',
        marginTop: -135,
        border: '8px solid white'
    }
};

class ViewProfile extends Component {

    constructor(props) {
        super(props);
        this.state = { songSnackbarOpen: false };
        this.handleSongEnd = this.handleSongEnd.bind(this);
        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    }

    handleSongEnd() {
        this.setState({songSnackbarOpen: true});
    }

    handleSongPlay() {
        this.setState({songSnackbarOpen: true});
    }

    handleSnackbarClose() {
        return
    }

    render() {
        return (
            <div className={ this.props.classes.row }>
                <Avatar
                    alt="Adelle Charles"
                    src="https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09093dcdf66dbcd2397b9dc19384a899&auto=format&fit=crop&w=1300&q=80"
                    style={style.avatar}
                />
                <Paper className={ this.props.classes.intro } elevation={4}>
                    <Typography className={ this.props.classes.name } component="p">
                        Glen Davis
                    </Typography>
                    <Typography className={ this.props.classes.role } component="h1">
                        Death Metal
                    </Typography>
                </Paper>
                <Grid container
                    direction='row'
                    alignItems='center'
                    className={ this.props.classes.detailsContainer }
                    alignContent='center'
                    spacing={0}>
                    <Grid item xs={6}>
                        <Paper onClick={ this.props.handleShowClick }
                            className={
                                this.props.displayShows
                                    ? classNames(
                                        this.props.classes.detailSelected,
                                        this.props.classes.detailsLeft
                                    )
                                    : classNames(
                                        this.props.classes.detailUnselected,
                                        this.props.classes.detailsLeft
                                    )
                            }>
                            <Typography className={ this.props.classes.detailsHeading } component="h3">
                                Shows
                            </Typography>
                            <Typography component="p">
                                7
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper onClick={ this.props.handleSongClick }
                            className={
                                this.props.displayShows
                                    ? classNames(
                                        this.props.classes.detailUnselected,
                                        this.props.classes.detailsLeft
                                    )
                                    : classNames(
                                        this.props.classes.detailSelected,
                                        this.props.classes.detailsLeft
                                    )
                            }>
                            <Typography className={ this.props.classes.detailsHeading } component="h3">
                                Songs
                            </Typography>
                            <Typography component="p">
                                16
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

classNames.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(style)(ViewProfile);
