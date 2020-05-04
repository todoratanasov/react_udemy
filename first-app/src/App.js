import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Todor", age: 35 },
      { name: "Ana", age: 36 },
      { name: "Max", age: 28 },
    ],
  };

  shitchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Ivailo", age: 8 },
        { name: "Andi", age: 3 },
        { name: "Max", age: 28 },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello react world</h1>
        <button onClick={this.shitchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          hobby="bike"
        >
          This is child
        </Person>
      </div>
    );
  }
}

export default App;
