import {combineReducers} from 'redux'

import auth from './auth'
import budgetView from './budget-View'
import budget from './budget'


export default combineReducers({
  auth,
  budgetView,
  budget
})
