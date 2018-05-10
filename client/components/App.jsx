import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Main from './Main'

const App = () => (
  <Router>
    <div className='app-container has-text-centered'>
      <h1 className="title is-1">Shop Bro</h1>
      <Route path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/Register" component={Register} />
    </div>
  </Router>
)

export default App
