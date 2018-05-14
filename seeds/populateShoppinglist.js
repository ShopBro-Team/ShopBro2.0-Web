
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoppinglists').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoppinglists').insert([
        {user_id: 55, budget_in_cents: 100, total_savings_in_cents: 100,
          date: new Date(), items: JSON.stringify([
            {id: 1, name: 'bread', cost_in_cents: 10},
            {id: 2, name: 'milk', cost_in_cents: 40},
            {id: 3, name: 'butter', cost_in_cents: 40},
            {id: 4, name: 'bear', cost_in_cents: 10}
        ])}
      ])
    }) 
}         