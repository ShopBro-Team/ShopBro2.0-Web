import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class ShoppingListInfo extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Username? this is your shoppinglist for DATE</h1>
        <p>TOTAL BUDGET - TOTA SPEND - TOTAL SAVINGS</p>
        <p>map over items of this shoppinglist and spit out</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    auth: state.auth,
    // budget: state.budget,
    // totalSpend: state.totalSpend,
    shoppingList: state.shoppingList,
    dashboardShoppingListById: state.dashboardShoppingListById
  }
}


export default connect(mapStateToProps)(ShoppingListInfo) 