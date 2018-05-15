import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'
import { saveShoppingList } from '../actions/shoppinglist'
import BudgetSettingContainer from '../containers/BudgetSettingContainer'
import Budget from './Budget'
import ShoppingList from './ShoppingList'
import AlertContainer from '../containers/AlertContainer'
import Celebration from './Celebration'

import { resetApp } from '../actions/shoppinglist'

//ISSUE: budgetView needs to reset to 'setting' everytime there is a new user or
//where a user logs in that has not click on the 'next button'.


function Main (props) {

  //Code lines 18 - 23 calls in the user_name from the db and capitalizes the first letter.
  let userName = props.auth.user.user_name
  
  function capitalizeFirstLetter(data) {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }

  function done() {
    props.dispatch(saveShoppingList(props.budget, 
      (props.budget - props.totalSpend), new Date(), props.shoppingList))

    if (props.budget - props.totalSpend < 0)  {
      props.dispatch(resetApp())
    } 

  }

  return (
    <div>
    <div className="Nav hero is-small is-success">
      <div className="hero-body">
        <div className="level-right has-text-centered"> 
        {/* I don't know how to make logout button to go top right */}
          <button className="button is-small" onClick={() => props.dispatch(logoutUser())}>Logout</button>
        </div>
        <p className="is-size-4 has-text-warning has-text-weight-bold">Kia ora {capitalizeFirstLetter(userName)}</p> 
        {props.auth.isAuthenticated
          ? <div>
              {console.log(props.budgetView)}
              {props.budgetView === 'setting' ? <BudgetSettingContainer /> : <Budget />}
            </div>
          : <div className="columns nav-menu">
            <Link className="nav-item" to="/login">Login</Link>&nbsp;
            <Link className="nav-item" to="/register">Register</Link>
          </div>
        }
        <ShoppingList />
      {(props.budget - props.totalSpend)< 0 && <AlertContainer />} 
      </div>
      
      {/* Done button saves shopping list to database and celebrates if underbudget */}
      <div>
          <button className="button is-medium is-warning has-text-white" onClick={() => done()}>
            {props.budget - props.totalSpend> 0 ? <Link className="nav-item" to="/celebration">Done</Link> : 
              <Link className="nav-item" to="/dashboard">Done</Link>}  
          </button> 
          <br/> 
          <br/> 
      </div> 
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  //Was budget: state.budget.budget - deleted second .budget to get budget in cents to work. Confusing.
  return {
    auth: state.auth,
    budgetView: state.budgetView,
    budget: state.budget,
    totalSpend: state.totalSpend,
    shoppingList: state.shoppingList
  }
}

export default connect(mapStateToProps)(Main)



