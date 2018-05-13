import React from 'react'
import {Link} from 'react-router-dom'


function Footer (props) {
 
  return (
    <div>
      <Link className="nav-item" to="/dashboard"><button>Dashboard</button></Link>
      <Link className="nav-item" to="/main"><button>Main</button></Link>
      <Link className="nav-item" to="/settings"><button>Settings</button></Link>
    </div>
  )
}


export default Footer