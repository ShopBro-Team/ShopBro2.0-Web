import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Main from './Main'
import Budget from './Budget'
import Dashboard from './dashboard/Dashboard'
import Footer from './dashboard/Footer'
import Settings from './dashboard/Settings'
import ShoppingListInfo from './dashboard/ShoppingListInfo'


import {connect} from 'react-redux'
import Celebration from './Celebration';
import { ShoppingList } from './ShoppingList';



const App = ({auth}) => (
  <Router>
    <div className='app-container has-text-centered is-block-flex-tablet is-block-flex-mobile' >
      <img src="/image/logo.png" alt="logo" width="20%" height="20%"/>
      <div className='container'>
      </div>
      <Route exact path='/' component={props => auth.isAuthenticated
        ? <Main {...props} />
        : <Login {...props} />
      } />
      {/* Above code (provided by Harrison) is the best practice way of writing React Routes */}
      {/* The way we know and have written the turnery above before works but this is legit */}
      <Route path="/main" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/celebration" component={Celebration} />
      <Route path="/budget" component={Budget} />
      <Route path="/shoppinglist" component={ShoppingList} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/footer" component={Footer} />
      <Route path="/settings" component={Settings} />
      <Route path="/shoppinglistinfo" component={ShoppingListInfo} /> 
      {auth.isAuthenticated && <Footer />}
    </div>
  </Router>
)

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(App) 

//Master Thursday