export const NAVIGATE = 'NAVIGATE'

const budgetView = (state = 'setting', action) => {
  switch (action.type) {
    case NAVIGATE:
      return action.destination
    default:
      return state
  }
}

export default budgetView