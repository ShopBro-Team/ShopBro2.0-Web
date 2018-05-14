//This reducer places a shopping list (identified by its id) into the redux store

function dashboardShoppingListById (state = [], action) {
    console.log('REDUCER',action.shoppinglist)
    switch (action.type) {
      case 'RECIEVE_SHOPPINGLIST_BY_ID':
        return [...action.shoppinglist] 
      default:
        return state
    }
  }
  
  export default dashboardShoppingListById