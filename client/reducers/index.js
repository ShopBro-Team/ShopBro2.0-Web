import {combineReducers} from 'redux'

import auth from './auth'
import budgetView from './budget-View'
import shoppingList from './shoppingList'
import budget from './budget'
import totalSpend from './totalSpend'
import dashboardShoppingLists from './dashboardShoppingLists'
import dashboardShoppingListById from './dashboardShoppingListById'
import dashboardShoppingListTotals from './dashboardShoppingListTotals'

export default combineReducers({
  auth,
  budgetView,
  shoppingList,
  budget,
  totalSpend,
  dashboardShoppingLists,
  dashboardShoppingListById,
  dashboardShoppingListTotals
})
