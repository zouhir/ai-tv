import { h, Component } from "preact";
import style from "./index.css";

import Icons from "@components/Icons";
import ProgressBar from "@components/ProgressBar";

const secondsToIsoStr = s => {
  var date = new Date(null);
  date.setSeconds(s); // specify value for SECONDS here
  let formatted = date.toISOString().substr(11, 8);
  if (formatted.indexOf("00:") === 0) {
    formatted = formatted.substr(3, formatted.length);
  }
  return formatted;
};

export default class Video extends Component {
  state = {
    playing: false,
    duration: null,
    currentTime: 0
  };
  _playerProgressInterval = null;
  onLoadedMetadata = e => {
    let duration = e.target.duration;

    this.setState({ duration });
  };
  play = () => {
    let vidEl = this.base.querySelector("video");
    vidEl.play().then(_ => {
      this.setState({ playing: true });
      this.startProgressInterval();
    });
  };
  pause = () => {
    let vidEl = this.base.querySelector("video");
    vidEl.pause();
    clearInterval(this._playerProgressInterval);
    this.setState({ playing: false });
  };
  onProgress = e => {
    // let currentTime = e.target.currentTime;
  };
  onPlayPauseClick = () => {
    if (this.state.playing) {
      return this.pause();
    }
    return this.play();
  };
  startProgressInterval = () => {
    this._playerProgressInterval = setInterval(() => {
      console.log("aaaaaaaa");
      let currentTime = this.state.currentTime + 1;
      this.setState({ currentTime });
    }, 1000);
  };
  render(_, { duration, currentTime, playing }) {
    return (
      <div class={style.player}>
        <video
          onLoadedMetadata={this.onLoadedMetadata}
          onProgress={this.onProgress}
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
        <div class={style.controls}>
          
		<ProgressBar duration={duration} currentTime={currentTime} />

          <div class={style.buttonsWrapper}>
            <button class={style.play} onClick={this.onPlayPauseClick}>
              {playing === true ? <Icons.Pause /> : <Icons.Play />}
            </button>
            <button class={style.settings}>set</button>

            <button class={style.settings}>set2</button>
          </div>
        </div>
      </div>
    );
  }
}
