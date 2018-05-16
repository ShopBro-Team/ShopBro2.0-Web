const token = require('../../../server/auth/token')

jest.mock('express-jwt', () => (secretObj) => (req, res, next) => {
  next(secretObj)
} )

jest.mock('jsonwebtoken', () => ({
  sign: (user, secret, details) => ({
    user, secret, details
  })
}))

test('decode', (done) => {
  process.env.JWT_SECRET = 'TEST SECRET'
  const doneFunction = (actual) => {
    expect(actual.hasOwnProperty('secret')).toBeTruthy()
    done()
  }
  token.decode(null, null, doneFunction)
})


test('createToken', () => {
  const user = {
    user_id: 1,
    user_name: 'TEST USER'
  }
  const secret = 'TEST SECRET'
  const expectedDetails = {
    expiresIn: '24h'
  }
  const actual = token.createToken(user, secret)
  expect(actual).toBeTruthy()
  expect(actual).toEqual({
    user,
    secret,
    details: expectedDetails
  })
})
