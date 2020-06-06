import React, { Component } from "react";
import "./Char.css";
class Char extends Component {
  state = {
    value: this.props.inputChar,
  };
  render() {
    return (
      <div className="char" onClick={this.props.deleteChar}>
        {this.state.value}
      </div>
    );
  }
}

export default Char;
