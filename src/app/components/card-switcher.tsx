"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const images = [
  {
    src: "/image1.jpeg",
    alt: "Image 1",
    prompt:
      "Luxurious red velvet texture, soft plush fabric with light shadows",
  },
  {
    src: "/image2.jpeg",
    alt: "Image 2",
    prompt: "Abstract colorful painting",
  },
  {
    src: "/image3.jpeg",
    alt: "Image 3",
    prompt: "Iridescent wave texture",
  },
];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div {...handlers} className="relative w-full max-w-lg overflow-hidden">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded z-10"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div className="relative w-96 h-60 ">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentIndex
                  ? "translate-x-0"
                  : index < currentIndex
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
