import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'
import { saveShoppingList } from '../actions/shoppinglist';

function Main (props) {
  return (
    <div className="Nav hero is-small is-info">
      <div className="hero-body">
        <Link to="/main">Home</Link>
        {props.auth.isAuthenticated
          ? <button onClick={() => props.dispatch(logoutUser())}>Logout</button>
          : <div className="columns nav-menu">
            <Link className="nav-item" to="/login">Login</Link>&nbsp;
            <Link className="nav-item" to="/register">Register</Link>
          </div>
        }
        <div>
          
          <button onClick={()=> props.dispatch(saveShoppingList(500, 
            200, '04052018', [{id: 5, name: 'milk', cost: 200}]))}>Done
          </button>  
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps)(Main)

// Change <button> on line 12 to <Link> to the ShoppingList Component.



