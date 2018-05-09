# ShopBro-2.0
Its ShopBro 2.0

#User Stories

##MVP:
1. As a user, I want to register an account
2. As a user, I want to be able to login and logout
3. As a user, I want to be able to set a budget
4. As a user, I want to be able to create a list
5. As a user, I want to be able to add and delete items on the shopping list
6. As a user, I want to be able to add the price while I am shopping
7. As a user I want to be able to update an item on the list
8. As a user I wnat to be able to see a running total of the remaining budget (e.g. progress bar or total remaining budget)
9. I want to say I've finished shopping (and celebrate when I've made a saving)
10. As ShopBro 2.0 I want to alert a user they have spent over their budget
11. As ShopBro 2.0, if any items are above the overall budget, raise an 'are you sure' alert
12. Develop the app in vinalla React-Redux 

##Stretch
1. Convert to React-Native!!
2. As a user I want to save my shopping list once it is done
3. As a user I want to see a dashboard shoing past shopping activities

## API (Client - Server)

| Method | Endpoint                | Protected | Usage                          | Response                                            |
| ---    | ---                     | ---       | ---                            | ---                                                 |
| Post   | /api/auth/login         | Yes       | Log In a User                  | The Users JWT Token                                 |
| Post   | /api/auth/register      | Yes       | Register a User                | The Users JWT Token                                 |
| Get    | /api/v1/          | Yes       | Get a Users's name    | User name coming out of JWT Token                                |
| Post   | /api/v1/shoppinglists           | Yes       | Get the shopping event object         | The Shoppinglist that has been added in db read format   |


## Response Formats

POST `/api/auth/login`

```
res STATUS 200
{
  "message": "login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpy"
}

res STATUS 400
{
  "message": "No user found. Please try again?"
}

res STATUS 500
{
  "message": "Ah no.  We've been notified."
}
```

POST `/api/auth/register`

```
res STATUS 200
{
  "message": "registration successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpy"
}

res STATUS 400
{
  "message": "Ah, an error occured.  Did you put in valid information?"
}

res STATUS 500
  {
  "message": "Whoops, error occured."
  }
```
GET `/api/v1`

```
res STATUS 200
//Hello, this info of the user_name comes out of our token
  {
    "user_id" : user.user_id,
    "user_name": user.user_name,
    "user_email": user.user_email
  }
    
res STATUS 500
  {
  "message": "error occured.  Whoops!"
  }
```

POST `/api/v1/shoppinglists/`

```
res STATUS 200
   {
    “user_id": 1,
    “budget_in_cents”: “5000”, //make this an integer not a ‘$50’ string also remember to x100 or /100 (in component) - Steve understands
    “total_savings_in_cents”: 500 //integer not string
    "date": 04052018, //timestamp
    “items”: [
      {id: 1, name: “bread”,  cost: 10}, //again integer not string
      {id: 2, name: “milk”, cost: 10},},
      {id: 3, name: “butter”, cost: 10},},
      {id: 4, name: “beer”, cost: 10},}
      ]  } //remember to stringify/json parse

res STATUS 500
  {
  "message": "Error occured.  Whoops!"
  }
```

## DB (Server Side)
  There should be three tables for MVP

### Users
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | user_name | String |
  | email | String |


### Shoppinglist
  | Column Name | Data Type |
  | --- | --- |
  | id | Integer |
  | date | Timestamp |
  | budget_in_cents | integer |
  | total_savings_in_cents | integer |
  | items | array |
