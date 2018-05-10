import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Main from './Main'

import {connect} from 'react-redux'

const App = ({auth}) => (
  <Router>
    <div className='app-container has-text-centered'>
      <h1 className="title is-1">Shop Bro</h1>
      <Route exact path='/' component={props => auth.isAuthenticated
        ? <Main {...props} />
        : <Login {...props} />
      } />
      {/* Above code (provided by Harrison) is the best practice way of writing React Routes */}
      {/* The way we know and have written the turnery above before works but this is legit */}
      <Route path="/main" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/Register" component={Register} />
    </div>
  </Router>
)

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(App)

//Master Thursday