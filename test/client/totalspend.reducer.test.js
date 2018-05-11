import totalSpend from '../../client/reducers/totalSpend'

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


