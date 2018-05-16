export const NAVIGATE = 'NAVIGATE'

export const navigate = (destination) => {
  return {
    type: NAVIGATE,
    destination
  }
}

// ** Notes ** //
// action used in Budget.jsx and BudgetSettings.jsx to navigate between user setting budget and budget being available to view