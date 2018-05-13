const env = require('./test-environment')
const usersDb = require('../../server/db/users')

// Manage the test database

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

jest.mock('../../server/auth/hash', () => ({
  generate: (password, cb) => cb(null, 'FakeHash')
}))

test('createUser', () => {
  return usersDb.createUser('engie', 'engie@this.com', testDb)
    .then(id => {
      expect(id).toEqual([2])
    })
})

test('createUser db error', () => {
    return usersDb.createUser('Steve', 'steve@steve.com', 'steveisbest', testDb)
      .then(actual => expect(actual).toBeFalsy())
      .catch(err => expect(err).toBeTruthy())
  })

test('userExists (false)', () => {
return usersDb.userExists('Steve', testDb)
    .then(actual => expect(actual).toBe(false))
    .catch(err => expect(err).toBeFalsy())
})