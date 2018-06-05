import { isAuthenticated, getUserTokenInfo, removeUser } from '../utils/auth'

const initialState = {
  isFetching: false,
  isAuthenticated: isAuthenticated(),
  user: getUserTokenInfo(),
  errorMessage: ''
}
//Those initialState above are the one that will be send to the action.
// So the component of Login and register can use these. 
// Moreover, the above initial component's function will be stated below

export default function auth (state = initialState, action) {
//This function is dealing with authentication for both login and register
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        user: null
      }
    case 'REGISTER_REQUEST':
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        errorMessage: ''
      }
    case 'REGISTER_FAILURE':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case 'DELETE_ACCOUNT' :
      return { 
        user: removeUser() 
      }
    default:
      return state
  }
}
