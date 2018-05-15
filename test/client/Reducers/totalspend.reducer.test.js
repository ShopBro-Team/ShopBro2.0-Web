import totalSpend from '../../../ client/reducers/totalSpend'

test('TotalSpend Reducer initial state', () => {
  const expected = 0
  const action = {}

  const actual = totalSpend(undefined, action)

  expect(actual).toEqual(expected)
})

  
test('ADD_TO_TOTALSPEND works', () => {
  const expected = 20
  const cost = 10
    

  const action = {
      type: 'ADD_TO_TOTALSPEND',
      cost
  }

  const actual = totalSpend(10, action)

  expect(actual).toEqual(expected)

})

test('DELETE_FROM_TOTALSPEND works', () => {
  const expected = 40
  const cost = 10
    

  const action = {
      type: 'DELETE_FROM_TOTALSPEND',
      cost
  }

  const actual = totalSpend(50, action)

  expect(actual).toEqual(expected)

})

test ('RESET_APP resets state', () => {
  const expected = 0

  const initialState = 28.53

  const action = {
    type: "RESET_APP"
  }

const actual = totalSpend(initialState, action)
expect(actual).toEqual(expected)

})

test ('LOGOUT_SUCCESS resets state', () => {
  const expected = 0

  const initialState = 15

  const action = {
      type: 'LOGOUT_SUCCESS',
      isFetching: false,
      isAuthenticated: false
  }

const actual = totalSpend(initialState, action)
expect(actual).toEqual(expected)

})


