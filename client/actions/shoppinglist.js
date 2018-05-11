
import request from '../utils/api'

export function saveShoppingList (budget_in_cents, total_savings_in_cents, date, items) {


  //This is using utils api. Passing in type of route, route path and data
  //Will probably need a .then dispatch action. Need to know what happens
  //after shopping done.  
  return (dispatch) => {
    let data =  {
        budget_in_cents, total_savings_in_cents, date, items
      } 
    console.log('action',data)  
    request ('post', 'v1/shoppinglists', data)
  }
}

export function addShoppingListItem (item) {
  return {
    type: 'ADD_ITEM',
    item
  }
}

export function editShoppingListItem (item) {

  return {
    type: 'EDIT_ITEM',
    item
  }
}

export function addToTotalSpend (cost) {
  return {
    type: 'ADD_TO_TOTALSPEND',
    cost
  }
}

export function deleteFromTotalSpend (cost) { 
  return {
    type: 'DELETE_FROM_TOTALSPEND',
    cost
  }
}


export function deleteShoppingListItem (item_id) {
console.log(item_id, 'ASSD')
  return {
    type: 'DELETE_ITEM',
    item_id
  }
}
