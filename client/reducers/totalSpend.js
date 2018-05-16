const totalSpend = (state = 0, action) => {
    switch (action.type) {
      case 'ADD_TO_TOTALSPEND':
        return (parseInt(state) + parseInt(action.cost))
      case 'DELETE_FROM_TOTALSPEND':
        return (parseInt(state) - parseInt(action.cost))
      case 'RESET_APP':
        return 0 
      case 'LOGOUT_SUCCESS':
        return 0   
      default:
        return state
    }
  }

  export default totalSpend

//The total reducer here is to calculate user's money to when they are adding/delete items
//Whereas Reset and Logout function is for when the user done and want to calculate their budget again /logout the list/total spend will come back to 0
