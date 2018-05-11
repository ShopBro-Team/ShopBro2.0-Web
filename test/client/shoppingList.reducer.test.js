import shoppingList from '../../client/reducers/shoppingList'

test('ShoppingList Reducer initial state', () => {
  const expected = []
  const action = {}

  const actual = shoppingList(undefined, action)

  expect(actual).toEqual(expected)
})


test('ADD_ITEM works', () => {
    const expected = [{id: 1, name: "cat", cost: 10}]
    const item = {id: 1, name: "cat", cost: 10}
      
  
    const action = {
        type: 'ADD_ITEM',
        item
    }
  
    const actual = shoppingList(undefined, action)
  
    expect(actual).toEqual(expected)
  
  })

