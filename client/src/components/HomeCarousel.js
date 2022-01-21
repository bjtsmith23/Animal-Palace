import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "../assets/css/HomeCarousel.css";
import HomeCat from "../assets/images/home-cat.jpg";
import HomePuppy from "../assets/images/home-puppy.jpg";

export default function HomeCarousel() {
  const carouselImgs = [
    {
      imgSrc: HomeCat,
      imgAlt: "cats on bed playing",
    },
    {
      imgSrc: HomePuppy,
      imgAlt: "puppies on grass",
    },
  ];
  return (
    <Carousel fade>
      {carouselImgs.map((carouselImg, index) => (
        <Carousel.Item className="carousel" key={index}>
          <img
            className="d-block w-100"
            src={carouselImg.imgSrc}
            alt={carouselImg.imgAlt}
          />
          <Carousel.Caption>
            <h3>
              From dogs and cats to monkeys and elephants. We have them all! By
              adopting or donating, YOU can make their world a better place!
            </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="outline-light" href="/main">
              Explore More &raquo;
            </Button>{" "}
            <Button variant="outline-danger">Signup Here! &raquo;</Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
