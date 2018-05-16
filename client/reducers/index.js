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

//This is the main reducers/ the boss of reducer that talks to other reducers 
//Moreover, The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore. 
