import React from 'react' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {navigate} from '../actions/navigate'


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
    console.log("this.state.budget, ", this.state.budget)
  }

  handleSubmit() {
    budget = this.state
    this.props.dispatch(addBudget(budget))
    this.props.dispatch(navigate('budget'))
  }

  render() {
    return ( 
      <div> 
        <form onSubmit={this.handleSubmit}>
        <label>Set your budget </label>
        <input name="budget" type="text" placeholder="your budget" onChange={this.updateBudget}/>
        <input type="submit" />
        {/* <button onClick={this.onChange.bind(this)} className="button"> Next</button> */}
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