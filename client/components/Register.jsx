import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register'
import validateRegister from '../utils/register'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      user_email: '',
      password: '',
      confirm_password: '',
      messagePassword : '',
      messageEmail : '',
      messageUserName : '',
      valid : true      

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
    
    let checkValid = validateRegister(user_name, user_email, password, confirm_password)
    this.setState({
      messagePassword : checkValid.messagePassword,
      messageEmail : checkValid.messageEmail,
      messageUserName : checkValid.messageUserName, 
      valid : checkValid.valid    
    })
    
    if (this.state.valid) this.props.dispatch(registerUserRequest({user_name, user_email, password}))
  }

  render() {
    return (
      <form className="Register container" onSubmit={this.submit}>
        <label>Username:
          <input className="input" type="text" name="user_name" onChange={this.updateDetails}/>
        </label><br/>
        <label>Email:
          <input className="input" type="text" name="user_email" onChange={this.updateDetails}/>
        </label><br/>
        {this.state.messageEmail.length > 0 && <p>{this.state.messageEmail}</p>}
        <label>Password:
          <input className="input" type="password" name="password" onChange={this.updateDetails}/>
        </label><br/>
        <label>Confirm:
          <input className="input" type="password" name="confirm_password" onChange={this.updateDetails}/>
        </label><br/>
          <input className="button is-success" type="submit" />
      </form>
    )
  }
}

export default connect()(Register)

//Add an email input in this component.