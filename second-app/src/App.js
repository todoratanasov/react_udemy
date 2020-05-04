import React, { Component } from "react";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
class App extends Component {
  state = {
    username: "tossoa",
  };

  eventHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserInput
          eventHandler={this.eventHandler}
          curValue={this.state.username}
        />
      </div>
    );
  }
}

export default App;
