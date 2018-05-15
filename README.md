# ShopBro-2.0
Its ShopBro 2.0

#User Stories

##MVP:
- [ ] 1. As a user, I want to register an account
- [ ] 2. As a user, I want to be able to login and logout
- [ ] 3. As a user, I want to be able to set a budget
- [ ] 4. As a user, I want to be able to create a list
- [ ] 5. As a user, I want to be able to add and delete items on the shopping list
- [ ] 6. As a user, I want to be able to add the price while I am shopping
- [ ] 7. As a user I want to be able to update an item on the list
- [ ] 8. As a user I wnat to be able to see a running total of the remaining budget (e.g. progress bar or total remaining budget)
- [ ] 9. I want to say I've finished shopping (and celebrate when I've made a saving)
- [ ] 10. As ShopBro 2.0 I want to alert a user they have spent over their budget
- [ ] 11. As ShopBro 2.0, if any items are above the overall budget, raise an 'are you sure' alert


##Stretch
1. Convert to React-Native!!
2. As a user I want to save my shopping list once it is done
3. As a user I want to see a dashboard shoing past shopping activities

##STRETCH MVP:
- [ ] 1. As a dev team, we will define our API & Routes
- [ ] 2. As a user, I want to see a footer on every page that links me to the dashboard, main and settings
- [ ] 3. As a user, the first thing I want to see is my total savings on my dashboard
- [ ] 4. As a user, I want to see each shop I have done listed on dashboard with a progress bar highlight how much I saved during that shop. 
- [ ] 5. I also want to be able to delete all data for each shopping instance from the dashboard.
- [ ] 6. I want to view the details of my shopping list from dashboard when I click on the date


##Errors we have come across and how to fix them:

1. Authy error (it wasn't showing user_email address):
Fix: Needed to run 'sudo killall node', this cleared the server and made the connection fresh that it worked.

2. Pulling down master
Fix: Run yarn and Rollback twice because we have 2 migrated tables

3. 


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
      {id: 1, name: “bread”,  cost_in_cents: 10}, //again integer not string
      {id: 2, name: “milk”, cost_in_cents: 10},
      {id: 3, name: “butter”, cost_in_cents: 10},
      {id: 4, name: “beer”, cost_in_cents: 10},}
      ]  } //remember to stringify/json parse

res STATUS 500
  {
  "message": "Error occured.  Whoops!"
  }
```

## DB (Server Side)
  There should be two tables for MVP

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
 

## Views (Client Side)
  | Name | Purpose | Stateful(SF)/Stateless(SL) |
  | --- | --- | --- |
  | Login | Landing page for users, the view for users to enter their login credentials | SF |
  | Register | View for user to sign up for the App | SF |
  | Main ('Done'Button) | View for user when authentication is successful, it renders the following components (in order) | SF |
  | BudgetSetting | View for user to set the budget for their shop | SL |
  | Budget | View for user to see the progress bar showoing the remaining budget | SL |
  | List (Button will be rendered on Main) | View for user to create a shopping list.  To add, edit and delete cost and items to the shopping list | SL |
  | Alert | Notification to tell the user they have gone over their budeget | SL |

## Dashboard Carousel

bulma-carousel used to display historic shopping savings in the dashboard view. This is a bulma extension and once set up is pretty simple to play with. Set up was tricky though (thanks Harrison!). This looke like:

| File Updated | Detail |
| --- | --- |
| package.json | Add to dependencies: bulma-carousel, file-loader, font-awesome, url-loader   (Note: Either type into package.json and run yarn after saving. Or add via terminal directly using yarn add and this will update the package.json file.) | 
  | webpack.config.js | Add code:  `{test: "/"\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},` under `module` |
| main.scss (under client / sass folder) | Add code: `@import '~bulma-carousel/dist/bulma-carousel.sass'; @import '~font-awesome/scss/_variables.scss'; $fa-font-path: '~font-awesome/fonts'; @import '~font-awesome/scss/font-awesome.scss';` |

The bulma documentation had the code required for various types of carousels and this was then just a matter of putting it into the ListOfSavings.jsx, that was already mapping through our list of completed shops. https://wikiki.github.io/components/carousel/

Refer to ListOfSavings.jsx for actual code. The parts related to the carousel were:
- `import carojs from '../../../node_modules/bulma-carousel/dist/bulma-carousel.min.js'`
- `componentDidMount() {
    var carousels = carojs.attach(); // carousels now contains an array of all Carousel instances 
  } `
- Divs sitting outside of the map:
    `<div className='carousel carousel-animated carousel-animate-slide' data-autoplay="true">
          <div className='carousel-container'>`
- and 1x div sitting within the map:
    `<div className='carousel-item has-background is-active'>`
- Then the navigation sitting outtside of the map again: 
    `{/* bulma-carousel navigation arrows */}
          <div className="carousel-navigation is-centered">
            <div className="carousel-nav-left">
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div className="carousel-nav-right">
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
            </div>`
Any questions, ask Rosie! 

