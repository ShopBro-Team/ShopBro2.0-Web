var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var passport = require('passport')

var server = express()

server.use(cors('*'))

server.use(passport.initialize())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/auth', require('./routes/auth'))
server.use('/api/v1/shoppinglists', require('./routes/shoppinglists'))
server.use('/api/v1/shoppingliststotals', require('./routes/shoppingliststotals'))

module.exports = server
