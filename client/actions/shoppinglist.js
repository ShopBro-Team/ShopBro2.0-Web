
import {saveUserToken} from '../utils/auth'

export function saveShoppingList (budget_in_cents, total_savings_in_cents, date, items) {


  //This is using utils api. Passing in type of route, route path and data
  //Will probably need a .then dispatch action. Need to know what happens
  //after shopping done  
  return (dispatch) => {
    let data =  {
        budget_in_cents, total_savings_in_cents, date, items
      } 
    request ('post', 'v1/shoppinglists', data)
  }
}
