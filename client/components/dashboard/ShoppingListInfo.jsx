import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getShoppingListById } from '../../actions/dashboard'

import {logoutUser} from '../../actions/logout'

function capitalizeFirstLetter(data) {
  return data.charAt(0).toUpperCase() + data.slice(1);
}

//This component displays an historic shopping list as selected in the dashboard

class ShoppingListInfo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userName : props.auth.user.user_name,
    }
    this.reverseString = this.reverseString.bind(this)
  }

  //This function formats the date string  
  reverseString(str) {
    var array = []
    array = str.split("-")
    array.reverse()
    str = array.join('.')
    return str
    }


  render() {

    return (
      <div>
        <div className="buttons is-centered">
          <button className="is-pulled-right button is-small is-dark" onClick={() => this.props.dispatch(logoutUser())}>Logout</button>
        </div>
         
            <div className="container has-background-success">
             <br/>
              <p className = "is-size-6 has-text-weight-bold">Kia ora ano {capitalizeFirstLetter(this.state.userName)}!</p> 
              <p>This is your shoppinglist for {this.props.dashboardShoppingListById.length > 0 && this.reverseString(this.props.dashboardShoppingListById[0].date.slice(0,10))}</p>
              <p className = "is-size-6 ">Total Budget: ${this.props.dashboardShoppingListById.length > 0 && 
                (this.props.dashboardShoppingListById[0].budget_in_cents/100).toFixed(2)}</p>
              <p className = "is-size-6 ">Total Savings: ${this.props.dashboardShoppingListById.length > 0 && 
                (this.props.dashboardShoppingListById[0].total_savings_in_cents/100).toFixed(2)}</p>
              {/* Above is a life cycle and it is async so what it means is that if props.dashboard... is true it will wait and render */}
             <br/>
            </div>
         

          <div className = "container is-centered">
          <br/>
              <table className="table is-fullwidth is-text-5 is-centered">
                <thead>
                  <tr className="table-row-active-background-color">
                    <th className="has-text-6 has-text-left">Item</th>
                    <th className="has-text-6 has-text-left">#</th>
                    <th className="has-text-6 has-text-left">Cost/item</th>
                    <th className="has-text-6 has-text-left">Totalcost</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map over all items in historic shopping list */}
                  { this.props.dashboardShoppingListById.length > 0 && this.props.dashboardShoppingListById[0].items.map(item => {
                  return (
                    <tr key={item.id}>
                    {/* <div className="is-text-6" key={item.id}> */}
                      <td className="has-text-6 has-text-left">{capitalizeFirstLetter(item.name)}</td>
                      <td className="has-text-6 has-text-left">{item.quantity}</td>
                      <td className="has-text-6 has-text-left">$ {(item.unit_cost_in_cents/100).toFixed(2)}</td>
                      <td className="has-text-6 has-text-left">$ {(item.total_cost_in_cents/100).toFixed(2)}</td>
                    </tr>
                      )
                    })
                  }
                </tbody>    
              </table>    
             <hr/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log ('Info_state', state)
  return {
    auth: state.auth,
    shoppingList: state.shoppingList,
    dashboardShoppingListById: state.dashboardShoppingListById
  }
}


export default connect(mapStateToProps)(ShoppingListInfo) 
