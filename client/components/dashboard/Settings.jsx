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
    <h1 className= "title is-4 has-text-warning has-text-weight-bold">Settings</h1>
    <p className= "title is-5 has-text-warning has-text-weight-medium">Save your Shopping List</p>
    <div className="buttons has-addons is-centered">
      <span className="button is-success has-text-primary">Yes</span>
      <span className="button is-warning is-selected has-text-primary">No</span>
     </div>
    <input className="input is-normal" type="text" name="name" placeholder="Change username" />
    <button className="button">Submit</button>
  </div>
  )
}

export default connect()(Settings)