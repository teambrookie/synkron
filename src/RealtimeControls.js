import React, {Component } from 'react';
import * as firebase from 'firebase';

class RealtimeControls extends Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handlePlay() {
    firebase.database().ref('player').set({playing:true});
  }
  handlePause() {
    firebase.database().ref('player').set({playing:false});
  }

  render () {
    return (
      <div>
      <button type="button" onClick={this.handlePlay}>Play</button>
      <button type="button" onClick={this.handlePause}>Pause</button>
      </div>
    );
  }
}

export default RealtimeControls
