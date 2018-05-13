const testEnv = require('./test-environment')
const db = require('../../server/db/shoppinglists')


let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('addShoppinglist adds a shoppinglist', () => {
  //Arrange
  const newShoppinglist = [{user_id: 1, budget_in_cents: 100, total_savings_in_cents: 10}]
  const expected = 1
  //Act - need to use return when testing with Promises
  return db.addShoppinglist(newShoppinglist, testDb)
    .then(addedShoppinglist => {
      // console.log("addedShoppinglist", addedShoppinglist)
      const actual = addedShoppinglist.length
      //Assert
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('addShoppinglist adds a shoppinglist', () => {
  //Arrange
  const newShoppinglist = [{user_id: 1, budget_in_cents: 100, total_savings_in_cents: 10}]
  const expected = 1
  //Act - need to use return when testing with Promises
  return db.addShoppinglist(newShoppinglist, testDb)
    .then(addedShoppinglist => {
      // console.log("addedShoppinglist", addedShoppinglist)
      const actual = addedShoppinglist.length
      //Assert
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
