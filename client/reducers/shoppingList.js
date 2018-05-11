function shoppingList (state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item]
        case 'EDIT_ITEM':
            let newState = state.map(item => {
                //console.log(item)
                if(item.id == action.item.id) {
                    //console.log('Hello', action.item)
                    return action.item
                } else {
                    return item
                }
            })
            //console.log('reducer',newState)
            return [...newState]
        default:
            return state
    }
}


export default shoppingList