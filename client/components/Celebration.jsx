import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { resetApp } from '../actions/shoppinglist'

//functional component aka stateless component. A difference to stateful components is that we have to declare functions (and not bind(this) going on). Also functional components bring in props as {props.budget} and not {this.props.budget}. The .toFixed(2) in line 23 means that we are showing 2 decimals after the comma.

function Celebration (props) {

  let userName = props.auth.user.user_name
  
  function capitalizeFirstLetter(data) {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }

  function reset(){
  props.dispatch(resetApp())
  }

  return (
    <div className="Nav hero is-small is-success">
      <div className="hero-body">
        <p className="has-text-warning is-size-4">{capitalizeFirstLetter(userName)}, you have saved ${((props.budget - props.totalSpend)/100).toFixed(2)} today!</p>
        <img src="https://media.giphy.com/media/l0ExhcMymdL6TrZ84/giphy.gif" alt="goldgif"/>
      </div>
      <div>
      <button className="button is-normal is-warning has-text-primary" onClick={reset}><Link to="/main">Close</Link></button>
      <br/>
      <br/>
    </div>
   </div> 
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    budget: state.budget,
    totalSpend: state.totalSpend
  }
}

export default connect(mapStateToProps)(Celebration)