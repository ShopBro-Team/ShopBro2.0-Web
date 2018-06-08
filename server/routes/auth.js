var router = require('express').Router()
var {decode} = require('../auth/token')

var {userExists, createUser, deleteUserAccount} = require('../db/users')
var token = require('../auth/token')

router.post('/register', register, token.issue)

function register (req, res, next) {
  const {user_name, user_email, password} = req.body
  userExists(user_name, req.app.get('db'))
    .then(exists => {
      if (exists) return res.status(400).send({message: "User exists"})
      createUser(user_name , user_email, password, req.app.get('db'))
        .then(() => next())
    })
    .catch(err => res.status(500).send({message: err.message}))
}

router.post('/login', login, token.issue)
function login (req, res, next) {
  console.log(req.body)
  next()
}

router.get('/', function (req,res) {
  res.redirect('/login')
})

router.delete('/', decode, (req, res) => {
  deleteUserAccount(req.user.user_id, req.app.get('db'))
    .then(account => res.json(account))
    .catch(err => res.status(500).send({message: "Server Error"}))
})

module.exports = router
