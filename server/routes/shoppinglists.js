var router = require('express').Router()
var {decode} = require('../auth/token')

var db = require('../db/shoppinglists')

router.post('/', decode, (req,res)=>{
    let newShoppinglist = {
      //SHOULD BE 'user_id':req.user don't need to pass as user id captured in auth
      //Also need decode - see Harrisons routes/spells Raidleader
      'user_id':req.user.user_id,
      'budget_in_cents':req.body.budget_in_cents,
      'total_savings_in_cents':req.body.total_savings_in_cents,
      'date':req.body.date,
      'items':JSON.stringify(req.body.items)
    }
    console.log('postroute',newShoppinglist)

    db.addShoppinglist(newShoppinglist, req.app.get('db'))
    .then(shop =>{
      //You get back the id of the new shopping list - just ised for debugging  
      return res.status(201).json(shop)
    })
    .catch(err => res.status(500).send({message: "Server STEVE Error"}))
  })
  
  module.exports = router