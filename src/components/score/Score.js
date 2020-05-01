import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import scoreLogo from './score.svg';
import Button from '@material-ui/core/Button';


const Gamepad = ({ score, dashboard }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs >
                    <Paper className={classes.paper} style={{ color: 'black' }}>
                        <div className={classes.insidePaper}>
                            <img className={classes.scoreLogo} src={scoreLogo} alt="meddle" />
                            <h1 className={classes.score}>Your Score </h1>
                            <h1 className={classes.score}>{score}/10</h1>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <div className="dash-btn-container">
                <Button className="dash-btn" variant="contained" onClick={dashboard} >
                    Go Back
                </Button>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 'auto',
        width: '30%',
        minHeight: '300px',
        padding: '10px',
        background: 'rgba(0, 0, 0, .5)'
    },
    insidePaper: {
    },
    scoreLogo: {
        width: '40%'
    },
    score: {
        color: 'red'
    }
}));

export default Gamepad;