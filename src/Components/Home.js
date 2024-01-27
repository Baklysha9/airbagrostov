import React from "react";
import Background from "../Assets/test1.jpg";

import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Slider } from "./Slider/Slider";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={Background} alt="Изображение от rawpixel.com на Freepik" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Подушки безопасности{" "}
            <span style={{ color: "#bd0000" }}>AIRBAGROSTOV</span>
          </h1>
          <p className="primary-text">
            Ремонт автомобильных подушек, панелей и сидений. <br />
            Перетяжка торпедо и восстановление салона после ДТП в
            Ростове-на-Дону.
          </p>

          <button
            className="secondary-button"
            onClick={() => {
              window.location.href =
                "https://wa.me/89185350508?text=Здравствуйте,%20интересует%20ремонт%20подушки%20на...";
            }}
          >
            Написать в WhatsApp <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
