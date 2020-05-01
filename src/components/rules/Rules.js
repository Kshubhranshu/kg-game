import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        marginBottom: '5px',
        color: theme.palette.text.secondary,
        width: '70%',
        marginLeft: '-35%',
        padding: '10px',
        background: 'rgba(0, 0, 0, .1)'
    },
    social: {
        padding: theme.spacing(2),
        textAlign: 'center',
        marginBottom: '5px',
        color: theme.palette.text.secondary,
        width: '70%',
        marginLeft: '-35%',
        borderRadius: '20px',
        padding: '10px',
        background: 'rgba(0, 0, 0, .1)'
    }

}));

const Rules = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs >
                    <Paper className={classes.paper} style={{ color: 'black' }}>
                        <h1>Rules</h1>
                        <b>Every question will have a timer of 10 seconds.</b><hr />
                        <b>Each gameplay consists of 10 questions.</b><hr />
                    </Paper>

                    <Paper className={classes.social} style={{ color: 'black' }}>
                        <a href="http://shubhranshu14@gmail.com" target="_blank" rel="noopener noreferrer" >Click here for you feedback </a>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Rules;

