import React from "react";
import Logo from "../Assets/Logo.png";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a style={{ textDecoration: "none" }} href="tel:89185350508">
            8(918)535-05-08
          </a>

          <a
            style={{ textDecoration: "none" }}
            href="mailto:airbagrostov2015@yandex.ru"
          >
            airbagrostov2015@yandex.ru
          </a>
          <span>2024 ©</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
