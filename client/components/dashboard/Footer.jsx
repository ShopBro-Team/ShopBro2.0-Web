import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { resetApp } from '../../actions/shoppinglist'

function Footer (props) {

  function reset(){
    props.dispatch(resetApp())
  }
 
  return (
    <div className="navbar is-active is-fixed-bottom ">
      <div className="buttons is-centered">
      <div className="field is-grouped is-centered">
        <Link className="navbar-item is-dark" to="/dashboard" onClick={reset}>Dashboard</Link>
        <Link className="navbar-item is-dark" to="/main" onClick={reset}>Main</Link>
        <Link className="navbar-item is-dark" to="/settings" onClick={reset}>Settings</Link>
        <Link className="navbar-item is-dark" to="/login" onClick={() => props.dispatch(logoutUser())}>Logout</Link>
        </div>
      </div>
    </div>
  )
}

export default connect()(Footer)