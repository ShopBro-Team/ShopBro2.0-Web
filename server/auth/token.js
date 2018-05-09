var jwt = require('jsonwebtoken')
var {getUserByName} = require('../db/users')
var verifyJwt = require('express-jwt')
var {compare} = require('./hash')

function issue (req, res) {
  console.log(req.body);
  getUserByName(req.body.user_name, req.app.get('db'))
    .then(user => {
      console.log({user})
      compare(req.body.password, user.hash, (err, match) => {
        console.log({user, match});
        if (err) res.status(500).json({message: err.message})
        else if (!match) res.status(400).json({message: 'password is incorrect'})
        else {
          var token = createToken(user, process.env.JWT_SECRET)
          res.json({
            message: 'Authentication successful',
            token
          })
        }
      })
    })
    .catch(err => console.log({err}))
}

function createToken (user, secret) {
  return jwt.sign({
    user_id:user.user_id,
    user_name: user.user_name
  }, secret, {
    expiresIn: '24h'
  })
}

function getSecret(req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

function decode (req, res, next) {
  verifyJwt({secret: getSecret})(req, res, next)
}

module.exports = {
  issue,
  createToken,
  decode
}
