const totalSpend = (state = 0, action) => {
    switch (action.type) {
      case 'ADD_TO_TOTALSPEND':
         return (parseInt(state) + parseInt(action.cost))
        case 'DELETE_FROM_TOTALSPEND':
            return (parseInt(state) - parseInt(action.cost))
        case 'EDIT_TOTALSPEND':
            let newState = state.map(item => {
                console.log("item, ", item)
                if(item.id == action.item.id) {
                    console.log('action.item ,', action.item)
                    console.log('action.item.cost_in_cents, ', action.item.cost_in_cents )
                    return action.item.cost_in_cents
                } else {
                    return item.cost_in_cents
                }
            })
            return [...newState]
      default:
        return state
    }
  }

  export default totalSpend


