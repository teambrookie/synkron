import React, { Component } from 'react';
import plyr from 'plyr';
import './RealtimePlayer.css';


class RealtimePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {currentTime: '', playing: false};
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    this.handlePlayerStateUpdate = this.handlePlayerStateUpdate.bind(this);
  }
  componentDidMount() {
    let player = plyr.setup(this.refs.plyr)[0];
    player.addEventListener('timeupdate', this.handleTimeUpdate);
    player.addEventListener('play',this.handlePlayerStateUpdate);
    player.addEventListener('pause',this.handlePlayerStateUpdate);
  }
  handleTimeUpdate(e) {
    this.setState({currentTime: e.target.plyr.media.currentTime});
  }
  handlePlayerStateUpdate(e) {
    this.setState({playing: e.type === "play" ? true : false});
  }
  render() {
    return (
      <div>
      <div class="plyr" ref="plyr">
        <div data-video-id="bTqVqk7FSmY" data-type="youtube">
        </div>

      </div>
      <h5>Current time : {this.state.currentTime}</h5>
    <h5>Playing :  {this.state.playing.toString()}</h5>
    </div>
    );
  }
}

export default RealtimePlayer;
