import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class ShoppingListInfo extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Username? from ShoppingListInfo</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    auth: state.auth,
    budget: state.budget,
    totalSpend: state.totalSpend,
    shoppingList: state.shoppingList,
    dashboardShoppingListById: state.dashboardShoppingListById
  }
}


export default connect(mapStateToProps)(ShoppingListInfo) 