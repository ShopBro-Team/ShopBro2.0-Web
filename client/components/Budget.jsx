import React from 'react' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {navigate} from '../actions/navigate'

var totalSpend = 40
  // var totalSpend = this.props.shoppingList.totalSpend 
  // the above variable currently does not exist (hence, hardcoded outside class, action and reducer for totalcost still needs to be written, totalcost will keep a running tally of all item's costs


class Budget extends React.Component {



  editBudget(event){
    event.preventDefault()
    this.props.dispatch(navigate('setting'))
  }
  
  render () {

  return (
    <div> 
      <h1>Show budget progress</h1>
      {/* <p>This is your budget: $ {() => this.calculateRemainingBudget.bind(this)} </p> */}
      <p>This is your budget: {this.props.budget} </p> 
      <p>This is your remaining money: {this.props.budget - totalSpend}</p>
      {/* commented for trialling  */}
      <button onClick={this.editBudget.bind(this)}>Edit Button</button>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    budget: state.budget.budget,
    // shoppingList: state.shoppingList - Dana and Steve currently working on this, to be uncommented post merge
  }
}

//since our object 'budget' has only one key-value pair we are mapping it straight to props(budget)
//alternatively we could have done this just between render and return as in const budget = this.props.budget.budget
export default connect(mapStateToProps)(Budget) 