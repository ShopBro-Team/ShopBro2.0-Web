
import request from '../utils/api'
import shoppingList from '../reducers/shoppingList';

export function saveShoppingList (budget_in_cents, total_savings_in_cents, date, items) {


  //This is using utils api. Passing in type of route, route path and data
  //Will probably need a .then dispatch action. Need to know what happens
  //after shopping done.  
  return (dispatch) => {
    let data =  {
        budget_in_cents, total_savings_in_cents, date, items
      } 
    request ('post', 'v1/shoppinglists', data)
  }
}

//adds a new item to redux state (through our shoppinglist reducer)
export function addShoppingListItem (item) {
  return {
    type: 'ADD_ITEM',
    item
  }
}

//edits an existing item (can be actual item or item's price in redux state (through our shoppinglist reducer)
export function editShoppingListItem (item) {
  return {
    type: 'EDIT_ITEM',
    item
  }
}

//deletes an existing item from redux state (through our shoppinglist reducer, hence item_id)
export function deleteShoppingListItem (item_id) {
  return {
    type: 'DELETE_ITEM',
    item_id
  }
}

//adds a new cost to our totalspend in redux store by adding the actual integer (through totalspend reducer)
export function addToTotalSpend (cost) {
  return {
    type: 'ADD_TO_TOTALSPEND',
    cost
  }
}

//deletes an existing cost from our totalspend in redux store by subtracting an integer (through totalspend reducer)
export function deleteFromTotalSpend (cost) { 
  return {
    type: 'DELETE_FROM_TOTALSPEND',
    cost
  }
}

//Use the action.type 'RESET_APP' to reset all relevant reducer states.
export function resetApp() {
  return {
    type: 'RESET_APP'
  }  
}