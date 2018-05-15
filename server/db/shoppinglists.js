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
    .orderBy('id', 'desc') 
}    

function getShoppinglistbyId(id, db) {
  return db('shoppinglists')
    .select()
    .where('id', id)
} 

function deleteShoppinglistById(id, db) {
  return db('shoppinglists')
    .select()
    .where('id', id)
    .delete()
} 

function getTotalsByUserId (user_id, db) {
  return db('shoppinglists')
    .select('user_id', db.raw("SUM(total_savings_in_cents) as totalsavings"),
      db.raw("SUM(budget_in_cents) as totalbudget"))
    .where('user_id', user_id)
    .groupByRaw('user_id')     
}

//Need to use ES2015 module exports as requiring in in routes file  
module.exports = {
  addShoppinglist,
  getShoppinglistsbyUserId,
  getShoppinglistbyId,
  deleteShoppinglistById,
  getTotalsByUserId
}
