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
    const interval = setInterval(() => {
      setActiveImageId((prevId) => {
        if (prevId === 0) return 2;
        if (prevId === images.length) return 1; // Loop back to the first image after the last
        return prevId + 1;
      });
    }, 5000); // Switch images every 5 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const getTransitionStyle = (id: number) => {
    if (activeImageId === 0 && id === 1) {
      return "absolute visible"; // First image visible on initial load
    }
    if (activeImageId === id) {
      return "absolute animate-fadeIn"; // Active image fades in
    }
    // When cycling back, set the last image to fade out
    // For other cases, the previous image is just activeImageId - 1
    if (
      (activeImageId === 1 && id === images.length) ||
      activeImageId - 1 === id
    ) {
      return "absolute animate-fadeOut"; // Previous image fades out
    }
    return "absolute invisible"; // All other images are invisible
  };

  return (
    <>
      {images.map((src, index) => (
        <img
          key={index + 1}
          src={src}
          className={getTransitionStyle(index + 1)}
          alt={`Screenshot ${index + 1}`}
        />
      ))}
    </>
  );
};

export default ImageCarousel;
