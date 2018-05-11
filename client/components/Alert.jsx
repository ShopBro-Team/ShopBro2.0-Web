import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Budget from './Budget'
import ShoppingList from './ShoppingList'


class Alert extends React.Component{
    render() {
        return <div>
        <div className="notification is-warning">
            <p>You have gone over your budget!  Are you sure you want to
            continue?</p>
            <br/>
            <div className="buttons is-centered">
                <a className="button is-centered"><Link to = '/budget'>Yes</Link></a>
                <a className="button is-centered"><Link to = '/shoppinglist'>No</Link></a>
            </div>
        </div>
    </div>
    }
}

export default connect()(Alert)