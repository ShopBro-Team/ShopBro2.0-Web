import React from 'react' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {navigate} from '../actions/navigate'


class Budget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: 40
    }
  }

  editBudget(event){
    event.preventDefault()
    this.props.dispatch(navigate('setting'))
  }
  
  render () {
  return (
    <div className="section"> 
      <h1>Show budget progress</h1>
      <div className="container">
      {this.state.progress < 50 ? (
      <progress className="progress is-warning" value={this.state.progress} max="100">25%</progress> ):
      ( <progress className="progress is-danger" value="25" max="100">25%</progress> )
      }
      <progress className="progress is-danger" value="25" max="100">25%</progress>
      </div>
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