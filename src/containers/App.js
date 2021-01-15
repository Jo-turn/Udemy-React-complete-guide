import React, { Component } from 'react'

import Person from '../Components/Persons/Person/Person'

import classes from './App.css'

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
    let person = null
    let btnClass = ''

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
      btnClass = classes.Red
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={classes.App}>
        <h1>Hi I'm React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!!</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>
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
