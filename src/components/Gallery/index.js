import React from 'react'
import Slider from 'react-slick'
import './styles.css'

class Gallery extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 2500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnDotsHover: true,
    }
    return (
      <div className="Gallery--root">
        <Slider {...settings}>{this.props.children.props.children}</Slider>
      </div>
    )
  }
}

export default Gallery
