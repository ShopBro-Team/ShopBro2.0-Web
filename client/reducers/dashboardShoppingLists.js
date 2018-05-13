//This reducer places all shopping lists for the logged in user into the redux store

function dashboardShoppingLists (state = [], action) {
  switch (action.type) {
    case 'RECIEVE_SHOPPINGLISTS':
      return [...action.shoppinglists] 
    default:
      return state
  }
}

export default dashboardShoppingLists