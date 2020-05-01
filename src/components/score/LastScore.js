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
        width: '100px',
        height: '35px',
        borderRadius: '70px',
        padding: '10px',
        background: 'rgba(0, 0, 0, .1)',
        marginLeft: '230%',
        marginTop: '10px'
    },
}));

const LastScore = ({ score }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs >
                    <Paper className={classes.paper} style={{ color: 'black', fontSize: '2rem' }}>
                        🏅 <b title='Last Score'>{score}</b>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default LastScore;

