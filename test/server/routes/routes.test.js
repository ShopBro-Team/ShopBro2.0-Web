const request = require('supertest')
// const cheerio = require('cheerio')



// const server = require('../../client/components/App')
const server = require('../../../server/server')



test('tests are working', () => {
    expect(true).toBe(true)
})

test('GET /login works', (done) => {
    request(server)
    .get('/api/auth')
    .expect(302)
    .end((err, res) => {
        expect(err).toBeFalsy()
        done()
    })
})


