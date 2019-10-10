import React from 'react';
import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.less';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const Slider = () => (
  <ReactSlick {...settings}>
    <div className="slider-item">
      <img src={ require('./images/slider1.png')} />
    </div>
    <div className="slider-item">
      <img src={ require('./images/slider2.png')} />
    </div>
    <div className="slider-item">
      <img src={ require('./images/slider3.jpg')} />
    </div>
    <div className="slider-item">
      <img src={ require('./images/slider4.jpg')} />
    </div>
    <div className="slider-item">
      <img src={ require('./images/slider5.jpg')} />
    </div>
  </ReactSlick>
);

export default Slider;