import React from 'react' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {navigate} from '../actions/navigate'

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
      <progress className="progress is-success" value={progress} max="100">25%</progress> ):
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
      {/* Display budget and remaining money in dollars. Held in store as cents. */}
      <p>This is your budget: {this.props.budget/100} </p> 
      <p>This is your remaining money: {(this.props.budget - this.props.totalSpend)/100}</p>
      <button onClick={this.editBudget.bind(this)}>Edit Button</button>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  
  //Was budget: state.budget.budget - deleted second .budget to get budget in cents to work. Confusing.
  return {
    budget: state.budget,
    totalSpend: state.totalSpend
  }
}

//since our object 'budget' has only one key-value pair we are mapping it straight to props(budget)
//alternatively we could have done this just between render and return as in const budget = this.props.budget.budget
export default connect(mapStateToProps)(Budget) 