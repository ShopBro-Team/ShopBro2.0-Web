import React from 'react'
import {Link} from 'react-router-dom'
import TotalSavings from './TotalSavings'
import ListOfSavings from './ListOfSavings'


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World from Dashboard
        </h1>
        <TotalSavings/>
        <ListOfSavings/>
      </div>
    )
  }
}

export default Dashboard