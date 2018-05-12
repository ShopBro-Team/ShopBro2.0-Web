import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Budget from './Budget'
import ShoppingList from './ShoppingList'


class Alert extends React.Component{
    render() {
        return <div>
        <div className="notification is-warning">
            <p>You have gone over your budget!  You may want to remove some items.</p>
        </div>
    </div>
    }
}


export default connect()(Alert)

/* <br/>
            <div className="buttons is-centered">
              <a className="button is-centered">Okay</a> 
            </div> */
//This function is for rendering okay button. Which we might need for the future reference
//if we wanted to add more feature.