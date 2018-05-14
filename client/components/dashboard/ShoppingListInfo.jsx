import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getShoppingListById } from '../../actions/dashboard'


function capitalizeFirstLetter(data) {
  return data.charAt(0).toUpperCase() + data.slice(1);
}

class ShoppingListInfo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userName : props.auth.user.user_name,
    }
    this.reverseString = this.reverseString.bind(this)
  }

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
        <h1 className = "is-size-4">Hello {capitalizeFirstLetter(this.state.userName)}, this is your shoppinglist for {this.props.dashboardShoppingListById.length > 0 && this.reverseString(this.props.dashboardShoppingListById[0].date.slice(0,10))}</h1>
        <p className = "is-size-4">Total Budget: ${this.props.dashboardShoppingListById.length > 0 && this.props.dashboardShoppingListById[0].budget_in_cents/100}</p>
        <p className = "is-size-4">Total Savings: ${this.props.dashboardShoppingListById.length > 0 && this.props.dashboardShoppingListById[0].total_savings_in_cents/100}</p>
        {/* Above is a life cycle and it is async so what it means is that if props.dashboard... is true it will wait and render */}
        <hr/>
        <p className = "is-size-4">Shopping Items: </p>
        <hr/>
        <div className = "is-size-4"> 
          { this.props.dashboardShoppingListById.length > 0 && this.props.dashboardShoppingListById[0].items.map(item => {
            return (
              <div key={item.id}>
              {capitalizeFirstLetter(item.name)}
              : &nbsp;$
              {item.cost_in_cents/100}
              </div>
            )
          })
        }
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
