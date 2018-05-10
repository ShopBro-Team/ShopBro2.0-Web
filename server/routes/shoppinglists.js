var router = require('express').Router()

var db = require('../db/shoppinglists')

router.post('/',(req,res)=>{
    let newShoppinglist = {
      //SHOULD BE 'user_id':req.user don't need to pass as user id captured in auth
      'user_id':req.body.user_id,
      'budget_in_cents':req.body.budget_in_cents,
      'total_savings_in_cents':req.body.total_savings_in_cents,
      'date':req.body.date,
      'items':JSON.stringify(req.body.items)
    }
    console.log('postroute',req.user)
    db.addShoppinglist(newShoppinglist, req.app.get('db'))
    .then(res =>{
      //You get back the id of the new shopping list - just ised for debugging  
      return res.json(res)
    })
    .catch(err => res.status(500).send({message: "Server Error"}))
  })
  
  module.exports = router