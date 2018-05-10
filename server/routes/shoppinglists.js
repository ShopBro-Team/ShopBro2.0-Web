var router = require('express').Router()
var {decode} = require('../auth/token')

var db = require('../db/shoppinglists')

router.post('/', decode, (req,res)=>{
    let newShoppinglist = {
      //NOTE: user_id obtained from decoded auth token. This approach
      //mimics Harrisons game. Refer to decode in token.js
      'user_id':req.user.user_id,
      'budget_in_cents':req.body.budget_in_cents,
      'total_savings_in_cents':req.body.total_savings_in_cents,
      'date':req.body.date,
      //Need to stringify 'items' as this is passed in as a JS object consisting of an
      //array with objects. Each object is a shopping list item with an id, description 
      //and cost (see seed for example)
      'items':JSON.stringify(req.body.items)
    }

    db.addShoppinglist(newShoppinglist, req.app.get('db'))
    .then(shop =>{
      //You get back the id of the new shopping list - just used for debugging  
      return res.status(201).json(shop)
    })
    .catch(err => res.status(500).send({message: "Server STEVE Error"}))
  })
  
  module.exports = router