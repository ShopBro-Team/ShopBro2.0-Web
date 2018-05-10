function shoppingList (state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return[...state, action.item]
        default:
            return state
    }
}

export default shoppingList