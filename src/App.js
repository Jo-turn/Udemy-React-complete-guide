import React, { Component } from 'react'
import Person from './Person/Person'
import './App.css'

class App extends Component {
  state = {
    persons: [
      { id: 'asdf', name: 'Max', age: '28' },
      { id: 'dfgh', name: 'Manu', age: '29' },
      { id: 'qwer', name: 'Stephanie', age: '26' },
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = { ...this.state.persons[personIndex] }

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = e.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  deleteClickHandler = personIndex => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let person = null

    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deleteClickHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={e => this.nameChangedHandler(e, person.id)}
              />
            )
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi I'm React App</h1>
        <p>This is really working!!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        {person}
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
