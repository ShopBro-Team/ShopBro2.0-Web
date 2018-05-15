import React from 'react' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {navigate} from '../actions/navigate'
import {addBudget} from '../actions/budget'
import validateCostInput from '../utils/costInput'



class BudgetSetting extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      budget: '',
      messageCost: '',
      valid: true
    }
    this.updateBudget = this.updateBudget.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  updateBudget(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //updateBudget entirely concered with component's state (sets budget in local state)

  handleSubmit(event) {
    event.preventDefault()
    let budget = this.state.budget*100
  
    // validate that budget value is not a negative number before sending to props	
		let checkValid = validateCostInput(budget)
	
		this.setState({
			messageCost : checkValid.messageCost,
			valid : checkValid.valid
		})
		console.log("checking if valid: ",checkValid, checkValid.valid)
		if(checkValid.valid) {
      //** Convert budget in dollars to cents **
      this.props.dispatch(addBudget(budget))
      this.props.dispatch(navigate('budget'))
    }
  }


  //interacts with redux state: adds budget from component's state to redux global state and navigates to budget page

  render() {
    return ( 
      <div className="container"> 
        <form onSubmit={this.handleSubmit}>
        <label className="has-text-warning is-size-3 ">Set your budget $</label>
        <input onChange={this.updateBudget} className="input is-medium" name="budget" type="number" step="0.01" placeholder="Your budget"/>
        <br/>
        <br/>
        <input className="button is-medium is-warning has-text-primary" type="submit"/>
        <br/>
				{this.state.messageCost && <p>{this.state.messageCost}</p>}
        </form>
     </div>
    )
  }
}


export default connect()(BudgetSetting)



// const BudgetSetting = (props) => {
//   return (
//     <div> 
//       <h1>Set the budget</h1>
//       {/* <input className="input" type="text"><Link to='/Budget'></Link></input>
//       <button onClick="button is-success" type="next"><Link to='/Budget'>Next</Link></button> */}
//     </div>
//   )
// }

// export default BudgetSetting 

//this needs to be a stateful components. Because this will be the child of main.jsx
//and this does not