import React, { Component } from "react";

class UserInput extends Component {
  render() {
    return (
      <input onChange={this.props.eventHandler} value={this.props.curValue} />
    );
  }
}

export default UserInput;
