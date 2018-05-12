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


    return (<div className="columns">

      {progress < 50 ? (
      <div className="column is-four-fifths">
      <progress className="progress is-normal is-success" value={progress} max="100">25%</progress> 
      </div>):
      ( <div className="column is-four-fifths"><progress className="progress is-normal is-danger" value={progress} max="100">25%</progress>
    </div> )
      }
      <div className="column is-one-fifth">
      <button className="button is-normal is-outlined is-mobile is-success" onClick={this.editBudget.bind(this)}>Edit Budget</button></div>
      
          
      </div>)
  }

  render () {
  return (
    <div className="section"> 
      <div className="container">
      {this.renderProgressBar()}
      </div>
      <p className="has-text-warning is-size-2">Your Budget is: ${this.props.budget} </p> 
      <br/>
      <p className="has-text-warning is-size-2">You have</p>
      <p className="has-text-warning has-text-weight-bold is-size-2"> ${this.props.budget - this.props.totalSpend} left</p>
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