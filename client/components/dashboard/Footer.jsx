import React from 'react'
import {Link} from 'react-router-dom'

//Footer and navigation for app,  

function Footer (props) {
 
  return (
    <div className="navbar is-active is-fixed-bottom ">
      <div className="buttons is-centered">
      <div className="field is-grouped is-centered">
        <Link className="navbar-item is-dark" to="/dashboard"><button className="button is-normal is-dark">Dashboard</button></Link>
        <Link className="navbar-item is-dark" to="/main"><button className="button is-normal is-dark">Main</button></Link>
        <Link className="navbar-item is-dark" to="/settings"><button className="button is-normal is-dark">Settings</button></Link>
        </div>
      </div>
    </div>
  )
}



export default Footer