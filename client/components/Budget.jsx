import React from 'react' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {navigate} from '../actions/navigate'


class Budget extends React.Component {

  editBudget(event){
    event.preventDefault()
    this.props.dispatch(navigate('setting'))
  }
  
  render () {
  return (
    <div> 
      <h1>Show budget progress</h1>
      <p>This is your budget: {this.props.budget} </p>
      <button onClick={this.editBudget.bind(this)}>Edit Button</button>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    budget: state.budget.budget
  }
}

//since our object 'budget' has only one key-value pair we are mapping it straight to props(budget)
//alternatively we could have done this just between render and return as in const budget = this.props.budget.budget
export default connect(mapStateToProps)(Budget) 