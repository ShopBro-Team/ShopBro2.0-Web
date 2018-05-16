import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../../actions/logout'
//Imported from https://www.npmjs.com/package/react-circular-progressbar
import CircularProgressbar from 'react-circular-progressbar'

//This component displays total historic savings i.e. savings over all saved shopping lists

function TotalSavings (props) {

  //Conditional statement required as logout threw a props.auth.user was undefined error 
  let userName =  props.auth.user != null ? props.auth.user.user_name : ''

  function capitalizeFirstLetter(data) {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }

  //NOTE: totals are brought in via props from the Dashboard component (not from the store)
  return (
    <div>
      <div className="level-right">
        <button className="button" onClick={() => props.dispatch(logoutUser())}>Logout</button>
      </div>

      <div className='columns is-mobile is-tablet is-centered'>
        <div className=''>
        
          {props.totals[0] && props.totals[0].totalsavings > 0 && 
            <CircularProgressbar  percentage={(props.totals[0].totalsavings / props.totals[0].totalbudget)*100} 
            textForPercentage={perc => `$${props.totals[0].totalsavings / 100}`} 
            className="circle-progress"
            styles={{
              path: { stroke: `rgba(244, 191, 68)`},
              text: { fill: `rgba(49 ,55 ,68)`}
            }}/>
          }

        </div>

      </div>

      {/*Ternary added to deal with 'negative' savings  */}
      <h1>Hello {capitalizeFirstLetter(userName)} this is your</h1>  
        {props.totals[0] && 
          (props.totals[0].totalsavings > 0 
        ?
          <h1>Total Savings : $ {(props.totals[0].totalsavings/100).toFixed(2)}</h1>
        :
          <h1>Total Overspend : $ {-(props.totals[0].totalsavings/100).toFixed(2)}</h1>)
        }

    </div>
  )
}

{/* Bring the below in once pulled in new changes */}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(TotalSavings) 