import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

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
    <div className="flex items-center justify-center gap-8 mb-10">
      <div className="text-2xl cursor-pointer">
        <FaArrowAltCircleLeft onClick={prevSlide} />
      </div>
      <div
        onMouseEnter={() => setIsHovered(true)} // Cuando el mouse entra en la imagen
        onMouseLeave={() => setIsHovered(false)} // Cuando el mouse sale de la imagen
      >
        <img src={bands[currentIndex].image} alt={bands[currentIndex].name} />
        {isHovered && (
          <p className="text-center mt-1">{bands[currentIndex].name}</p>
        )}
      </div>
      <div className="text-2xl cursor-pointer">
        <FaArrowAltCircleRight onClick={nextSlide} />
      </div>
    </div>
  );
};
