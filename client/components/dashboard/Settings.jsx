import React from 'react'
import {Link} from 'react-router-dom'
import {logoutUser} from '../../actions/logout'
import {deleteUserAccountById} from '../../actions/register'
import {connect} from 'react-redux'

//Settings for app - functionality to be done!

class Settings extends React.Component {
// function Settings (props) {

  deleteUserAccount(e, userId) {
		e.preventDefault()
    this.props.dispatch(deleteUserAccountById(userId))
  }
  render() {
    let userId = this.props.auth.user.user_id

    return (
    <div>        
      <div className="level-right">
        <button className="button is-small is-dark" onClick={() => this.props.dispatch(logoutUser())}>Logout</button>
        <br/>
      </div>
      <br/>
      <h1 className= "title is-4 has-text-warning has-text-weight-bold">Settings</h1>

      <p className= "level-item is-5 has-text-warning has-text-weight-medium">Save your Shopping List</p>
      <div className="buttons has-addons is-centered">
        <span className="button is-success has-text-warning">Yes</span>
        <span className="button is-selected has-text-warning">No</span>
      </div>

      <p className= "level-item is-5 has-text-warning has-text-weight-medium">Delete your account</p>
      {/* <input className="input is-normal has-text-centered" type="text" name="name" placeholder="Enter your password" /> */}
      <div className="buttons has-addons is-centered">
        <span onClick={(e) => this.deleteUserAccount(e, userId)} className="button is-success has-text-warning">Yes</span>
      </div>
      {/* create an alert to confirm that user wants to delete account */}


      <br/>
        <p className= "level-item is-5 has-text-warning has-text-weight-medium">Change user name</p>
      <input className="input is-normal has-text-centered" type="text" name="name" placeholder="Change username" />
      <br/>
      <br/>

      <button className="button is-centered is-small is-warning has-text-primary">Submit</button>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Settings)