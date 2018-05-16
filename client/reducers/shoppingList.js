function shoppingList (state = [], action) {
	switch (action.type) {
		case 'ADD_ITEM':
			return [...state, action.item]
		case 'EDIT_ITEM':
			let editItemState = state.map(item => {
				if(item.id == action.item.id) {
					return action.item
				} else {
					return item
				}
			})
			return [...editItemState]
		case 'DELETE_ITEM':
			let deleteItemState = state.filter(item => {
				return item.id !== action.item_id 
				})
			return[...deleteItemState]
		case 'RESET_APP':
			return []
		case 'LOGOUT_SUCCESS':
		    return []			
		default:
			return state	
	}
}

export default shoppingList

//This reducer is holding the function of Add, Edit, Create and Delete(CRUD) of Shopping list
//Furthermore, RESET_APP is to reset the budget once the user is done adding the budget
//Other than that, LOGOUT_SUCCESS is to make everything become clear again once the user logout