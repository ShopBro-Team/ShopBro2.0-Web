import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


function capitalizeFirstLetter(data) {
  return data.charAt(0).toUpperCase() + data.slice(1);
}

// class ShoppingListInfo extends React.Component {
  function ShoppingListInfo (props) {

  let userName = props.auth.user.user_name



  console.log ("Check me ,", props.dashboardShoppingListById)


  // render() {
    return (


      <div>
        <h1>Hello {capitalizeFirstLetter(userName)}? this is your shoppinglist for DATE</h1>
        <p>TOTAL BUDGET - TOTA SPEND - TOTAL SAVINGS</p>
        <p>Date: {props.dashboardShoppingListById.length > 0 && props.dashboardShoppingListById[0].date}</p>
        <p>map over items of this shoppinglist and spit out</p>
      </div>
    )
  }
// }

const mapStateToProps = (state) => {
  console.log (state)
  return {
    auth: state.auth,
    // budget: state.budget,
    // totalSpend: state.totalSpend,
    shoppingList: state.shoppingList,
    dashboardShoppingListById: state.dashboardShoppingListById
  }
}


export default connect(mapStateToProps)(ShoppingListInfo) 


// Need mapping for shoppinglist.item
// this.shoppingList.