import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ShoppingListInfo from './ShoppingListInfo'
import {deleteShoppingListById} from '../../actions/dashboard'
import { getShoppingListById } from '../../actions/dashboard'

class SavingsProgressBars extends React.Component {

   // this.renderProgressBar = this.renderProgressBar.bind(this)
    // We left the above binding in as an example that we DON'T need to bind our functions when we are using the =>   in the return. Since there is no local state here we also don't need constructor(props) etc. 

  //delete function gets called in button and dispatches delete action
  deleteItem(e, item) {
		e.preventDefault()
    this.props.dispatch(deleteShoppingListById(item.id))
  }

  //reversedString used with date so it displays as 16.05.2018 instead of 2018-05-16
  reverseString(str) {
    var array = []
    array = str.split("-")
    array.reverse()
    str = array.join('.')
    return str
  }

  //renders progress bar depending on the amount spent in relation to the total budget (see progress variable), this then gets looked at in the ternary and depending on percentage dispays accordingly.
  renderProgressBar() {
    const {item} = this.props
    let progress = item.total_savings_in_cents*100/item.budget_in_cents

    return (<div className="columns">
      {progress < 50 ? (
      <div className="column is-four-fifths">
      <progress className="progress is-normal is-warning" value={progress} max="100">25%</progress> 
      </div>):
      ( <div className="column is-four-fifths"><progress className="progress is-normal is-success" value={progress} max="100">25%</progress>
      </div> )
      }   
      </div>)
  }

  render() {
    const {item} = this.props
    //date would normally also display time etc. we slice all that information off after index 10
    let date = item.date.slice(0,10)
    //newDate calls the reverseString function and passes it the sliced date
    let newDate = this.reverseString(date)
    
    return (
      <div>
          <div>
            <Link to='/shoppinglistinfo/'><button className="button is-normal is-warning is-outlined is-mobile" onClick={() => this.props.dispatch(getShoppingListById(item.id))}>{newDate}</button></Link>
            <br/>
            <br/>
            <br/>
            {this.renderProgressBar()}
            <br/>
            { item.total_savings_in_cents >= 0 
              ?
              <p>Total Savings: ${(item.total_savings_in_cents/100).toFixed(2)}</p>
              :
              <p>Total Overspend: ${(-item.total_savings_in_cents/100).toFixed(2)}</p> 
            }   
            <br/>
            <button>
              <a className="button is-normal is-light is-mobile"  onClick=
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

