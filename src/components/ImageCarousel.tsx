"use client";

import React, { useEffect, useState } from "react";

const ImageCarousel = () => {
  const [activeImageId, setActiveImageId] = useState(0);
  const images = [
    "screenshots/screenshot1-2x.png",
    "screenshots/screenshot2-2x.png",
    "screenshots/screenshot3-2x.png",
    "screenshots/screenshot4-2x.png",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveImageId(2); // Skip to 2nd image after initial load

      setInterval(() => {
        setActiveImageId((prevId) => {
          if (prevId === images.length) return 1; // Loop back to the 1st after last
          return prevId + 1;
        });
      }, 5000); // Switch images every 5 seconds

      // return () => clearInterval(interval); // Clean up on component unmount
    }, 3000);

    return () => clearTimeout(timeout); // Clean up on component unmount
  });

  const getTransitionStyle = (id: number) => {
    if (activeImageId === id) {
      return "animate-fadeIn"; // Active image fades in
    }
    if (
      (activeImageId === 1 && id === images.length) ||
      activeImageId - 1 === id
    ) {
      return "animate-fadeOut"; // Previous image fades out
    }
    return "invisible"; // All other images are invisible
  };

  return (
    <>
      {images.map((src, i) => (
        <img
          key={i + 1}
          src={src}
          className={
            activeImageId === 0
              ? `absolute ${i === 0 ? "visible" : "invisible"}`
              : `absolute ${getTransitionStyle(i + 1)}`
          }
          alt={`Screenshot ${i + 1}`}
        />
      ))}
    </>
  );
};

export default ImageCarousel;
