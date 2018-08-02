import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'
import {saveShoppingList, resetApp} from '../actions/shoppinglist'
import BudgetSettingContainer from '../containers/BudgetSettingContainer'
import Budget from './Budget'
import LayoutShoppingList from './LayoutShoppingList'
import AlertContainer from '../containers/AlertContainer'
import Celebration from './Celebration'


function Main (props) {

  //Code lines 16 - 20 call in the user_name from the db and capitalise the first letter
  let userName = props.auth.user.user_name
  
  function capitalizeFirstLetter(data) {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }

  //function done is called as button onClick and dispatches save shoppingList with the following arguments: budget, total savings, date and shoppinglist array [ item id, name and cost]. If clause: if our user has a positive savings amount then the resetApp function gets called from the Celebration.jsx component. However, if our user does not have a positive savings amoungt they won't get redirected to this componet, hence why resetApp needs to get dispatched from the done button.
  function done() {
    props.dispatch(saveShoppingList(props.budget, 
      (props.budget - props.totalSpend), new Date(), props.shoppingList))

    if (props.budget - props.totalSpend < 0)  {
      props.dispatch(resetApp())
    } 

  }

  //props.auth.isAuthenticated checks if our user is authenticated, only if true can they progress to setting their budget, otherwise they see the Login and Register buttons which link to the relevant components. props.butdetView sets a nested ternary that navigates between BudgetSettingContainer and Budget. This is set as setting in initialState.
  return (
    <div>
    <div className='Nav hero is-small is-success'>
      <div className='hero-body'>
        <p className='is-4 has-text-warning has-text-weight-bold'>Kia ora {capitalizeFirstLetter(userName)}!</p> 
        <br/>
        {props.auth.isAuthenticated
          ? <div>
              {props.budgetView === 'setting' ? <BudgetSettingContainer /> : <Budget />}
            </div>
          : <div className='columns nav-menu'>
              <Link className='nav-item' to='/login'>Login</Link>&nbsp;
              <Link className='nav-item' to='/register'>Register</Link>
            </div>
        }
        <LayoutShoppingList />
      {(props.budget - props.totalSpend) < 0 && <AlertContainer noBudget={props.budget == 0} />} 
      </div>
      
      {/* Done button calls done function and saves shopping list to database and celebrates if underbudget */}
      <div className='completed'>
        <button className='button is-normal is-warning has-text-white' onClick={() => done()}>
          {props.budget - props.totalSpend > 0.01 ? <Link className='nav-item' to='/celebration'>Done</Link> : 
            <Link className='nav-item' to='/dashboard'>Done</Link>}  
        </button>  
        <br/>
        <br/>
      </div> 
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    budgetView: state.budgetView,
    budget: state.budget,
    totalSpend: state.totalSpend,
    shoppingList: state.shoppingList
  }
}

export default connect(mapStateToProps)(Main)



