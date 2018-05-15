import React from 'react'

import carojs from '../../../node_modules/bulma-carousel/dist/bulma-carousel.min.js'


export default class Carousel extends React.Component {
  componentDidMount() {
    var carousels = carojs.attach(); // carousels now contains an array of all Carousel instances 
  }

  render() {
    return (
      <div className='carousel carousel-animated carousel-animate-slide' data-size="5">
  <div className='carousel-container'>
    <div className='carousel-item is-active'>
      <figure className="image is-2by1"><img src="https://bulma.io/images/placeholders/640x320.png" /></figure>
    </div>
    <div className='carousel-item'>
      <figure className="image is-2by1"><img src="https://bulma.io/images/placeholders/640x320.png" /></figure>
    </div>
    <div className='carousel-item'>
      <figure className="image is-2by1"><img src="https://bulma.io/images/placeholders/640x320.png" /></figure>
    </div>
    <div className='carousel-item'>
      <figure className="image is-2by1"><img src="https://bulma.io/images/placeholders/640x320.png" /></figure>
    </div>
    <div className='carousel-item'>
      <figure className="image is-2by1"><img src="https://bulma.io/images/placeholders/640x320.png" /></figure>
    </div>
    <div className='carousel-item'>
      <figure className="image is-2by1"><img src="https://bulma.io/images/placeholders/640x320.png" /></figure>
    </div>
    <div className='carousel-item'>
      <figure className="image is-2by1"><img src="https://bulma.io/images/placeholders/640x320.png" /></figure>
    </div>
  </div>
  <div className="carousel-navigation is-centered">
    <div className="carousel-nav-left">
      <i className="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
    <div className="carousel-nav-right">
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  </div>
</div>
    )
  }
}