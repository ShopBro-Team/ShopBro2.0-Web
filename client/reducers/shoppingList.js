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

        case 'DELETE_ITEM':
        console.log(action.item_id)
            let newerState = state.filter(item => {
                // console.log(state.filter)
                    return item.id !== action.item_id 
            })
            console.log(newerState, 'hey')
            return[...newerState]
       
        default:
            return state
    }
}


export default shoppingList