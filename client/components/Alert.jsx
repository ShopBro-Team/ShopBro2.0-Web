import React from 'react'
import {Link} from 'react-router-dom'
import Budget from './Budget'
import ShoppingList from './ShoppingList'
import {connect} from 'react-redux'


class Alert extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.closeModal = props.closeModal
  }

  render() {
    return (<div>
      {!this.props.noBudget ?  
          <div className="columns">
            <div className="column"></div>
                <div className="modal is-active">
                    <div className="modal-background" onClick={this.closeModal} ></div>
                        <div className="modal-card">
                            <header className="modal-card-head">
                                <button className="delete" aria-label="close" onClick={this.closeModal} />
                            </header>
                            <section className="modal-card-body">
                                <div className="content grad-modal-content">
                                <p className="title is-5 has-text-danger">You have gone over your budget.  Remove some items!</p>
                                </div>
                            </section>
                            <footer className="modal-card-foot">
                                    <button className="button is-small is-warning is-outlined is-fullwidth" onClick={this.closeModal}>Back</button>
                            </footer>
                        </div>
                </div>
            <div className="column"></div>
          </div>
      :
        <div className="notification is-info">
          <p className= "has-text-primary title is-6">Don't forget to set your budget!</p>
        </div>} 
    </div>)
  }
}

export default connect()(Alert)

