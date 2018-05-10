import {combineReducers} from 'redux'

import auth from './auth'
import budgetView from './budget-View'
import shoppingList from './shoppingList'


export default combineReducers({
  auth,
  budgetView,
  shoppingList
})
