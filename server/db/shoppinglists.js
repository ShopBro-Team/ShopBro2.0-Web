//This function inserts an object 'shoppinglist' into the 'shoppinglists' table.
//Note : No capital L in the 'shoppinglist' or 'shoppingLists' variable name.
//Note : The knex database is not called in this module. It is called in the route.

function addShoppinglist (shoppinglist, db) {
  return db('shoppinglists')
    .insert(shoppinglist)
}

function getShoppinglistsbyUserId (user_id, db) {
  return db('shoppinglists')
    .select()
    .where('user_id', user_id)  
}    

function getShoppinglistbyId(id, db) {
  return db('shoppinglists')
    .select()
    .where('id', id)
}    

//Need to use ES2015 module exports as requiring in in routes file  
module.exports = {
  addShoppinglist,
  getShoppinglistsbyUserId,
  getShoppinglistbyId
}
