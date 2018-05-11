const totalSpend = (state = 0, action) => {
    switch (action.type) {
      case 'ADD_TO_TOTALSPEND':
         return (parseInt(state) + parseInt(action.cost))
        case 'DELETE_FROM_TOTALSPEND':
            return (parseInt(state) - parseInt(action.cost))
      default:
        return state
    }
  }


  
  export default totalSpend

