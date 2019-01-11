import React, { Component } from 'react';
import PigCard from './PigCard'

class PigContainer extends Component {

  editUrl = (name) => {
     let formattedName = name
      .toLowerCase()
       .split(' ')
       .join('_')
     return require(`../hog-imgs/${formattedName}.jpg`)
   }


  render() {
    console.log(this.props.hogs)
    return (
      <div className="ui grid container">
      {this.props.hogs.map( hog =>
      <PigCard id={hog.name} hogInfo={hog} editUrl={this.editUrl}/>)}
      </div>
    );
  }

}

export default PigContainer;
