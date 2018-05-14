import React from 'react'
import {Link} from 'react-router-dom'
import TotalSavings from './TotalSavings'
import ListOfSavings from './ListOfSavings'
import {connect} from 'react-redux'

import { getShoppingListById, getShoppingLists, getShoppingListTotals} from '../../actions/dashboard'

class Dashboard extends React.Component {

    componentDidMount() {
      this.props.dispatch(getShoppingLists())
      // this.props.dispatch(getShoppingListById())
      this.props.dispatch(getShoppingListTotals())
    }

  render() {
    return (
      <div> 
        <TotalSavings totals={this.props.dashboardShoppingListTotals}/>
        <ListOfSavings/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.auth,
    dashboardShoppingLists: state.dashboardShoppingLists,
    dashboardShoppingListById: state.dashboardShoppingListById,
    dashboardShoppingListTotals: state.dashboardShoppingListTotals
  }
}

export default connect(mapStateToProps)(Dashboard)