import React from 'react'
import {Link} from 'react-router-dom'
import {logoutUser} from '../../actions/logout'
import {connect} from 'react-redux'

function Settings (props) {

  return (
  <div>        
    <div className="level-right">
      <button className="button" onClick={() => props.dispatch(logoutUser())}>Logout</button>
    </div>
  <h1>Hello Settings</h1>
  </div>
  )
}

export default connect()(Settings)