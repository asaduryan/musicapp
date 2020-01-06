import React, { Component } from 'react';
import "./home.scss"

class Progress extends React.Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const { radius, stroke, progress } = this.props;

    const strokeDashoffset = this.circumference - progress / 100 * this.circumference;

    return (
      <svg
        height={radius * 2}
        width={radius * 2}
      >
        <circle
          stroke="#ffffff"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={this.circumference + ' ' + this.circumference}
          style={{ strokeDashoffset }}
          r={this.normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    );
  }
}

class Song extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: "pause",
      currentTime: 0,
      duration: 100
    };
    this.audio = React.createRef();
  }

  playPause = (key) => {
    this.setState({
      status: key
    });
    switch (key) {
      case "play":
        return this.audio.current.play()
      case "pause":
        return this.audio.current.pause()
      default:
        break;
    }
  }
  stop = () => {
    this.setState({
      status: "pause",
      currentTime: 0
    });
    return this.audio.current.pause()
  }
  componentDidMount() {
    if (this.audio.current) {
      this.audio.current.ontimeupdate = (event) => {
      this.setState({
        currentTime: event.target.currentTime,
        duration: event.target.duration
      })
    }}

  }
  
  playing() {
    console.log(88888,this.audio.current)
  }
  render() {
    const { song } = this.props;
    return (
      <div className='songBox'>
        <div className='albumCover'>
          <img src={song.album.cover_small} alt="" />
        </div>
        <div className='playPauseBtn' >
          <div className='progress'>
            <Progress
              radius={30}
              stroke={4}
              progress={(this.state.currentTime * 100) / this.state.duration}
            />
          </div>
          {this.state.status === "pause" && <div className='playPause' onClick={() => this.playPause("play")}>
            <i className="fas fa-play" />
          </div>}
          {this.state.status === "play" && <div className='playPause' onClick={() => this.playPause("pause")}>
            <i className="fas fa-pause" />
          </div>}
          <audio controls={false} ref={this.audio} onEnded={ () => this.stop() }  onPlay={this.playing()} >
            <source src={song.preview} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className='title'>
          <div className='songTitle'>
            {song.title}
          </div>
          <div className='albumTitle'>
            {song.album.title}
          </div>
          <div className='artistName'>
            {song.artist.name}
          </div>
        </div>
        <div className='artistPic'>
          <img src={song.artist.picture_small} alt="" />
        </div>
      </div>
    );
  }
}

export default Song;