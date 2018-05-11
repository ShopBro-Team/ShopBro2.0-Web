const budget = (state = '', action) => {
  switch (action.type) {
    case 'ADD_BUDGET':
      return action.budget
    case 'LOGOUT_SUCCESS': return ''
    default:
      return state
  }
}

//Issue#1.  When a user logged out and a new user logged in - the previous users information was showing.
//Issue#1 FIX: had to add in code on line 5 which tells local state to clear information when the user successfully logs out.
export default budget