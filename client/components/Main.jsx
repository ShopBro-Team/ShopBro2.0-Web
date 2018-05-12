import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'
import { saveShoppingList } from '../actions/shoppinglist'
import BudgetSetting from './BudgetSetting'
import Budget from './Budget'
import ShoppingList from './ShoppingList'
import Alert from './Alert'
import Celebration from './Celebration'

//ISSUE: budgetView needs to reset to 'setting' everytime there is a new user or
//where a user logs in that has not click on the 'next button'.


function Main (props) {

  //Code lines 18 - 23 calls in the user_name from the db and capitalizes the first letter.
  let userName = props.auth.user.user_name
  
  function capitalizeFirstLetter(data) {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }

  return (
    <div className="Nav hero is-small is-info">
      <div className="hero-body">
        <div className="level-right">
          <button className="button" onClick={() => props.dispatch(logoutUser())}>Logout</button>
        </div>
        <p className="is-size-2 is-warning">Kia ora {capitalizeFirstLetter(userName)}</p> 
        {props.auth.isAuthenticated
          ? <div>
              {props.budgetView === 'setting' ? <BudgetSetting /> : <Budget />}
            </div>
          : <div className="columns nav-menu">
            <Link className="nav-item" to="/login">Login</Link>&nbsp;
            <Link className="nav-item" to="/register">Register</Link>
          </div>
        }
        <ShoppingList />
      {(props.budget - props.totalSpend)< 0 && <Alert />} 
      </div>
      
      {/* Done button saves shopping list to database and celebrates if underbudget */}
      <div>
          <button className="button" onClick={()=> props.dispatch(saveShoppingList(props.budget, 
            (props.budget - props.totalSpend), new Date(), props.shoppingList))}>
            {props.budget - props.totalSpend> 0 ? <Link className="nav-item" to="/celebration">Done</Link> : "Done"}  
          </button> 
          <br/> 
          <br/> 
      </div> 
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    budgetView: state.budgetView,
    budget: state.budget.budget,
    totalSpend: state.totalSpend,
    shoppingList: state.shoppingList
  }
}

export default connect(mapStateToProps)(Main)



