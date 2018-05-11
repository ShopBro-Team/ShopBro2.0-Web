const testEnv = require('./test-environment')
const db = require('../../server/db/users')


let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('test usertable db', () => {
  // One for each letter of the alphabet!
  const expected = '4'
  return db.
  
})

