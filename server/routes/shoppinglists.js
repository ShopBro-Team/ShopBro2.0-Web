var router = require('express').Router()
var {decode} = require('../auth/token')

var db = require('../db/shoppinglists')

//Saves shopping list to database
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

//Get all the shopping lists for the logged on user
router.get('/',decode, (req,res) => {
  //TO DO: Need to JSON parse items (same as getShoppinglistbyId)
  db.getShoppinglistsbyUserId(req.user.user_id, req.app.get('db'))
    .then(shoppinglists => res.json(shoppinglists))
    .catch(err => res.status(500).send({message: "Server Error"}))
})  

//Get shopping list 
router.get('/:id', (req,res) => {
  db.getShoppinglistbyId(req.params.id, req.app.get('db'))
    .then(shoppinglist => {
      let shoppinglist_to_send = {
        'id': shoppinglist[0].id, 
        'user_id':shoppinglist[0].user_id,
        'budget_in_cents': shoppinglist[0].budget_in_cents,
        'total_savings_in_cents':shoppinglist[0].total_savings_in_cents,
        'date':shoppinglist[0].date,
        //Need to convert JSON shopping list to JS object for use by app
        'items':JSON.parse(shoppinglist[0].items)     
      }
      return res.json([shoppinglist_to_send])})
    .catch(err => {console.log('catch', err)
    res.status(500).send({message: "Server Error"})})
})

//Delete shopping list
router.delete('/:id', (req,res) => {
  db.deleteShoppinglistById(req.params.id, req.app.get('db'))
    .then(shoppinglist => res.json(shoppinglist))
    .catch(err => res.status(500).send({message: "Server Error"}))
})

//This is new, deleting shoppinglists when deleting account
//Delete all shoppinglists associated with a deleted user account
// router.delete('/', decode, (req,res) => {
//   console.log("Hitting the delete route")
//   db.deleteShoppinglistsWhenDeletingUserAccount(req.params.id, req.app.get('db'))
//     .then(shoppinglist => res.json(shoppinglist))
//     .catch(err => res.status(500).send({message: "Server Error"}))
// })
  
module.exports = router

