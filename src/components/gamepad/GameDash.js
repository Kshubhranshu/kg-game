import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Rules from '../rules/Rules';
import LastScore from '../score/LastScore';

const GameDash = ({ changeMode, score }) => {
    const [level, setLevel] = useState('');
    const [easyClass, setEasyClass] = useState('level-btn-e');
    const [medClass, setMedClass] = useState('level-btn-m');
    const [hardClass, setHardClass] = useState('level-btn-h');
    const classes = useStyles();

    const levelSelect = (level) => {
        setLevel(level);
    }

    const setActiveEasy = () => {
        setEasyClass('level-btn-e');
        setMedClass('level-btn-active');
        setHardClass('level-btn-active');
    }

    const setActiveMed = () => {
        setEasyClass('level-btn-active');
        setMedClass('level-btn-m');
        setHardClass('level-btn-active');
    }

    const setActiveHard = () => {
        setEasyClass('level-btn-active');
        setMedClass('level-btn-active');
        setHardClass('level-btn-h');
    }

    const validateLevel = () => {
        if (level !== '') {
            changeMode();
        }
        else {
            alert("Please select level and then continue");
        }
    }

    return (
        <div className={classes.root}>
            <div>
                <LastScore score={score} />
            </div>
            <Grid container spacing={3}>
                <Grid item xs >
                    <Paper className={classes.paper} style={{ color: 'black', backgroundColor: 'white' }}>
                        <div className={classes.insidePaper}>
                            <h1>Select Level <span>💪🏻</span></h1>
                            <Button id="btn-1" className={easyClass} variant="contained" onClick={() => { levelSelect("easy"); setActiveEasy(); }} value="easy" >
                                Easy
                            </Button>
                            <Button id="btn-2" className={medClass} variant="contained" onClick={() => { levelSelect("med"); setActiveMed(); }} value="medium" >
                                Medium
                            </Button>
                            <Button id="btn-3" className={hardClass} variant="contained" onClick={() => { levelSelect("hard"); setActiveHard(); }} value="hard" >
                                Hard
                            </Button>
                        </div>
                        <h1>Go Slow <span>🐢</span></h1>
                        <div>
                            <PlayButton onClick={validateLevel} >Play</PlayButton>
                        </div>
                    </Paper>
                </Grid >
            </Grid >
            <div>
                <Rules />
            </div>
        </div >
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 'auto',
        marginRight: '15.5%',
        width: '50%',
        minHeight: '400px',
        padding: '10px',
    },
    insidePaper: {
        marginTop: '12%',
    }
}));

const PlayButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    width: '200px',
    fontSize: '2rem',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 80,
    padding: '0 30px',
});

export default GameDash;