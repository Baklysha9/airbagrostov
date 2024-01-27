import React from "react";

import Background from "../Assets/test1.jpg";
import AvitoImage from "../Assets/avito-1.png";
import { Element } from "react-scroll";

const About = () => {
  return (
    <div className="about-section-container">
      <img className="about-background" src={Background} alt="" />
      <div className="about-section-image-container">
        <img src={AvitoImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <Element name="about" className="element">
          <p className="primary-subheading" id="top">
            О нас
          </p>
          <h1 className="primary-heading">Сотни довольных клиентов</h1>
          <p className="primary-text">
            Больше <span style={{ color: "#bd0000" }}>12 лет</span> мы радуем
            наших клиентов услугами наивысшего качества. Самая подробная
            информация в нашем аккаунте на Avito.
          </p>
          <p className="primary-text">
            Более{" "}
            <span style={{ color: "#bd0000" }}>130 положительных отзывов</span>{" "}
            на Avito! Мы дорожим каждым клиентом, предлагаем индивидуальный
            подход и адекватные сроки работ.
          </p>
          <div className="about-buttons-container">
            <button
              className="secondary-button"
              onClick={() => {
                window.location.href =
                  "https://www.avito.ru/user/c873018066ddf14e94d76e396019df60/profile/all?src=sharing&sellerId=c873018066ddf14e94d76e396019df60";
              }}
            >
              Перейти на профиль Avito
            </button>
          </div>
        </Element>
      </div>
    </div>
  );
};

export default About;
