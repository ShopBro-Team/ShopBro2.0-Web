const {addShoppingListItem, editShoppingListItem, deleteShoppingListItem, addToTotalSpend, deleteFromTotalSpend, resetApp} = require('../../../client/actions/shoppinglist')

test('addShoppingListItem adds item to list', () => {
  //Arrange
  const item = {id: 1, name: 'item1', cost_in_cents: 1000}

  const expected = {
    type: 'ADD_ITEM',
    item
  }

  //Act
  const actual = addShoppingListItem(item)

  //Assert
  expect(actual).toEqual(expected)
})

test('editShoppingListItem edits item in list', () => {
    //Arrange
    const item = {id: 1, name: 'item1', cost_in_cents: 1000}
  
    const expected = {
      type: 'EDIT_ITEM',
      item
    }
  
    //Act
    const actual = editShoppingListItem(item)
  
    //Assert
    expect(actual).toEqual(expected)
  })


  test('deleteShoppingListItem edits item in list', () => {
    //Arrange
    const item_id = {id: 1, name: 'item1', cost_in_cents: 1000}
  
    const expected = {
      type: 'DELETE_ITEM',
      item_id
    }
  
    //Act
    const actual = deleteShoppingListItem(item_id)
  
    //Assert
    expect(actual).toEqual(expected)
  })


  test('addToTotalSpend does exactly what it says', () => {
    //Arrange
    const cost = 1000
  
    const expected = {
      type: 'ADD_TO_TOTALSPEND',
      cost
    }
  
    //Act
    const actual = addToTotalSpend(cost)
  
    //Assert
    expect(actual).toEqual(expected)
  })

  test('deleteFromTotalSpend does exactly what it says', () => {
    //Arrange
    const cost = 1000
  
    const expected = {
      type: 'DELETE_FROM_TOTALSPEND',
      cost
    }
  
    //Act
    const actual = deleteFromTotalSpend(cost)
  
    //Assert
    expect(actual).toEqual(expected)
  })

  test('resetApp reset', () => {
    //Arrange
  
    const expected = {
      type: 'RESET_APP',
    }
  
    //Act
    const actual = resetApp()
  
    //Assert
    expect(actual).toEqual(expected)
  })