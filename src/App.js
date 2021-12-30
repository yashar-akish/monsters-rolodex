import React, { Component } from "react";

import "./App.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 1,
          name: "Frankenstein",
        },
        {
          id: 2,
          name: "Dracula",
        },
        {
          id: 3,
          name: "Zombi",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)
        }
      </div>
    );
  }
}

export default App;
