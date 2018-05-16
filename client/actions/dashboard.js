// ** Notes ** //
// all actions associated with the dashboard components

// Importing the request functionality from the api.js that enables us to check auth with all our requests
import request from '../utils/api' 

// Dispatched when getting all shopping list data - see dispatch in getShoppingLists() - and used to update dashboardShoppingList.js state
export function receiveShoppingLists(shoppinglists){
  return {
      type: 'RECIEVE_SHOPPINGLISTS',
      shoppinglists

  }
}

// Get all the shopping lists for the currently logged in user
// ** MUST use componentDidMount() in the component (Dashboard.jsx)
export function getShoppingLists() {
  return (dispatch) => {
    return request( 'get', 'v1/shoppinglists' )
      .then (res => {
        dispatch(receiveShoppingLists(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

// Dispatched when getting data for a specific shopping list (search by Id) - see dispatch in getShoppingListById() - and used to update dashboardShoppingListById.js state.
export function receiveShoppingListById(shoppinglist){
  return {
      type: 'RECIEVE_SHOPPINGLIST_BY_ID',
      shoppinglist

  }
}

// Use this function to get shopping list data by shopping id for the user currently signed in
export function getShoppingListById(id) {
  return (dispatch) => {
    return request( 'get', `v1/shoppinglists/${id}` )
      .then (res => {
          console.log('ACTION',res.body)
          dispatch(receiveShoppingListById(res.body))
      })
      .catch(err => {
          dispatch(showError(err.message))
      })
  }
}

// Dispatched in the deleteShoppingListById() below and deletes the specific shopping list in store for the user currently signed in
export function deleteShoppingListByIdInStore (id) {
  return {
    type: 'DELETE_SHOPPINGLIST_BY_ID',
    id
  }
}

// Dispatched in the deleteItem() function in the SavingsProgressBar.jsx and deletes the shopping list from both store and database
// Also dispatches getSHoppingListTotals() once shopping list deleted, so that total savings is updated.
export function deleteShoppingListById (id) {
  return (dispatch) => {
    return request('delete', `v1/shoppinglists/${id}`)
      .then (res => {
        dispatch(deleteShoppingListByIdInStore(id))
        dispatch(getShoppingListTotals())
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
    }
}

export function receiveShoppingListTotals(shoppinglistTotals){
    return {
        type: 'RECIEVE_SHOPPINGLIST_TOTALS_BY_ID',
        shoppinglistTotals
  
    }
  }
  
  //Use this function to get a shopping list by shopping list id 
  //You must use component did mount
  export function getShoppingListTotals() {
    console.log('action totals')  
    return (dispatch) => {
      return request( 'get', 'v1/shoppingliststotals' )
        .then (res => {
            dispatch(receiveShoppingListTotals(res.body))
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
  }
