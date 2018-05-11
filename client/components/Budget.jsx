import React from 'react' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {navigate} from '../actions/navigate'

// var totalSpend = 110
  // var totalSpend = this.props.shoppingList.totalSpend 
  // the above variable currently does not exist (hence, hardcoded outside class, action and reducer for totalcost still needs to be written, totalcost will keep a running tally of all item's costs


class Budget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
    this.renderProgressBar = this.renderProgressBar.bind(this)
  }

  editBudget(event){
    event.preventDefault()
    this.props.dispatch(navigate('setting'))
    
  }
  
  renderProgressBar() {
    let progress = this.props.totalSpend *100/this.props.budget


    return (<div>

      {progress < 50 ? (
      <progress className="progress is-warning" value={progress} max="100">25%</progress> ):
      ( <progress className="progress is-danger" value={progress} max="100">25%</progress> )
      }
      
          
      </div>)
  }

  render () {
  return (
    <div className="section"> 
      <h1>Show budget progress</h1>
      <div className="container">
      {this.renderProgressBar()}
      
      </div>
      {/* <p>This is your budget: $ {() => this.calculateRemainingBudget.bind(this)} </p> */}
      <p>This is your budget: {this.props.budget} </p> 
      <p>This is your remaining money: {this.props.budget - this.props.totalSpend}</p>
      {/* commented for trialling  */}
      <button className="button is-normal is-light" onClick={this.editBudget.bind(this)}>Edit Button</button>
      {/* Added the classname 'button is-normal is-light' via bulma styling */}
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    budget: state.budget.budget,
    totalSpend: state.totalSpend
  }
}

//since our object 'budget' has only one key-value pair we are mapping it straight to props(budget)
//alternatively we could have done this just between render and return as in const budget = this.props.budget.budget
export default connect(mapStateToProps)(Budget) 