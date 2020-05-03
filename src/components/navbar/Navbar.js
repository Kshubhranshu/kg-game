import React from 'react';
import Button from '@material-ui/core/Button';

const Navbar = ({ loginStatus, userName, signup, logout, mode }) => {
    if (loginStatus === true) {
        return (
            <div className="centered">
                <Button className="login-info" variant="contained" color="primary">
                    Welcome,{' '}{userName}
                </Button>
                <Button className="logout-button" variant="contained" color="secondary" onClick={logout}>
                    Logout
                </Button>
            </div>
        )
    }
    if (loginStatus === false)
        return (
            <div>
                <Button className="login-button" variant="contained" color="primary" onClick={signup}>
                    Login
                </Button>
            </div>
        );
}

export default Navbar
