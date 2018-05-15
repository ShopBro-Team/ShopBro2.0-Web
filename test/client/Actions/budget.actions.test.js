const {addBudget} = require('../../../client/actions/budget')

test('addBudget adds to budget', () => {
  //Arrange
  const budget = 10

  const expected = {
    type: 'ADD_BUDGET',
    budget

  }

  //Act
  const actual = addBudget(budget)

  //Assert
  expect(actual).toEqual(expected)
})