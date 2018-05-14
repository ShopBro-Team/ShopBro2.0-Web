//This reducer places shopping list totals (by user id) into the redux store

function dashboardShoppingListTotals (state = [], action) {
    switch (action.type) {
      case 'RECIEVE_SHOPPINGLIST_TOTALS_BY_ID':
        return [...action.shoppinglistTotals]
      default:
        return state
    }
  }
  
  export default dashboardShoppingListTotals