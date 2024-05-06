import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import style from "./Slider.module.css";

export const Slider = ({ bands }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? bands.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const newIndex = currentIndex === bands.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={style.slider_container}>
      <div className={style.slider_button}>
        <FaArrowAltCircleLeft onClick={prevSlide} />
      </div>
      <div
        onMouseEnter={() => setIsHovered(true)} // Cuando el mouse entra en la imagen
        onMouseLeave={() => setIsHovered(false)} // Cuando el mouse sale de la imagen
      >
        <img src={bands[currentIndex].image} alt={bands[currentIndex].name} />
        {isHovered && (
          <p className={style.slider_text}>{bands[currentIndex].name}</p>
        )}
      </div>
      <div className={style.slider_button}>
        <FaArrowAltCircleRight onClick={nextSlide} />
      </div>
    </div>
  );
};
