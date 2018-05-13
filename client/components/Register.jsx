import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register'
import validateRegister from '../utils/register'
import {Link} from 'react-router-dom'

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

    let {user_name, user_email, password, confirm_password} = this.state
    
    let checkValid = validateRegister(user_name, user_email, password, confirm_password)
    this.setState({
      messagePassword : checkValid.messagePassword,
      messageEmail : checkValid.messageEmail,
      messageUserName : checkValid.messageUserName, 
      valid : checkValid.valid   
    })
    
    console.log(checkValid, checkValid.valid)
    if (checkValid.valid) {
      this.props.dispatch(registerUserRequest({user_name, user_email, password}))
      e.target.reset()
    }
  }

  render() {
    return (
      <form className="Register container" onSubmit={this.submit}>
        <label className="is-size-2">Username:
          <input className="input is-medium has-text-centered" type="text" name="user_name" onChange={this.updateDetails}/>
        </label><br/>
        {this.state.messageUserName && <p>{this.state.messageUserName}</p>}
        <label className="is-size-2">Email:
          <input className="input is-medium has-text-centered" type="text" name="user_email" onChange={this.updateDetails}/>
        </label><br/>
        {this.state.messageEmail && <p>{this.state.messageEmail}</p>}
        <label className="is-size-2">Password:
          <input className="input is-medium has-text-centered" type="password" name="password" onChange={this.updateDetails}/>
        </label><br/>
        <label className="is-size-2">Confirm:
          <input className="input is-medium has-text-centered" type="password" name="confirm_password" onChange={this.updateDetails}/>       
        </label><br/>
        {this.state.messagePassword && <p>{this.state.messagePassword}</p>}

        <div className="buttons is-centered">
          <input className="button is-success is-large" type="submit" /><a className="button is-light is-large"><Link to= '/login'>Cancel</Link></a>
        </div>
      </form>
    )
  }
}

export default connect()(Register)

//Add an email input in this component.