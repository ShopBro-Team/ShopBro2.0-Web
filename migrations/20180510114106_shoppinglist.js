//Table for shopping lists. Items will contain an array of objects, where 
//each onject is a shopping item. See seeds. 

exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('shoppinglists', table => {
      table.increments('id')
      table.integer('user_id')
      table.integer('budget_in_cents')
      table.integer('total_savings_in_cents')
      table.timestamp('date')
      table.string('items')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('shoppinglists')
  };
