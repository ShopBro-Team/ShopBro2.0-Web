const {navigate} = require('../../../client/actions/navigate')

test('navigate changes from  to settings to budget', () => {
  //Arrange
  const destination = 'budget'

  const expected = {
    type: 'NAVIGATE',
    destination
  }

  //Act
  const actual = navigate(destination)

  //Assert
  expect(actual).toEqual(expected)
})