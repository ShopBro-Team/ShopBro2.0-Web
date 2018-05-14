import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ShoppingListInfo from './ShoppingListInfo'
import {deleteShoppingListById} from '../../actions/dashboard'
import { getShoppingListById } from '../../actions/dashboard'




class SavingsProgressBars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    // this.renderProgressBar = this.renderProgressBar.bind(this)
    // Harrison says we don't need to bind this as we are using the =>. We should do this throughout our code. Wednesday refactor.
  }

  deleteItem(e, item) {
		e.preventDefault()
		this.props.dispatch(deleteShoppingListById(item.id))
  }

  
  reverseString(str) {
    var array = []
    array = str.split("-")
    array.reverse()
    str = array.join('.')
    return str
}



  renderProgressBar() {
    const {item} = this.props
    let totalSpend = item.budget_in_cents - item.total_savings_in_cents
    let progress = totalSpend*100/item.budget_in_cents


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
    let date = item.date.slice(0,10)
    let newDate = this.reverseString(date)
    
    return (
      <div>
          <div>
            <Link to='/shoppinglistinfo/'><button className="button is-medium is-warning is-outlined is-mobile" onClick={() => this.props.dispatch(getShoppingListById(item.id))}>{newDate}</button></Link>
            <br/>
            <br/>
            <br/>
            {this.renderProgressBar()}
            <br/>
            <p>Total Savings: ${item.total_savings_in_cents/100}</p>
            <br/>
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

