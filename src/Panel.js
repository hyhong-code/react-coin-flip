import React, { Component } from "react";
import Coin from "./Coin";
import "./Panel.css";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numFlips: 0,
      numHeads: 0,
      curFace: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
      this.setState((prevState) => ({
        numFlips: prevState.numFlips + 1,
        numHeads: prevState.numHeads + 1,
        curFace: "heads",
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        numFlips: prevState.numFlips + 1,
        curFace: "tail",
      }));
    }
  }

  render() {
    return (
      <div className="Panel">
        <h1>Let's flip a coin</h1>
        {this.state.curFace && <Coin face={this.state.curFace} />}
        <button onClick={this.handleClick}>Flip Me</button>
        <p>
          Out of {this.state.numFlips} flips, there have been{" "}
          {this.state.numHeads} heads and{" "}
          {this.state.numFlips - this.state.numHeads} tails.
        </p>
      </div>
    );
  }
}

export default Panel;
