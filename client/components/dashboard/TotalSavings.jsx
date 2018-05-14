import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'




function TotalSavings (props) {

  let userName = props.auth.user.user_name

  function capitalizeFirstLetter(data) {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }

 
    return (
      <div>
        {/* {props.totals.legth > 0 && props.totals[0].total_savings} */}
        <h1>Hello {capitalizeFirstLetter(userName)} this is your Total Savings : $  
         {props.totals[0] && (props.totals[0].totalsavings/100).toFixed(2)}</h1>
      </div>
    )
}

{/* Bring the below in once pulled in new changes */}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    // dashboardShoppingLists: state.dashboardShoppingLists
  }
}

export default connect(mapStateToProps)(TotalSavings) 