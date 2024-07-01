import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="relative my-4 h-72 w-full overflow-hidden sm:my-8 md:h-96">
      <div className="absolute left-3 top-1/2 sm:left-8">
        <button className="text-4xl" onClick={prevSlide}>
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute right-3 top-1/2 sm:right-8">
        <button className="text-4xl" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
      <img
        src={slides[currentIndex]}
        className="h-72 w-full object-contain md:h-96"
      />
      {/* {slides.map((slide, index) => (
        <div key={index}></div>
      ))} */}
    </div>
  );
};

export default ImageSlider;
