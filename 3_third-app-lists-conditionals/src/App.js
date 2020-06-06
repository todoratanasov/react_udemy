import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asdasdasdafgg", name: "Todor", age: 35 },
      { id: "asdasdasdafggzxc", name: "Ana", age: 36 },
      { id: "asdasdasdafggererer", name: "Max", age: 28 },
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    person.name = event.target.value;
    this.setState({
      persons: persons,
    });
  };
  toglePersonsHandler = () => {
    const doseShow = this.state.showPersons;
    this.setState({ showPersons: !doseShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello react world</h1>
        <button onClick={this.toglePersonsHandler}>Switch name</button>

        {persons}
      </div>
    );
  }
}

export default App;
