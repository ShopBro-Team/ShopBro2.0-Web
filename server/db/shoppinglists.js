
function addShoppinglist (shoppinglist, db) {
  return db('shoppinglists')
    .insert(shoppinglist)
  }


//Need to use ES2015 module exports as requiring in in routes file  
module.exports = {
  addShoppinglist
}
