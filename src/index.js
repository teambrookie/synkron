import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyArZwW-cQlrhLBJnxaIHlA1jyQVsoUgS8Q",
  authDomain: "realtime-player.firebaseapp.com",
  databaseURL: "https://realtime-player.firebaseio.com",
  storageBucket: "realtime-player.appspot.com",
};
firebase.initializeApp(config);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
