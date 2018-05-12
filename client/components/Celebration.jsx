import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


function Celebration (props) {

  let userName = props.auth.user.user_name
  
  function capitalizeFirstLetter(data) {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }

  return (
    <div className="Nav hero is-small is-info">
      <div className="hero-body">
        <p className="has-text-warning is-size-2">{capitalizeFirstLetter(userName)} You have saved today!</p>
        <img src="https://media.giphy.com/media/l0ExhcMymdL6TrZ84/giphy.gif" alt="goldgif"/>
        <img src="https://media.giphy.com/media/LCdPNT81vlv3y/giphy.gif" alt="goldgif"/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }

}


export default connect(mapStateToProps)(Celebration)