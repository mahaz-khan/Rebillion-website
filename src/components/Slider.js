import React, { useState } from "react";
import Slider from "react-slider";
import Image from "next/image";
import redsneakers from "../../public/Assets/figmaredshoe.png";
import greensneakers from "../../public/Assets/figmagreenshoe.png";
import orangesneakers from "../../public/Assets/figmaorangeshoe.png";

const SliderDemo = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { src: redsneakers },
    { src: greensneakers },
    { src: orangesneakers },
  ];

  const handleSlideChange = (slide) => {
    setActiveSlide(slide);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : slides.length - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide < slides.length - 1 ? prevSlide + 1 : 0));
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <Slider
          dots={true}
          infinite={true}
          slides={slides}
          onSlideChange={handleSlideChange}
        />
      </div>
      <div className="image-container flex">
        <button onClick={handlePrevSlide} className="prev-btn text-[40px]">
          &lt;
        </button>
        {slides.map((slide, index) => (
          <Image
            className={`${activeSlide === index ? "visible" : "hidden"} `}
            key={index}
            src={slide.src}
            alt={`Image ${index + 1}`}
            width="500"
            height="400"
            style={{
              borderRadius: "20px",
            }}
          />
        ))}
        <button onClick={handleNextSlide} className="next-btn text-[40px]">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SliderDemo;
