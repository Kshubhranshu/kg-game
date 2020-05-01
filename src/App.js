import React, { useState, Fragment } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Alert from './components/alert/Alert';
import Board from './components/card/Board';

var firebase = require('firebase');

var firebaseConfig = {
  apiKey: "AIzaSyDXpKrNDj6wjiaqFGdfx8CRBkvZAzhJnAg",
  authDomain: "game-cf8b0.firebaseapp.com",
  databaseURL: "https://game-cf8b0.firebaseio.com",
  projectId: "game-cf8b0",
  storageBucket: "game-cf8b0.appspot.com",
  messagingSenderId: "635154006400",
  appId: "1:635154006400:web:22d8083e7ced2e72190165"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {

  const [loginStatus, setLoginStatus] = useState(false);
  const [userName, setUserName] = useState('');
  const [errorStatus, setErrorStatus] = useState(null);
  const [score, setScore] = useState(0);
  const [played, setPlayed] = useState(false);
  const [userId, setUserId] = useState('');

  /* states
    * 0: idle state
    * 1: user dashboard
    * 2: gameplay
    * 3: score card
  */
  const [mode, setMode] = useState(0);

  const signup = () => {

    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithPopup(provider);

    promise
      .then(result => {
        var user = result.user;

        firebase.database().ref(`users/`).set({
          email: user.email,
          name: user.displayName,
        });
        setErrorStatus(({ msg: 'Login successfull', type: 'success' }));
        setTimeout(() => {
          setErrorStatus(null);
          setUserName(user.displayName);
          setLoginStatus(true);
          setMode(1);
        }, 1000);

      });

    promise
      .catch(e => {
        setErrorStatus(({ msg: 'Login failed', type: 'error' }))
        setTimeout(() => {
          setErrorStatus(null);
        }, 3000);
      })
  }

  const logout = () => {
    firebase.auth().signOut();
    setErrorStatus({ msg: 'Logged out successfully', type: 'success' });
    setLoginStatus(false);
    setMode(0);
    setUserName('');
    setScore(0);
    setTimeout(() => {
      setErrorStatus(null);
    }, 2000);
  }

  const changeMode = () => {
    setTimeout(() => {
      setMode(2);
    }, 2000);
  }

  const changeNewMode = () => {
    setMode(3);
  }

  const updateScore = (s) => {
    setScore(s);
    setPlayed(true);
    writeNewPost();
  }

  function writeNewPost() {
    let user = firebase.auth().currentUser;
    firebase.database().ref(`user-dash/`).set({
      email: user.email,
      name: user.displayName,
      score: score,
      played: played
    });
    firebase.database().ref(`leaderboard/`).set({
      name: user.displayName,
      score: score,
      played: played
    });
  }

  const dashboard = () => {
    
  }

  return (
    <div >
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <Navbar loginStatus={loginStatus} userName={userName} signup={signup} logout={logout} />
      <Alert errorStatus={errorStatus} />
      <Board mode={mode} changeMode={changeMode} changeNewMode={changeNewMode} score={score} updateScore={updateScore} />
    </div>
  );
}

export default App;
