// ** Notes ** //
// action used in BudgetSetting.jsx, when user sets and edits budget

export const ADD_BUDGET = 'ADD_BUDGET'

export const addBudget = (budget) => {
  
  return {
    type: ADD_BUDGET,
    budget
  }
}