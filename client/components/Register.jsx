import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      user_email: '',
      password: '',
      confirm_password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    e.target.reset()
    let {user_name, user_email, password, confirm_password} = this.state
    if (password == confirm_password) this.props.dispatch(registerUserRequest({user_name, user_email, password}))
  }
  render() {
    return (
      <form className="Register container" onSubmit={this.submit}>
        <label className="is-size-2">Username:
          <input className="input is-medium" type="text" name="user_name" onChange={this.updateDetails}/>
        </label><br/>
        <label className="is-size-2">Email:
          <input className="input is-medium" type="text" name="user_email" onChange={this.updateDetails}/>
        </label><br/>
        <label className="is-size-2">Password:
          <input className="input is-medium" type="password" name="password" onChange={this.updateDetails}/>
        </label><br/>
        <label className="is-size-2">Confirm:
          <input className="input is-medium" type="password" name="confirm_password" onChange={this.updateDetails}/>
        </label><br/>
          <input className="button is-success is-large" type="submit" />
      </form>
    )
  }
}

export default connect()(Register)

//Add an email input in this component.