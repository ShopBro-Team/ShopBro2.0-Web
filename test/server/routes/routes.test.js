const request = require('supertest')
// const cheerio = require('cheerio')
var JWT = require('jsonwebtoken')

var secret ='KRANG' 
process.env.JWT_SECRET = secret
// process.env.NODE_ENV = 'test'

jest.mock('../../../server/db/shoppinglists', () => ({
    addShoppinglist: () => Promise.resolve([
        {id: 1, name:'harrison'}
    ])
}))

// const server = require('../../client/components/App')
const server = require('../../../server/server')



test('tests are working', () => {
    expect(true).toBe(true)
})

test('POST /v1/shoppinglist works', () => {
    var token = JWT.sign({ id:1,"name":"Harrison" }, secret);
    const headers = {
        Accept: 'application/json',
        Authorization: "Bearer "+token
  }
  return request(server)
    .post('/api/v1/shoppinglists')
    .expect(201)
    .set(headers)
    .then(res => {
        expect(res.body.length).toBeGreaterThan(0)
    })
    .catch((err, res) => {
        expect(err).toBeFalsy()
    })
})


