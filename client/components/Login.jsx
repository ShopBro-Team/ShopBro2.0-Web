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
        <form className="Login container" onSubmit={this.submit}>
          <label className="is-size-2">Username:
        <input className="input is-medium" type="text" name="user_name" onChange={this.updateDetails}/>
          </label>
            <br/>
          <label className="is-size-2">Password:
        <input className="input is-medium" type="password" name="password" onChange={this.updateDetails}/>
          </label><br/>
      <div className="buttons is-centered">
      <input className="button is-success is-large" type="submit" /><a className="button is-light is-large"><Link to= '/register'>Register</Link></a>
      </div>
    </form>
  </div>  
    )
  }
}

export default connect()(Login)





/* <div class="column">
<form className="Login container" onSubmit={this.submit}>
  <label>Username:
     <input className="input" type="text" name="user_name" onChange={this.updateDetails}/>
  </label><br/>
  <label>Password:
      <input className="input" type="password" name="password" onChange={this.updateDetails}/>
  </label><br/>
      <input className="button is-success" type="submit" /><Link to= '/register'><a className="button is-light">Register</a></Link>
</form>
</div>  */


/* <div className="field is-horizontal">
<div className="column is-two-third">
  <label className="label">Username</label>
  <label className="label">Password</label>
</div>
<div className="field-body">
  <div className="field">
    <div className="column is-one-fifth">
      <input className="input is-normal" type="text" name="user_name" placeholder="username" onChange={this.updateDetails} />
      <input className="input is-normal" type="password" name="password" placeholder="password" onChange={this.updateDetails} />
    </div>
  </div>
</div> 
</div>  */

/* <div>
<div className="columns is-mobile is-centered">
      <div className="column is-two-thirds">        
        <div className="level">
          <div className="level-item has-text-centered">
            <label className="label is-size-2">Username</label>
          </div>
          <div className="level-item has-text-centeredy">
            <div className="control">
                <input className="input is-size-2" type="text" name="user_name" placeholder="Normal sized input" onChange={this.updateDetails}/>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="columns is-mobile is-centered">
      <div className="column is-two-thirds">        
        <div className="level">
          <div className="level-item has-text-centered">
            <label className="label is-size-2">Password</label>
          </div>
          <div className="level-item has-text-centeredy">
            <div className="control">
                <input className="input is-size-2" type="password" name="password" placeholder="Normal sized input" onChange={this.updateDetails}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
     <div className="buttons is-centered" >
      <input className="button is-success is-normal" type="submit" /><Link to= '/register'>
      <a className="button is-light is-normal">Register</a></Link>
     </div>
  </div> */