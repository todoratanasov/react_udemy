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

  shitchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 8 },
        { name: "Andi", age: 3 },
        { name: "Max", age: 28 },
      ],
    });
  };
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 8 },
        { name: "todor", age: 3 },
        { name: "Max", age: 28 },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello react world</h1>
        <button onClick={() => this.shitchNameHandler("Ivailo!!!")}>
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.shitchNameHandler.bind(this, "Ivo")}
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
