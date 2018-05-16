var router = require('express').Router()
var {decode} = require('../auth/token')

var db = require('../db/shoppinglists')

//Had to create a new route api/v1/shoppinglists/totalsavings didn't work in POSTMAN

//Get shopping list totals
router.get('/', decode, (req,res) => {
    db.getTotalsByUserId(req.user.user_id, req.app.get('db'))
      .then(totals => res.json(totals))
      .catch(err => res.status(500).send({message: "Server Error"}))
  })

module.exports = router