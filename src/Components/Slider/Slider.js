import React, { useState, useEffect } from "react";
import BannerBackground1 from "../../Assets/section1-1.png";
import BannerBackground2 from "../../Assets/section1-2.png";
import BannerBackground3 from "../../Assets/section1-3.png";
import BannerBackground4 from "../../Assets/section1-4.png";
import BannerBackground5 from "../../Assets/section1-5.png";
import BannerBackground6 from "../../Assets/section1-6.png";
import BannerBackground7 from "../../Assets/section1-7.png";
import BannerBackground8 from "../../Assets/section1-8.png";
import BannerBackground9 from "../../Assets/section1-9.png";
const images = [
  BannerBackground1,
  BannerBackground3,
  BannerBackground2,
  BannerBackground4,
  BannerBackground5,
  BannerBackground6,
  BannerBackground7,
  BannerBackground8,
  BannerBackground9,
];

export const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // eslint-disable-next-line jsx-a11y/img-redundant-alt
  return <img src={images[index]} alt={`Image ${index + 1}`} />;
};
