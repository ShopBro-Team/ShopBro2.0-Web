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
    .catch(err => res.status(500).send({message: "Server Error"}))
  })

router.get('/',decode, (req,res) => {
  db.getShoppinglistsbyUserId(req.user.user_id, req.app.get('db'))
    .then(shoppinglists => res.json(shoppinglists))
    .catch(err => res.status(500).send({message: "Server Error"}))
})  

router.get('/:id', (req,res) => {
  db.getShoppinglistbyId(req.params.id, req.app.get('db'))
    .then(shoppinglist => {
      let shoppinglist_to_send = {
        //NOTE: user_id obtained from decoded auth token. This approach
        //mimics Harrisons game. Refer to decode in token.js
        'id': shoppinglist[0].id, 
        'user_id':shoppinglist[0].user_id,
        'budget_in_cents': shoppinglist[0].budget_in_cents,
        'total_savings_in_cents':shoppinglist[0].total_savings_in_cents,
        'date':shoppinglist[0].date,
        'items':JSON.parse(shoppinglist[0].items)     
      }
      return res.json([shoppinglist_to_send])})
    .catch(err => res.status(500).send({message: "Server Error"}))
})

router.delete('/:id', (req,res) => {
  db.deleteShoppinglistById(req.params.id, req.app.get('db'))
    .then(shoppinglist => res.json(shoppinglist))
    .catch(err => res.status(500).send({message: "Server Error"}))
})
  
module.exports = router

