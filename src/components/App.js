import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigContainer from './PigContainer'
import PigCard from './PigCard'

class App extends Component {

  state = {
    hogs,
    greasedhog: false
  }

  handleClick = (event) => {
    if (event.target.value === "checkbox"){
    let copyArrayHogs = [...this.state.hogs]
    copyArrayHogs.filter(hog => hog.greased === true)
    console.log(copyArrayHogs)}
  }

  handleChange = (event) => {
    console.log('hey')
    if(event.target.value === "name"){
      let copyArrayHogs = [...this.state.hogs]
      copyArrayHogs.sort((pig1, pig2)=>
        pig1.name.localeCompare(pig2.name)
      )
      this.setState({
        hogs:copyArrayHogs
      })
    }
    else if (event.target.value === "weight") {
      let copyArrayHogs = [...this.state.hogs]
      copyArrayHogs.sort((pig1, pig2)=>
      pig1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']-pig2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    )
    this.setState({
      hogs:copyArrayHogs
    })
  }
  }



  render() {
    return (
      <div className="App">
          < Nav />
          <input onClick={this.handleClick} value="checkbox" type="checkbox"></input>
          <select onChange={this.handleChange}>
            <option value="name">Sort by Name</option>
            <option value="weight">Sort by Weight</option>
          </select>
          <PigContainer hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
