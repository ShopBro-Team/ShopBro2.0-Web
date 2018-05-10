import {combineReducers} from 'redux'

import auth from './auth'
import budgetView from './budget-View'


export default combineReducers({
  auth,
  budgetView
})
