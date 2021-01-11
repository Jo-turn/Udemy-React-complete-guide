import React, { Component } from 'react'
import Person from './Person/Person'
import './App.css'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: '28' },
      { name: 'Manu', age: '29' },
      { name: 'Stephanie', age: '26' },
    ],
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maxasda', age: '28' },
        { name: 'Manu', age: '29' },
        { name: 'Stephanie', age: '26' },
      ],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm React App</h1>
        <p>This is really working!!</p>
        <button onClick={this.switchNameHandler}>Swich Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        ></Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        ></Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person>
      </div>
    )
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, "Hi, I'm a React App!!!")
    // )
  }
}

export default App
