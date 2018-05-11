import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Celebration () {
  return (
    <div className="Nav hero is-small is-info">
      <div className="hero-body">
        <Link to="/main">Home</Link>
        <h1>I am celebrating!</h1>
      </div>
    </div>
  )
}

export default Celebration