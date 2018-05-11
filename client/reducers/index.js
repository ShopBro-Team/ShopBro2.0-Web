import {combineReducers} from 'redux'

import auth from './auth'
import budgetView from './budget-View'
import shoppingList from './shoppingList'
import budget from './budget'


export default combineReducers({
  auth,
  budgetView,
  shoppingList,
  budget
})
