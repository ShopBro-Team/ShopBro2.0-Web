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

  //onClick action which dispatches navigate and moves our user to the BudgetSetting component
  editBudget(event){
    event.preventDefault()
    this.props.dispatch(navigate('setting'))
  }

  //renders our progressbar by calculating how many percent of total budget spent, the progress bars colour changes (set in styling in className) depending on if over or under 50% spent.
  renderProgressBar() {
    let progress = this.props.totalSpend *100/this.props.budget


    return (
      <div className='column is-mobile is-centered'>
        <div className='level columns'>
          {progress < 50 
            ? 
            <div className="control column is-four-fifths">
              <progress className="progress is-normal is-warning" value={progress} max="100"></progress> 
            </div>
            :
            <div className="control column is-four-fifths">
              <progress className="progress is-normal is-info" value={progress} max="100"></progress>
            </div> 
          }
          <button className="button is-small is-outlined is-mobile is-dark" onClick={this.editBudget.bind(this)}>
            Edit Budget
          </button>
          <br/>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div> 

        <div className="container">
          {this.renderProgressBar()}
        </div> 

        <p className="has-text-warning is-size-6">
          Your Budget is: ${(this.props.budget/100).toFixed(2)} 
        </p> 
        {this.props.budget - this.props.totalSpend > 0
          ?
          <p className="has-text-warning has-text-weight-bold is-size-6">
            You have ${((this.props.budget - this.props.totalSpend)/100).toFixed(2)} left</p> 
          :
          <p className="has-text-danger has-text-weight-bold is-size-6">
            You have over spent by ${((this.props.totalSpend - this.props.budget)/100).toFixed(2)}</p> 
        }

    </div>    
    )
  }
}

//in the return above: we're rendering the progressbar by calling the renderProgressBar function. We're showing the budget, fixed to two decimals after the comma. In the ternary we're calculating the remaining amount of money available to the user. If over 0 we're displating how much is left, if below zero, we're showing by how much the user has overspent.

const mapStateToProps = (state) => {
  return {
    budget: state.budget,
    totalSpend: state.totalSpend
  }
}

export default connect(mapStateToProps)(Budget) 