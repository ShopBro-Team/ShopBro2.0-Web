import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'
import { saveShoppingList, resetApp } from '../actions/shoppinglist'
import BudgetSettingContainer from '../containers/BudgetSettingContainer'
import Budget from './Budget'
import ShoppingList from './ShoppingList'
import Alert from './Alert'
import Celebration from './Celebration'


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      showModal: false,

    }

    this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this)
    this.done = this.done.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState(({showModal}) => ({showModal: !showModal}))
  }
  
  capitalizeFirstLetter(data) {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }

  done() {
    this.props.dispatch(saveShoppingList(this.props.budget, 
      (this.props.budget - this.props.totalSpend), new Date(), this.props.shoppingList))

    if (this.props.budget - this.props.totalSpend < 0)  {
      this.props.dispatch(resetApp())
    } 

  }


  render() {
    let userName = this.props.auth.user.user_name
    const overBudget = this.props.budget - this.props.totalSpend < 0
    const savings = this.props.budget - this.props.totalSpend > 0.01
    const {showModal} = this.state

    return (<div>
        <div className='Nav hero is-small is-success'>
          <div className='hero-body'>
            <p className='is-4 has-text-warning has-text-weight-bold'>Kia ora {this.capitalizeFirstLetter(userName)}!</p> 
            <br/>
            {this.props.auth.isAuthenticated
              ? <div>
                  {this.props.budgetView === 'setting' ? <BudgetSettingContainer /> : <Budget />}
                </div>
              : <div className='columns nav-menu'>
                  <Link className='nav-item' to='/login'>Login</Link>&nbsp;
                  <Link className='nav-item' to='/register'>Register</Link>
                </div>
            }
            <ShoppingList />
          {this.state.showModal && <Alert noBudget={this.props.budget == 0} 
                  closeModal={this.toggleModal} 
                  showModal={this.state.showModal} />} 
          <button className="button" onClick={() => this.toggleModal()}>Modal</button>
          </div>
          
          {/* Done button calls done function and saves shopping list to database and celebrates if underbudget */}
          <div className='completed'>
            <button className='button is-normal is-warning has-text-white' onClick={() => this.done()}>
              {savings ? <Link className='nav-item' to='/celebration'>Done</Link> : 
                <Link className='nav-item' to='/dashboard'>Done</Link>}  
            </button>  
            <br/>
            <br/>
          </div> 
        </div>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    budgetView: state.budgetView,
    budget: state.budget,
    totalSpend: state.totalSpend,
    shoppingList: state.shoppingList
  }
}

export default connect(mapStateToProps)(Main)
