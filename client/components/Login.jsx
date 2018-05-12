import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../actions/login'
import {Link} from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    let {user_name, password} = this.state
    this.props.dispatch(loginUser({user_name, password}))

  }
  render() {
    return (
      <div class="field is-grouped">
        <form className="Login container" onSubmit={this.submit}>
          <label>Username:
             <input className="input" type="text" name="user_name" onChange={this.updateDetails}/>
          </label><br/>
          <label>Password:
              <input className="input" type="password" name="password" onChange={this.updateDetails}/>
          </label><br/>
              <input className="button is-success" type="submit" /><Link to= '/register'><a className="button is-light">Register</a></Link>
        </form>
      </div> 
    )
  }
}

export default connect()(Login)



{/* <div class="field is-horizontal">
<div class="field-label is-normal">
  <label class="label">Username</label>
</div>
<div class="field-body">
  <div class="field">
    <div class="control">
      <input class="input" type="text" placeholder="username" />
    </div>
  </div>
 </div> 
</div> */}