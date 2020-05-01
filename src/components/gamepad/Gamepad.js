import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import data from '../../../src/database/data.json';

const Gamepad = ({ changeNewMode, updateScore }) => {
    const [index, setIndex] = useState(0);
    const [timer, setTimer] = useState(10);
    const [s, setS] = useState(0);
    const [answerBtn1, setAnswerBtn1] = useState('answer-btn');
    const [answerBtn2, setAnswerBtn2] = useState('answer-btn');
    const [answerBtn3, setAnswerBtn3] = useState('answer-btn');
    const [answerBtn4, setAnswerBtn4] = useState('answer-btn');


    let dataItem = data[index];
    const classes = useStyles();

    const clickedOne = () => {
        setAnswerBtn1("answer-btn-active");
        setAnswerBtn2("answer-btn");
        setAnswerBtn3("answer-btn");
        setAnswerBtn4("answer-btn");
    }

    const clickedTwo = () => {
        setAnswerBtn1("answer-btn");
        setAnswerBtn2("answer-btn-active");
        setAnswerBtn3("answer-btn");
        setAnswerBtn4("answer-btn");
    }

    const clickedThree = () => {
        setAnswerBtn1("answer-btn");
        setAnswerBtn2("answer-btn");
        setAnswerBtn3("answer-btn-active");
        setAnswerBtn4("answer-btn");
    }

    const clickedFour = () => {
        setAnswerBtn1("answer-btn");
        setAnswerBtn2("answer-btn");
        setAnswerBtn3("answer-btn");
        setAnswerBtn4("answer-btn-active");
    }

    useEffect(() => {
        if (index < 10) {
            const interval = setInterval(() => {
                setIndex(index => (index + 1));
                setAnswerBtn1("answer-btn");
                setAnswerBtn2("answer-btn");
                setAnswerBtn3("answer-btn");
                setAnswerBtn4("answer-btn");
            }, 10000);
            const timer = setInterval(() => {
                setTimer(timer => (timer - 1));
            }, 1000);
            return /* clear interval*/;
        }
    }, [data]);
    if (timer === 0) {
        setTimer(10)
    };
    if (index === 9) {
        updateScore(s);
        changeNewMode();
    }

    const checkAnswer = (ans) => {
        if (dataItem.answer === ans) setS(s => (s + 1));
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs >
                    <Paper className={classes.paper} style={{ color: 'black', backgroundColor: 'white' }}>
                        <span className="timer">⏱ {timer}</span>
                        <div className={classes.insidePaper}>
                            <h1>{dataItem.question}</h1>
                            <Button className={answerBtn1} variant="contained" onClick={() => { checkAnswer(`${dataItem.option1}`); clickedOne(); }}>
                                {dataItem.option1}
                            </Button>
                            <Button className={answerBtn2} variant="contained" onClick={() => { checkAnswer(`${dataItem.option2}`); clickedTwo(); }}>
                                {dataItem.option2}
                            </Button>
                            <Button className={answerBtn3} variant="contained" onClick={() => { checkAnswer(`${dataItem.option3}`); clickedThree(); }}>
                                {dataItem.option3}
                            </Button>
                            <Button className={answerBtn4} variant="contained" onClick={() => { checkAnswer(`${dataItem.option4}`); clickedFour(); }}>
                                {dataItem.option4}
                            </Button>
                        </div>
                    </Paper >
                </Grid >
            </Grid >
        </div >
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
        width: '50%',
        minHeight: '400px',
        padding: '10px',
    },
    insidePaper: {
        marginTop: '13%'
    }
}));

export default Gamepad;