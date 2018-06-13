
//TO DO : No capital L in the 'shoppinglist' variable names.
//NOTE : The knex database is not called in this module. It is called in the route.

//Insert shopping list
function addShoppinglist (shoppinglist, db) {
  return db('shoppinglists')
    .insert(shoppinglist)
}

//Get all shopping lists by user id
function getShoppinglistsbyUserId (user_id, db) {
  return db('shoppinglists')
    .select() 
    .where('user_id', user_id)
    .orderBy('id', 'desc') 
}    

//Get a shopping list
function getShoppinglistbyId(id, db) {
  return db('shoppinglists')
    .select()
    .where('id', id)
} 

//Delete a shopping list
function deleteShoppinglistById(id, db) {
  return db('shoppinglists')
    .select()
    .where('id', id)
    .delete()
} 

//Get shopping list totals by user id. Uses raw SQL statements.  
function getTotalsByUserId (user_id, db) {
  return db('shoppinglists')
    .select('user_id', db.raw("SUM(total_savings_in_cents) as totalsavings"),
      db.raw("SUM(budget_in_cents) as totalbudget"))
    .where('user_id', user_id)
    .groupByRaw('user_id')     
}

function deleteShoppinglistsWhenDeletingUserAccount (user_id, db) {
  return db('shoppinglists')
    .where('user_id', user_id)
    .delete()
}

//Need to use ES2015 module exports as 'requiring in' in the routes file  
module.exports = {
  addShoppinglist,
  getShoppinglistsbyUserId,
  getShoppinglistbyId,
  deleteShoppinglistById,
  getTotalsByUserId,
  deleteShoppinglistsWhenDeletingUserAccount
}
