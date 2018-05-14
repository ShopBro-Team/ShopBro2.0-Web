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

test ('EDIT_ITEM works like a charm', () => {
    const expected = [
      {id: 1, name: "cat", cost: 100},
      {id: 2, name: "pig", cost: 40},
      {id: 3, name: "dog", cost: 20}
    ]
    const item = {id: 1, name: "cat", cost: 100}
    
    const initialState = [
      {id: 1, name: "cat", cost: 10},
      {id: 2, name: "pig", cost: 40},
      {id: 3, name: "dog", cost: 20}
    ]
  const action = {
    type: 'EDIT_ITEM',
    item
}

const actual = shoppingList(initialState, action)

expect(actual).toEqual(expected)

})

test ('DELETE_ITEM works like a charm as well', () => {
  const expected = [
    {id: 2, name: "pig", cost: 40},
    {id: 3, name: "dog", cost: 20}
  ]

  const item_id = 1

  
  const initialState = [
    {id: 1, name: "cat", cost: 10},
    {id: 2, name: "pig", cost: 40},
    {id: 3, name: "dog", cost: 20}
  ]
  
  const action = {
  type: 'DELETE_ITEM',
  item_id
}

const actual = shoppingList(initialState, action)
expect(actual).toHaveLength(initialState.length -1)

})

test ('RESET_APP resets state', () => {
  const expected = []

  const initialState = [
    {id: 1, name: "cat", cost: 10},
    {id: 2, name: "pig", cost: 40},
    {id: 3, name: "dog", cost: 20}
  ]

  const action = {
    type: "RESET_APP"
  }

const actual = shoppingList(initialState, action)
expect(actual).toEqual(expected)

})

test ('LOGOUT_SUCCESS resets state', () => {
  const expected = []

  const initialState = [
    {id: 1, name: "cat", cost: 10},
    {id: 2, name: "pig", cost: 40},
    {id: 3, name: "dog", cost: 20}
  ]

  const action = {
      type: 'LOGOUT_SUCCESS',
      isFetching: false,
      isAuthenticated: false
  }

const actual = shoppingList(initialState, action)
expect(actual).toEqual(expected)

})




