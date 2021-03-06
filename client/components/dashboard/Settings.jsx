import React from 'react'
import {Link} from 'react-router-dom'
import {logoutUser} from '../../actions/logout'
import {deleteUserAccountById} from '../../actions/deleteUser'
import {deleteDeletedUsersShoppinglists} from '../../actions/shoppinglist'
import {connect} from 'react-redux'

class Settings extends React.Component {

  deleteUserAccount(e) {
    e.preventDefault()
    this.props.dispatch(deleteUserAccountById())
    this.props.dispatch(deleteDeletedUsersShoppinglists())
  }
  render() {
    let userId = this.props.auth.user.user_id

    return (
    <div>        
      <h1 className= "title is-4 has-text-warning has-text-weight-bold">Settings</h1>

      <p className= "level-item is-5 has-text-warning has-text-weight-medium">Delete your account</p>
      {/* ShopBro Team please leave line in here, will be used in future <input className="input is-normal has-text-centered" type="text" name="name" placeholder="Enter your password" /> */}
      <div className="buttons has-addons is-centered">
        <button onClick={(e) => this.deleteUserAccount(e)} className="button is-success has-text-warning"><Link to='/'>Yes</Link></button>
      </div>
      {/* ShopBro Team please leave line in here, will be used in future. Create an alert to confirm that user wants to delete account */}

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
