const budget = (state = '', action) => {
  switch (action.type) {
    case 'ADD_BUDGET':
      return action.budget
    default:
      return state
  }
}

export default budget