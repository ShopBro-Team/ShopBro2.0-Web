import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ShoppingListInfo from './ShoppingListInfo'



class ListOfSavings extends React.Component {




  //need to think about which reducer we're dispatching the delete action to!!! so eventually this will look like this.props.dispatch(deleteItem(item.id)) or something along these lines THINK ABOUT THIS BEFORE HITTING THE DELETE BUTTON!!!
  // remember to add this to the imports at the top
  //quick check with Harrison, no need to bind the deleteItem function as we're calling it using fat arrow function in our return
  // deleteItem(e, item) {
	// 	e.preventDefault()
	// 	this.props.dispatch()
	// }

  // renderProgressBar() {
  //   // let progress = this.props.totalSpend *100/this.props.budget
  //   let progress = 45

  //   return (<div className="columns">

  //     {progress < 50 ? (
  //     <div className="column is-four-fifths">
  //     <progress className="progress is-normal is-warning" value={progress} max="100">25%</progress> 
  //     </div>):
  //     ( <div className="column is-four-fifths"><progress className="progress is-normal is-info" value={progress} max="100">25%</progress>
  //     </div> )
  //     }   
  //     </div>)
  // }

  render() {
    return (
      <div>
        <h1>All the shopping history of savings will be here oooooh</h1>
        {console.log(this.props)}
        {this.props.dashboardShoppingLists.map(item => {
          return (
            <div>
              <br/>
              <p>Budget: {item.budget_in_cents}</p>
              <br/>
              <p>Total Savings: {item.total_savings_in_cents}</p>
              <br/>
              <p>Date: {item.date}</p>
              <br/><hr/>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    budget: state.budget,
    totalSpend: state.totalSpend,
    shoppingList: state.shoppingList,
    dashboardShoppingListById: state.dashboardShoppingListById,
    dashboardShoppingLists: state.dashboardShoppingLists
  }
}

export default connect(mapStateToProps)(ListOfSavings)



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