import request from 'superagent'
import {saveUserToken} from '../utils/auth'
import {receiveLogin} from './login'

// Annika working on deleting user account, might not need this after all
//deletes an existing item from redux state (through our shoppinglist reducer, hence item_id)
export function deleteAccount (user_id) {
  return {
    type: 'DELETE_ACCOUNT',
    item_id
  }
}


// Dispatched in the deleteUserAccount() function in Settings.jsx. Seletes the User from both store and database

export function deleteUserAccountById (user_id) {
  return (dispatch) => {
    console.log("Made it here ", id)
    return request('delete', `auth/${user_id}`)
      .then (res => {
        dispatch(deleteAccount(id))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
    }
}


export function registerUserRequest ({user_name, user_email, password}) {
  global.window.localStorage.setItem('fun', 'times')
  return (dispatch) => {
    request
      .post('/api/auth/register')
      .send({
        user_name, user_email, password
      })
      .end((err, res) => {
        if (err) {
          alert("didn't work")
          console.log({err});
        }
        else {
          const userInfo = saveUserToken(res.body.token)
          dispatch(receiveLogin(userInfo))
          document.location = "/#/"
        }
      })
  }
}


