import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

export default function SimpleAlerts({ errorStatus }) {
    const classes = useStyles();

    return (
        errorStatus !== null && (
            <div className={classes.root}>
                <Alert severity={errorStatus.type}>{errorStatus.msg}</Alert>
            </div>
        )
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '20%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        position: 'absolute',
        top: '8px',
        right: '16px',
        fontSize: '18px'
    },
}));

