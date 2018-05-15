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
      <div className="column">
      {console.log (this.props.auth)}
        <form className="Login container" onSubmit={this.submit}>
          <label className="is-size-2">Username:
        <input className="input is-medium has-text-centered" type="text" name="user_name" onChange={this.updateDetails}/>
          </label>
            <br/>
          <label className="is-size-2">Password:
        <input className="input is-medium has-text-centered" type="password" name="password" onChange={this.updateDetails}/>
          </label><br/>
        {this.props.auth.errorMessage && <p>User password is incorrect, please try again</p>}    
      <div className="buttons is-centered">
      <input className="button is-success is-large" type="submit" /><a className="button is-light is-large"><Link to= '/register'>Register</Link></a>
      
      </div>
    </form>
  </div>  
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      auth: state.auth
      }
  }
  
export default connect(mapStateToProps)(Login)  

