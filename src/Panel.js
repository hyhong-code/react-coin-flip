import React, { Component } from "react";
import Coin from "./Coin";
import "./Panel.css";

class Panel extends Component {
  static defaultProps = {
    faces: ["heads", "tail"],
  };

  constructor(props) {
    super(props);
    this.state = {
      numFlips: 0,
      numHeads: 0,
      curFace: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // flip coin
    const rand = Math.floor(Math.random() * 2);
    this.setState((ps) => {
      return {
        numFlips: ps.numFlips + 1,
        numHeads: ps.numHeads + (rand === 0 ? 1 : 0),
        curFace: this.props.faces[rand],
      };
    });
  }

  render() {
    return (
      <div className="Panel">
        <h1>Let's flip a coin!</h1>
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
