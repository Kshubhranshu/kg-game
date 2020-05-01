import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GameDash from '../gamepad/GameDash';
import Gamepad from '../gamepad/Gamepad';
import Score from '../score/Score'

const Board = ({ mode, level, changeMode, changeNewMode, score, updateScore, dashboard }) => {
    const classes = useStyles();
    var game;

    if (mode === 0) return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs >
                    <Paper className={classes.paper} style={{ color: 'white', backgroundColor: 'purple' }}>About</Paper>
                    <Paper className={classes.paper} style={{ color: 'black', backgroundColor: 'white' }}>Quiz game app for kidos.</Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper} style={{ color: 'white', backgroundColor: 'orange' }}>Leaderboard</Paper>
                    <Paper className={classes.paper} style={{ color: 'black', backgroundColor: 'white' }}>
                        <ol>
                            <li>
                                Player 1
                            </li>
                            <li>
                                Player 2
                            </li>
                            <li>
                                Player 3
                            </li>
                            <li>
                                Player 4
                            </li>
                            <li>
                                Player 5
                            </li>
                            <li>
                                Player 6
                            </li>
                            <li>
                                Player 7
                            </li>
                            <li>
                                Player 8
                            </li>
                            <li>
                                Player 9
                            </li>
                            <li>
                                Player 10
                            </li>
                        </ol>
                    </Paper>

                </Grid>
            </Grid>
        </div>
    );
    else if (mode === 1) {
        return (
            <GameDash changeMode={changeMode} score={score} />
        );
    }

    else if (mode === 2) {
        return (
            <Gamepad changeNewMode={changeNewMode} updateScore={updateScore} />
        );
    }
    else if (mode === 3) {
        return (
            <Score score={score} dashboard={dashboard} />
        )
    }
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
        width: '20%',
        padding: '10px',
    },
}));

export default Board;