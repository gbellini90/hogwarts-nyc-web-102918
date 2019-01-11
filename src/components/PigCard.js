import React, { Component } from 'react';


class PigCard extends Component {

    state = {
      clicked: false
    }

    show = () => {
      if(this.state.clicked){
        return(
          <div>
          <h1 onClick={this.handleClick}>{this.props.hogInfo.name}</h1>
          <h3> Specialty:{this.props.hogInfo.specialty}</h3>
          <h3> {this.props.hogInfo.greased ? "Greased" : "Not Greased"}</h3>
          <h3> Weight:{this.props.hogInfo['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h3>
          <h3> Medal: {this.props.hogInfo['highest medal achieved']}</h3>
          <img src={(this.props.editUrl(this.props.hogInfo.name))} />
          </div>
        )
      } else {
        return(
          <div>
          <h1 onClick={this.handleClick}>{this.props.hogInfo.name}</h1>
          <img src={(this.props.editUrl(this.props.hogInfo.name))} />
          </div>
        )
      }
    }

    handleClick = () =>{
      this.setState({
        clicked: !this.state.clicked
      })
    }

  render() {
    return (
      <div className="pigTile" >
        {this.show()}
      </div>
    );
  }

}

export default PigCard;
