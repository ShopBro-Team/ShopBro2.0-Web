import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import ShoppingListInfo from './ShoppingListInfo'
import SavingsProgressBars from './SavingsProgressBars'

import carojs from '../../../node_modules/bulma-carousel/dist/bulma-carousel.min.js'

class ListOfSavings extends React.Component {
  componentDidMount() {
    var carousels = carojs.attach(); // carousels now contains an array of all Carousel instances 
  }
  render() {
    return (
      <div className="column is-mobile is-centered">	
        <div className='carousel carousel-animated carousel-animate-slide' data-autoplay="true">
          <div className='carousel-container'>
          {/* below: usual async stuff (&&) where we have to make sure our dashboardShoppingLists object has arrived from the api before the render gets executed, hence we check that length is larger than 0. We then map over the object in order to display each individual ShoppingList item as a carousel through the SavingsProgressBars component*/}
            {this.props.dashboardShoppingLists.length > 0 && this.props.dashboardShoppingLists.map(item => {
              return (
                <div className='carousel-item has-background is-active'>        
                  <SavingsProgressBars className="is-background" item={item} key={item.id} />        
                </div>
              )
            })}	
          </div>
          {/* bulma-carousel navigation arrows utilising fontawesome */}
          <div className="carousel-navigation is-centered">
            <div className="carousel-nav-left">
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div className="carousel-nav-right">
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    dashboardShoppingLists: state.dashboardShoppingLists
  }
}

export default connect(mapStateToProps)(ListOfSavings)
