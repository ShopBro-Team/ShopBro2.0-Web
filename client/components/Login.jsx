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
      <br/>
      {console.log (this.props.auth)}
        <form className="Login container" onSubmit={this.submit}>
          <label className="is-size-4">Username:
        <input className="input is-normal has-text-centered" type="text" name="user_name" onChange={this.updateDetails}/>
          </label>
            <br/>
          <label className="is-size-4">Password:
        <input className="input is-normal has-text-centered" type="password" name="password" onChange={this.updateDetails}/>
          </label><br/>
        {this.props.auth.errorMessage && <p>User password is incorrect, please try again</p>}    
        <br/>
      <div className="buttons is-centered">
      <input className="button is-success is-normal" type="submit" /><a className="button is-light is-normal"><Link to= '/register'>Register</Link></a>
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

//collecting user data through form and saving this to local state until all information collected, then dispatching loginUser with the information from state which writes it to redux store

