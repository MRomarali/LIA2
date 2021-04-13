import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import './Referens.css'
function GallerSlider() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
            <Carousel className="gallerySlider" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="imgSlider" interval={3000}>
          <img
            className="d-block w-100"
            src="https://www.gotland.se/imagehandling/BA_betong_20170117_1236.jpg?path=%2Fimages%2FGVF%2FBA_betong_20170117_1236.jpg&width=730&height=320&crop_x1=0&crop_y1=348&crop_x2=2126&crop_y2=1279&resize=FORCE"
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item className="imgSlider" interval={3000}>
          <img
            className="d-block w-100"
            src="https://enkoping.se/images/18.c88b45216d3165e9723eb44/1568727544741/Bygg2%20webb.jpg"
            alt="Second slide"
          />
  
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className="imgSlider" interval={3000}>
          <img
            className="d-block w-100"
            src="https://s3.eu-west-2.amazonaws.com/byggservice/photos/images/000/008/590/large/TE_Bygg1581577444.jpg?1605701777"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>

    );
  }
  
 export default GallerSlider;

