function shoppingList (state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item]
        case 'EDIT_ITEM':
            console.log(action.item)
            newShoppingList = [...state]
            item = newShoppingList.find(item => id = action.item.id)
            return [...state, action.item]
        default:
            return state
    }
}


export default shoppingList