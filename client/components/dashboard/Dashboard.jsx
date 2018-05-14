import React from 'react'
import {Link} from 'react-router-dom'
import TotalSavings from './TotalSavings'
import ListOfSavings from './ListOfSavings'
import {connect} from 'react-redux'

import { getShoppingListById, getShoppingLists} from '../../actions/dashboard'

class Dashboard extends React.Component {

    componentDidMount() {
      this.props.dispatch(getShoppingLists())
      this.props.dispatch(getShoppingListById())
    }

  render() {
    return (
      <div>
        <h1>Hello World from Dashboard
        </h1>
        <TotalSavings/>
        <ListOfSavings/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.auth,
    dashboardShoppingLists: state.dashboardShoppingLists,
    dashboardShoppingListById: state.dashboardShoppingListById
  }
}

export default connect(mapStateToProps)(Dashboard)