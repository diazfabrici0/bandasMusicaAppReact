import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import style from "./Slider.module.css";
import { Tooltip } from "../Tooltip/Tooltip";

export const Slider = ({ bands }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <Tooltip message={bands[currentIndex].name}>
        <img src={bands[currentIndex].image} alt={bands[currentIndex].name} />
      </Tooltip>

      <div className={style.slider_button}>
        <FaArrowAltCircleRight onClick={nextSlide} />
      </div>
    </div>
  );
};
