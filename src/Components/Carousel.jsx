import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" m-auto py-16 px-4 relative group ">
      <div className="flex flex-col">
        
        <a
          href={slides[currentIndex].eventUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-full h-full mb-10 rounded-2xl bg-center shadow-lg bg-cover duration-500"
            src={slides[currentIndex].imageUrl}
            alt="..."
          />
        </a>
        <div className="inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
          <a
            href={slides[currentIndex].eventUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className=" bottom-0 text-white text-3xl left-0 right-0  py-2 px-4 ">
              {slides[currentIndex].name}
            </h2>
          </a>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
