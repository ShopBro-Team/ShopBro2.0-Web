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
        <h1>Hello {capitalizeFirstLetter(userName)} this is your Total Savings: $50</h1>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    // totalSavings: state.totalSavings
    //the above reducer has not been created yet steve suggested that he would bring in with api
  }
}

export default connect(mapStateToProps)(TotalSavings) 