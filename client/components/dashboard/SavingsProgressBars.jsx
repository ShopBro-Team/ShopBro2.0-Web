import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ShoppingListInfo from './ShoppingListInfo'
import {deleteShoppingListByIdInStore} from '../../actions/dashboard'



class SavingsProgressBars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.renderProgressBar = this.renderProgressBar.bind(this)
    // this.deleteItem = this.deleteItem.bind(this)  // Harrison says we don't need to bind this as we are using the =>. We should do this throughout our code. Wednesday refactor.
  }

  deleteItem(e, item) {
		e.preventDefault()
		this.props.dispatch(deleteShoppingListByIdInStore(item.id))
	}

  renderProgressBar() {
    const {item} = this.props
    let totalSpend = item.budget_in_cents - item.total_savings_in_cents
    let progress = totalSpend*100/item.budget_in_cents

    console.log("hello?")
    console.log("budget: ", item.budget_in_cents)
    console.log("savings: ", item.total_savings_in_cents)

    return (<div className="columns">

      {progress < 50 ? (
      <div className="column is-four-fifths">
      <progress className="progress is-normal is-warning" value={progress} max="100">25%</progress> 
      </div>):
      ( <div className="column is-four-fifths"><progress className="progress is-normal is-info" value={progress} max="100">25%</progress>
      </div> )
      }   
      </div>)
  }

  render() {
    const {item} = this.props
    
    return (
      <div>
          <div>
            <Link to="/shoppinglistinfo"><button>{item.date}</button></Link>
            {this.renderProgressBar()}
            <br/>
            <p>Budget: {item.budget_in_cents}</p>
            <br/>
            <p>Total Savings: {item.total_savings_in_cents}</p>
            <br/>
            <p>Date: {item.date}</p>
            <button>
              <a className="button is-medium is-warning is-outlined is-mobile"  onClick=
              {e => this.deleteItem(e, item)} type="submit" value="edit item">
              Delete
              </a>
            </button>
            <br/><hr/>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    dashboardShoppingLists: state.dashboardShoppingLists
    
  }
}

export default connect(mapStateToProps)(SavingsProgressBars)



// render() {
//   return (
//     <div>
//       {/* this will need to become a map function to display all shopping trips for a particular user*/}
//       <Link to="/shoppinglistinfo"><button>Date</button></Link>
//       {/* Ideally this will be this.props.shoppingList.date */}
//       {this.renderProgressBar()} 
//       <p>You saved $40</p>
//       {/* <p>You saved ${this.props.budget - this.props.totalSpend}</p> */}
//       <div className="column is-one-third">
//         <button>
//           <a className="button is-medium is-primary is-outlined is-mobile" onClick=
//           {e => this.deleteItem(e, item)} type="submit" value="edit item">
//           Delete
//           </a>
//         </button>
//       </div>
//       {/* This will have onClick function that triggers delete action call */}
//     </div>
//   )
// }
// }