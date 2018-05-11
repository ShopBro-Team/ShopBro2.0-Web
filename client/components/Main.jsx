import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'
import { saveShoppingList } from '../actions/shoppinglist'
import BudgetSetting from './BudgetSetting'
import Budget from './Budget'
import ShoppingList from './ShoppingList'

//ISSUE: budgetView needs to reset to 'setting' everytime there is a new user or
//where a user logs in that has not click on the 'next button'.


function Main (props) {

  return (
    <div className="Nav hero is-small is-info">
      <div className="hero-body">
        <Link to="/main">Home</Link>
        {props.auth.isAuthenticated
          ? <div>
              <button onClick={() => props.dispatch(logoutUser())}>Logout</button>
              {props.budgetView === 'setting' ? <BudgetSetting /> : <Budget />}
            </div>
          : <div className="columns nav-menu">
            <Link className="nav-item" to="/login">Login</Link>&nbsp;
            <Link className="nav-item" to="/register">Register</Link>
          </div>
        }
        <ShoppingList />
      </div>
      {/* <BudgetSetting /> */}

       <div>
          <button onClick={()=> props.dispatch(saveShoppingList(props.budget, 
            200, '04052018', props.shoppingList))}>Done
          </button>  
       </div> 

    </div>
  )
}
// }

//props.shoppingList
// const mapStateToProps = ({auth,budgetView}) => {

//   return {
//     auth,
//     budgetView
//   }
// }
// the above is what Steve wrote to solve Dana and Rosie's problem re navigating, the below is more in line with how we are used to write mapStateToProps and how we are suggesting to write this

const mapStateToProps = (state) => {
  //console.log('state in mstp, ', state)
  return {
    auth: state.auth,
    budgetView: state.budgetView,
    budget: state.budget.budget,
    shoppingList: state.shoppingList
  }
}

export default connect(mapStateToProps)(Main)



