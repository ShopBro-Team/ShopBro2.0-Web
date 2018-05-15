import budget from '../../../client/reducers/budget'

test('Budget Reducer initial state', () => {
  const expected = ''
  const action = {}

  const actual = budget(undefined, action)

  expect(actual).toEqual(expected)
})

test('ADD_BUDGET works', () => {
    const expected = '500'
      
    const action = {
        type: 'ADD_BUDGET',
        budget: '500'
    }
  
    const actual = budget(undefined, action)
  
    expect(actual).toEqual(expected)
  
  })


  test('LOGOUT_SUCCESS works', () => {
    const expected = ''
      
    const action = {
        type: 'LOGOUT_SUCCESS',
        isFetching: false,
        isAuthenticated: false
    }
  
    const actual = budget(undefined, action)
  
    expect(actual).toEqual(expected)
  
  })

  test ('RESET_APP resets state', () => {
    const expected = ''
  
    const initialState = '438.20'
  
    const action = {
      type: "RESET_APP"
    }
  
  const actual = budget(initialState, action)
  expect(actual).toEqual(expected)
  
  })