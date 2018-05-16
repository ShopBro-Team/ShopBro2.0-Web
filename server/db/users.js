var hash = require('../auth/hash')

function createUser (user_name, user_email, password, db) {
  return new Promise ((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err)
      db('users')
        .insert({user_name: user_name.toLowerCase(), user_email, hash}) 
        .then(user_id => resolve(user_id))
    })
    
  })
}

function userExists (user_name, db) {
  return db('users')
    .where('user_name', user_name.toLowerCase())
    .first()
    .then(user => !!user)
}

function getUserByName (user_name, db) {
  return db('users')
    .where('user_name', user_name.toLowerCase())
    .first()
}

module.exports = {
  createUser,
  userExists,
  getUserByName
}

// This is the function of user authentication. 
// createUser is when you register new account.
// userExists is for the user who already registered. This function is to check whether the user_name is exist or not
// getUserByName is to grab all the user in an array. 