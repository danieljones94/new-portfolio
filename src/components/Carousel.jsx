import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import TitleMessage from "./TitleMessage";
import "../styles/Carousel.css";
import SkyLine1 from "../assets/images/SkyLine1.jpg";
import SkyLine4 from "../assets/images/SkyLine4.jpg";
import SkyLine3 from "../assets/images/SkyLine3.jpg";

const PortfolioCarousel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        fade
        controls={false}
        activeIndex={index}
        onSelect={handleSelect}
        interval={2000}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={SkyLine1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={SkyLine4}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={SkyLine3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default PortfolioCarousel;
