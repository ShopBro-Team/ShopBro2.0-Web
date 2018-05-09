import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'

function Nav (props) {
  return (
    <div className="Nav hero is-small is-info">
      <div className="hero-body">
        <Link to="/">Home</Link>
        {props.auth.isAuthenticated
          ? <button onClick={() => props.dispatch(logoutUser())}>Logout</button>
          : <div className="columns nav-menu">
            <Link className="nav-item" to="/login">Login</Link>&nbsp;
            <Link className="nav-item" to="/register">Register</Link>
          </div>
        }
      </div>

    </div>
  )
}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps)(Nav)
