/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <Element name="contact" className="element"></Element>
      <h1 className="primary-heading">Где мы находимся?</h1>
      <p className="primary-text" style={{ maxWidth: "800px" }}>
        г. Ростов-на-Дону, посёлок Орджоникидзе, Медногорская улица, 8
      </p>
      <a
        className="secondary-button"
        href="tel:89185350508"
        style={{ textDecoration: "none", marginBottom: "5rem" }}
      >
        Позвонить
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A64cec0f4c1dda979728d264ba13766d982340d7276d0c87fb74b4b2a1bf01af3&amp;source=constructor"
        width="100%"
        height="576"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Contact;
