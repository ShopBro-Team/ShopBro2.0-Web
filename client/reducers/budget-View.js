export const NAVIGATE = 'NAVIGATE'

const budgetView = (state = 'setting', action) => {
  switch (action.type) {
    case NAVIGATE:
      return action.destination
    case 'RESET_APP':  
      return 'setting'
    default:
      return state
  }
}

export default budgetView

//This navigate reducers, will explain the function of 'NAVIGATION'. 
//which will be pass/link to the navigate.js(actions) that will be doing reset the budget in our BudgetSetting.jsx Component 