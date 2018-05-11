import React from 'react'
import {connect} from 'react-redux'

class Alert extends React.Component{
    render() {
        return <div>
        <div className="notification is-danger">
            <p>You have gone over your budget!  Are you sure you want to
            continue?</p>
            <br/>
            <div className="buttons is-centered">
                <a className="button is-centered">Yes</a>
                <a className="button is-centered">No</a>
            </div>
        </div>
    </div>
    }
}

export default connect()(Alert)