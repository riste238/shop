import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "./imgSlider/img1.jpg";
import pic2 from "./imgSlider/img2.jpg";
import pic3 from "./imgSlider/img3.png";
import "./stylePic.scss";
// import Slider from "../components/Slider/Slider";

function Home() {
   
  return (
    <Carousel className="carouselSlider">
      <Carousel.Item interval={1000}>
        <img
          className="size-pic"
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Online shopping is part of E-Commerce</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="size-pic"
          src={pic2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>Always place orders from a secure connection</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="size-pic"
          src={pic3}
          alt="Third slide"
        />
      
        <Carousel.Caption>
          <p>
          Don't use an e-store that requires more information than necessary to make the sale.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;