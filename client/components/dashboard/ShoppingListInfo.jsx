import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getShoppingListById } from '../../actions/dashboard'


function capitalizeFirstLetter(data) {
  return data.charAt(0).toUpperCase() + data.slice(1);
}

class ShoppingListInfo extends React.Component {
  // function ShoppingListInfo (props) {

  constructor(props) {
    super(props)
    this.state = {
      userName : props.auth.user.user_name
    }
    // this.renderProgressBar = this.renderProgressBar.bind(this)
  }


  componentDidMount () {
    this.props.dispatch(getShoppingListById(56))
  }


  // console.log ("Check me ,", props.dashboardShoppingListById)
  // console.log ("Item this ,", props.dashboardShoppingListById.length > 0 && props.dashboardShoppingListById[0].items)
  // console.log ("cosole x", x)

  render() {
    return (


      <div>
        <h1 className = "is-size-4">Hello {capitalizeFirstLetter(this.state.userName)}, this is your shoppinglist for {this.props.dashboardShoppingListById.length > 0 && this.props.dashboardShoppingListById[0].date.slice(0,10)}</h1>
        <p className = "is-size-4">Total Budget: {this.props.dashboardShoppingListById.length > 0 && this.props.dashboardShoppingListById[0].budget_in_cents}</p>
        <p className = "is-size-4">Total Savings: {this.props.dashboardShoppingListById.length > 0 && this.props.dashboardShoppingListById[0].total_savings_in_cents}</p>
        <p className = "is-size-4">Date: {this.props.dashboardShoppingListById.length > 0 && this.props.dashboardShoppingListById[0].date.slice(0,10)}</p>
        {/* Above is a life cycle and it is async so what it means is that if props.dashboard... is true it will wait and render */}
        <div className = "is-size-4"> 

          {/* SoMETHING NOT RIGHT WITH MAP<<<<<< IT IS GETTING RIGHT DATA THOUGH......... */}
          { this.props.dashboardShoppingListById.length > 0 && this.props.dashboardShoppingListById[0].items.map(item => {
            return (
              <div key={item.id}>
              {item.name}
              &nbsp;
              {item.cost_in_cents/100}
              </div>
            )
          })
        }

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log ('Info_state', state)
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