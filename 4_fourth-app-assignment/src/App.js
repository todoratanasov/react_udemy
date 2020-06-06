import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    inputValue: "",
    input: [],
    inputLength: 0,
  };

  onChangeHandler = async (event) => {
    const inputLength = event.target.value.length;
    const input = event.target.value.split("");
    const inputValue = event.target.value;

    console.log("first");
    await this.setState({
      input,
      inputLength,
      inputValue,
    });
  };

  deleteComponentHandler = async (index) => {
    const input = await [...this.state.input];
    input.splice(index, 1);
    // this.setState({ input });

    const inputLength = (await this.state.inputLength) - 1;
    console.log(inputLength);
    // this.setState({ inputLength });

    const inputValue = await this.state.input.join("");
    console.log(this.state.inputValue);
    this.setState({
      input,
      inputLength,
      inputValue,
    });
  };

  render() {
    const inputText = (
      <div>
        {this.state.input.map((char, index) => (
          <Char
            inputChar={char}
            deleteChar={() => this.deleteComponentHandler(index)}
          />
        ))}
      </div>
    );

    return (
      <div className="App">
        <input
          value={this.state.inputValue}
          type="text"
          onChange={(event) => this.onChangeHandler(event)}
        />
        <p>{this.state.inputLength}</p>
        <Validation inputLength={this.state.inputLength} />
        {inputText}
      </div>
    );
  }
}

export default App;
