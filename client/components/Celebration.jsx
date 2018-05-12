import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


function Celebration () {

//   let userName = props.auth.user.user_name
  
//   function capitalizeFirstLetter(data) {
//     return data.charAt(0).toUpperCase() + data.slice(1);
//   }

  return (
    <div className="Nav hero is-small is-info">
      <div className="hero-body">
        <Link to="/main">Home</Link>
        {/* <h1>You have saved {capitalizeFirstLetter(userName)}</h1> */}
        <p className="has-text-warning is-size-2">'username' You have saved today!</p>
        <img src="https://media.giphy.com/media/l0ExhcMymdL6TrZ84/giphy.gif" alt="goldgif"/>
        <img src="https://media.giphy.com/media/LCdPNT81vlv3y/giphy.gif" alt="goldgif"/>
      </div>
    </div>
  )
}

export default Celebration