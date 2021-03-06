import budgetView from '../../../client/reducers/budget-View'

test('BudgetView Reducer initial state', () => {
  const expected = 'setting'
  const action = {}

  const actual = budgetView(undefined, action)

  expect(actual).toEqual(expected)
})

test('Navigate moves to right destination', () => {
  const expected = 'budget'
  const destination = 'budget'

  const action = {
    type: 'NAVIGATE',
    destination
  }

  const actual = budgetView('setting', action)

  expect(actual).toEqual(expected)
})

test ('RESET_APP resets state', () => {
  const expected = 'setting'

  const initialState = 'budget'

  const action = {
    type: "RESET_APP"
  }

const actual = budgetView(initialState, action)
expect(actual).toEqual(expected)

})