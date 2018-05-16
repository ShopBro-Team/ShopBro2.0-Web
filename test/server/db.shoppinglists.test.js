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

test('get shopping list by id', () => {
  //Arrange
  const expected_budget = 3000
  const expected_saving = 200
  const test_id = 1
  //Act - need to use return when testing with Promises
  return db.getShoppinglistbyId(test_id, testDb)
    .then(shoppinglist => {
      const actual_budget = shoppinglist[0].budget_in_cents
      const actual_saving = shoppinglist[0].total_savings_in_cents
      //Assert
      expect(actual_budget).toBe(expected_budget)
      expect(actual_saving).toBe(expected_saving)
    })
    .catch(err => expect(err).toBeNull())
})

test('get shopping list by user id', () => {
  //Arrange
  const expected_shoppinglists = 6
  const expected_budget_first_list = 10000
  const test_user_id = 55
  //Act - need to use return when testing with Promises
  return db.getShoppinglistsbyUserId(test_user_id, testDb)
    .then(shoppinglists => {
      
      const actual_shoppinglists = shoppinglists.length
      const actual_budget_first_list = shoppinglists[0].budget_in_cents

      //Assert
      expect(actual_shoppinglists).toBe(expected_shoppinglists)
      expect(actual_budget_first_list ).toBe(expected_budget_first_list)
    })
    .catch(err => expect(err).toBeNull())
})

test('delete shopping list by user id', () => {
  //Arrange
  const expected = 1
  const test_id = 2
  //Act - need to use return when testing with Promises
  return db.deleteShoppinglistById(test_id, testDb)
    .then(res => {
      //res is the number of rows deleted
      const actual = res

      //Assert
      expect(actual).toBe(expected)

      db.getShoppinglistbyId(1, testDb)

    })
    .catch(err => expect(err).toBeNull())
})

test('get shopping list totals by user id', () => {
  //Arrange
  const expected_savings_total = 9500
  const expected_budget_total = 27000
  const test_user_id = 55
  //Act - need to use return when testing with Promises
  return db.getTotalsByUserId(test_user_id, testDb)
    .then(totals => {

      console.log(totals)
      
      const actual_savings_total = totals[0].totalsavings
      const actual_budget_total = totals[0].totalbudget

      //Assert
      expect(actual_savings_total).toBe(expected_savings_total)
      expect(actual_budget_total ).toBe(expected_budget_total)
    })
    .catch(err => expect(err).toBeNull())
})