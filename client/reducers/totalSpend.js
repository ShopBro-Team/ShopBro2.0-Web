const totalSpend = (state = 0, action) => {
    switch (action.type) {
      case 'ADD_TO_TOTALSPEND':
         return (parseInt(state) + parseInt(action.cost))

        // return  action.cost
      default:
        return state
    }
  }


  
  export default totalSpend

