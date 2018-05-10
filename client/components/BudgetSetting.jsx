import React from 'react' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {navigate} from '../actions/navigate'


class BudgetSetting extends React.Component {

  onChange() {
    this.props.dispatch(navigate('budget'))
  }

  render() {
    return ( 
      <div> 
        <h1> set the budget </h1>
        <button onClick={this.onChange.bind(this)} className="button"> Next</button>
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