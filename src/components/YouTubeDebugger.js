
import React, {Component} from "react";

export default class YouTubeDebugger extends Component {
  
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  adjustBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  adjustResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    });
  }

  render() {
    return (
      <div>
        <p><button className="bitrate" onClick={this.adjustBitrate}>Bitrate</button></p>
        <p><button className="resolution" onClick={this.adjustResolution}>Resolution</button></p>
      </div>
    );
  }
}
