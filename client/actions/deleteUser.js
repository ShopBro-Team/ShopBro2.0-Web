import request from '../utils/api'
import removeUser from '../utils/auth'

export function deleteAccount (user_id) {
  return {
    type: 'DELETE_USER',
  }
}

export function deleteUserAccountById () {
  return (dispatch) => {
    return request('delete', `auth/`)
      .then (res => {
        console.log("res ", res)
        dispatch(deleteAccount())
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

// deleteUserAccountById dispatched in Settings.jsx Gets user_id etc through request, so no need to pass any arguments.