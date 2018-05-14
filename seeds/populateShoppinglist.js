
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoppinglists').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoppinglists').insert([
        {user_id: 55, budget_in_cents: 3000, total_savings_in_cents: 200,
          date: new Date(), items: JSON.stringify([
            {id: 0, name: 'oil', cost_in_cents: 300},
            {id: 1, name: 'bread', cost_in_cents: 500},
            {id: 2, name: 'milk', cost_in_cents: 400},
            {id: 3, name: 'butter', cost_in_cents: 600},
            {id: 4, name: 'beer', cost_in_cents: 1000}
        ])},
        {user_id: 55, budget_in_cents: 2000, total_savings_in_cents: 500,
          date: new Date(), items: JSON.stringify([
            {id: 0, name: 'chocolate', cost_in_cents: 100},
            {id: 1, name: 'more chocolate', cost_in_cents: 200},
            {id: 2, name: 'all the chocolate', cost_in_cents: 100},
            {id: 3, name: 'milk', cost_in_cents: 100}
        ])},
        {user_id: 55, budget_in_cents: 4000, total_savings_in_cents: 1900,
          date: new Date(), items: JSON.stringify([
            {id: 0, name: 'gin', cost_in_cents: 150},
            {id: 1, name: 'water', cost_in_cents: 350},
            {id: 2, name: 'lemons', cost_in_cents: 1000},
            {id: 3, name: 'bananas', cost_in_cents: 500},
            {id: 4, name: 'oranges', cost_in_cents: 100}
        ])},
        {user_id: 55, budget_in_cents: 3000, total_savings_in_cents: 600,
          date: new Date(), items: JSON.stringify([
            {id: 1, name: 'things', cost_in_cents: 250},
            {id: 2, name: 'stuff', cost_in_cents: 350},
            {id: 3, name: 'other things', cost_in_cents: 1500},
            {id: 4, name: 'bits', cost_in_cents: 300}
        ])},
        {user_id: 55, budget_in_cents: 5000, total_savings_in_cents: 2500,
          date: new Date(), items: JSON.stringify([
            {id: 0, name: 'jumper', cost_in_cents: 400},
            {id: 1, name: 'pants', cost_in_cents: 800},
            {id: 2, name: 'shoes', cost_in_cents: 200},
            {id: 3, name: 'hat', cost_in_cents: 100},
            {id: 4, name: 'backpack', cost_in_cents: 1000}
        ])},
        {user_id: 55, budget_in_cents: 10000, total_savings_in_cents: 3800,
          date: new Date(), items: JSON.stringify([
            {id: 0, name: 'bread', cost_in_cents: 1000},
            {id: 1, name: 'bread', cost_in_cents: 2000},
            {id: 2, name: 'milk', cost_in_cents: 1500},
            {id: 3, name: 'butter', cost_in_cents: 400},
            {id: 4, name: 'bear', cost_in_cents: 1300}
        ])}
      ])
    }) 
}         