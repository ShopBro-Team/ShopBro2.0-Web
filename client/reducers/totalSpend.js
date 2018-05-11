const totalSpend = (state = 0, action) => {
    switch (action.type) {
      case 'ADD_TO_TOTALSPEND':
         return (parseInt(state) + parseInt(action.cost))
        case 'DELETE_FROM_TOTALSPEND':
            return (parseInt(state) - parseInt(action.cost))
        // case 'EDIT_TOTALSPEND':
        //     let newState = state.map(item => {
        //         //console.log(item)
        //         if(item.id == action.item.id) {
        //             //console.log('Hello', action.item)
        //             return action.item
        //         } else {
        //             return item
        //         }
        //     })
        //     //console.log('reducer',newState)
        //     return [...newState]
        //         return //Rosie and Annika work in progress
      default:
        return state
    }
  }

  export default totalSpend


