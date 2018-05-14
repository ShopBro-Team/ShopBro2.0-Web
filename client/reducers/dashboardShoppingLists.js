//This reducer places all shopping lists for the logged in user into the redux store

function dashboardShoppingLists (state = [], action) {
  switch (action.type) {
    case 'RECIEVE_SHOPPINGLISTS':
      return [...action.shoppinglists]
    //NOTE : note sure this case is required  
    case 'DELETE_SHOPPINGLIST_BY_ID': 
      return [...state].filter(shoppinglist => shoppinglist.id != action.id)  
    default:
      return state
  }
}

export default dashboardShoppingLists