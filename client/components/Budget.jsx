import React from 'react' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {navigate} from '../actions/navigate'

//*NOTE* Added imports from dashboard action as a test
// import { getShoppingLists, getShoppingListById, 
//   deleteShoppingListById, getShoppingListTotals } from '../actions/dashboard'

class Budget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
    this.renderProgressBar = this.renderProgressBar.bind(this)
  }

  //*NOTE* : Added componentDidMount as a test
  // componentDidMount () {
  //   this.props.dispatch(getShoppingLists())
  //   this.props.dispatch(getShoppingListById(4))
  //   this.props.dispatch(getShoppingListTotals())
  //   this.props.dispatch(deleteShoppingListById(11))
  // }

  editBudget(event){
    event.preventDefault()
    this.props.dispatch(navigate('setting'))
    
  }
  
  renderProgressBar() {
    let progress = this.props.totalSpend *100/this.props.budget


    return (<div className="columns">

      {progress < 50 ? (
      <div className="column is-four-fifths">
      <progress className="progress is-normal is-warning" value={progress} max="100">25%</progress> 
      </div>):
      ( <div className="column is-four-fifths"><progress className="progress is-normal is-info" value={progress} max="100">25%</progress>
    </div> )
      }
      <br/>
      <div className="column is-one-fifth">
      <button className="button is-normal is-outlined is-mobile is-dark" onClick={this.editBudget.bind(this)}>Edit Budget</button></div>
      
          
      </div>)
  }

  render () {
  return (
    <div className="section"> 
      <div className="container">
      {this.renderProgressBar()}
      </div>
      {/* <p>This is your budget: $ {() => this.calculateRemainingBudget.bind(this)} </p> */}
      {/* Display budget and remaining money in dollars. Held in store as cents. */}
      <br/>
      <p className="has-text-warning is-size-6">Your Budget is: $ {(this.props.budget/100).toFixed(2)} </p> 
      <br/>
      <p className="has-text-warning is-size-6">You have</p>
      <p className="has-text-warning has-text-weight-bold is-size-5">$ {((this.props.budget - this.props.totalSpend)/100).toFixed(2)} left</p>
      
    </div>
  )
}
}

const mapStateToProps = (state) => {

  //*NOTE* : Added dashboardShoppinglist and dashboardShoppingListById as a test
  console.log('TEST',state)
  
  //Was budget: state.budget.budget - deleted second .budget to get budget in cents to work. Confusing.
  return {
    budget: state.budget,
    totalSpend: state.totalSpend

    // dashboardShoppingLists: state.dashboardShoppingLists,
    // dashboardShoppingListById: state.dashboardShoppingListById,
    // dashboardShoppingListTotals: state.dashboardShoppingListTotals
  }
}

//since our object 'budget' has only one key-value pair we are mapping it straight to props(budget)
//alternatively we could have done this just between render and return as in const budget = this.props.budget.budget
export default connect(mapStateToProps)(Budget) 