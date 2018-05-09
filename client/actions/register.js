import request from 'superagent'
import {saveUserToken} from '../utils/auth'
import {receiveLogin} from './login'

export function registerUserRequest ({user_name, password}) {
  global.window.localStorage.setItem('fun', 'times')
  return (dispatch) => {
    request
      .post('/api/auth/register')
      .send({
        user_name, password
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
