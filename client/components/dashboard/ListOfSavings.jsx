import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'





class ListOfSavings extends React.Component {

  renderProgressBar() {
    // let progress = this.props.totalSpend *100/this.props.budget
    let progress = 45

    return (<div className="columns">

      {progress < 50 ? (
      <div className="column is-four-fifths">
      <progress className="progress is-normal is-warning" value={progress} max="100">25%</progress> 
      </div>):
      ( <div className="column is-four-fifths"><progress className="progress is-normal is-info" value={progress} max="100">25%</progress>
      </div> )
      }   
      </div>)
  }

  render() {
    return (
      <div>
        {/* this will need to become a map function to display all shopping trips for a particular user*/}
        <button>Date</button>
        {/* Ideally this will be this.props.shoppingList.date */}
        {this.renderProgressBar()} 
        <p>You saved $40</p>
        {/* <p>You saved ${this.props.budget - this.props.totalSpend}</p> */}
        <button>Delete</button>
        {/* This will have onClick function that triggers delete action call */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    budget: state.budget,
    totalSpend: state.totalSpend,
    shoppingList: state.shoppingList
  }
}

export default connect(mapStateToProps)(ListOfSavings)