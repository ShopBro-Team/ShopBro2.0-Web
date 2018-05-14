import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ShoppingListInfo from './ShoppingListInfo'
import SavingsProgressBars from './SavingsProgressBars'



class ListOfSavings extends React.Component {

  render() {
    return (
      <div className="column is-mobile is-centered">	
        {this.props.dashboardShoppingLists.length > 0 &&this.props.dashboardShoppingLists.map(item => {
					return (
						<SavingsProgressBars item={item} key={item.id} />
					)})}
				</div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    dashboardShoppingLists: state.dashboardShoppingLists
  }
}

export default connect(mapStateToProps)(ListOfSavings)
