import request from '../utils/api'

export function receiveShoppingLists(shoppinglists){
  return {
      type: 'RECIEVE_SHOPPINGLISTS',
      shoppinglists

  }
}

//Use this function to get all the shopping lists for the currently logged in user
//You must use component did mount
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

export function receiveShoppingListById(shoppinglist){
  return {
      type: 'RECIEVE_SHOPPINGLIST_BY_ID',
      shoppinglist

  }
}

//Use this function to get a shopping list by shopping list id 
//You must use component did mount
export function getShoppingListById(id) {
  return (dispatch) => {
    return request( 'get', `v1/shoppinglists/${id}` )
      .then (res => {
          dispatch(receiveShoppingListById(res.body))
      })
      .catch(err => {
          dispatch(showError(err.message))
      })
  }
}
