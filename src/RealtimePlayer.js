import React, { Component } from 'react';
import plyr from 'plyr';
import 'plyr/dist/plyr.css';
import * as firebase from 'firebase';
import RealtimeControls from './RealtimeControls';


class RealtimePlayer extends Component {
  constructor(props) {
    super(props);
    // Initialize Firebase


    this.state = {currentTime: '', playing: false};
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.handlePlayerStateUpdate = this.handlePlayerStateUpdate.bind(this);


  }
  componentDidMount() {
    firebase.database().ref('/player/playing').on('value', snap => {
      let playing = snap.val();
      if (playing) {
        this.setState({playing:playing})
        this.refs.plyr.plyr.play();
      } else {
          this.setState({playing:playing})
        this.refs.plyr.plyr.pause();
      }
      console.log(playing);
    });


    let options = {controls: [], clickToPlay: false, }
    let player = plyr.setup(this.refs.plyr,options)[0];
    player.addEventListener('timeupdate', this.handleTimeUpdate);
  }
  handleTimeUpdate(e) {
    let currentTime = this.refs.plyr.plyr.getCurrentTime();
    this.setState({currentTime: currentTime});
    let updates = {};
    updates['/player/currentTime'] = currentTime;
    firebase.database().ref().update(updates);
  }
  handlePlayerStateUpdate(e) {
    let playing = e.type === "play" ? true : false;
    let updates = {};
    updates['/player/playing'] = playing;
    firebase.database().ref().update(updates);
  }
  render() {
    return (
      <div>
      <div class="plyr" ref="plyr">
      <div data-video-id="bTqVqk7FSmY" data-type="youtube" data-plyr='{controls: []}'>
      </div>
      </div>
            <RealtimeControls/>
      <h5>Current time : {this.state.currentTime}</h5>
      <h5>Playing :  {this.state.playing.toString()}</h5>
      </div>
    );
  }
}

export default RealtimePlayer;
