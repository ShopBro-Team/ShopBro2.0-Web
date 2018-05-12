import React from 'react' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {navigate} from '../actions/navigate'
import {addBudget} from '../actions/budget'


class BudgetSetting extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      budget: ''
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
    const budget = this.state
    this.props.dispatch(addBudget(budget))
    this.props.dispatch(navigate('budget'))
    
  }
  //interacts with redux state: adds budget from component's state to redux global state and navigates to budget page

  render() {
    return ( 
      <div className="container"> 
        <form onSubmit={this.handleSubmit}>
        <label className="has-text-warning is-size-2 ">Set your budget $</label>
        <input className="input is-normal" name="budget" type="text" placeholder="your budget" onChange={this.updateBudget}/>
        <input className="button is-normal is-light" type="submit"/>
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