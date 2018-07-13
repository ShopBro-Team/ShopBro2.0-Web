import React from 'react'
import {Link} from 'react-router-dom'

//Footer and navigation for app,  

function Footer (props) {
 
  return (
    <div className="navbar is-active is-fixed-bottom ">
      <div className="buttons is-centered">
      <div className="field is-grouped is-centered">
        <Link className="navbar-item is-dark" to="/dashboard">Dashboard</Link>
        <Link className="navbar-item is-dark" to="/main">Main</Link>
        <Link className="navbar-item is-dark" to="/settings">Settings</Link>
        <Link className="navbar-item is-dark" to="/login" onClick={() => props.dispatch(logoutUser())}>Logout</Link>
        </div>
      </div>
    </div>
  )
}



export default Footer