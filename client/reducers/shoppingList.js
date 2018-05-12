function shoppingList (state = [], action) {
	switch (action.type) {
		case 'ADD_ITEM':
			return [...state, action.item]
		case 'EDIT_ITEM':
			let newState = state.map(item => {
				if(item.id == action.item.id) {
					return action.item
				} else {
					return item
				}
			})
			return [...newState]
		case 'DELETE_ITEM':
			let newerState = state.filter(item => {
				return item.id !== action.item_id 
				})
			return[...newerState]
		default:
			return state
	}
}

export default shoppingList