
import React, {Component} from "react";

export default class DigitalClicker extends Component {
  
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    }
  }

  countUp = () => {
    let currentClickCount = this.state.timesClicked + 1
    this.setState({
      timesClicked: currentClickCount
    });
  }

  render() {
    return (
      <div>
        <span>Clicked </span>
        <button onClick={this.countUp}>
          <span style={{fontSize: "1.1em", fontWeight: "bold", paddingLeft: "5%", paddingRight: "5%"}}>
            {this.state.timesClicked}
          </span>
        </button>
        <span> time{this.state.timesClicked === 1 ? null : "s"}</span>
      </div>
    );
  }
}
