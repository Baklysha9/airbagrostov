import React from "react";
import ProfilePic from "../Assets/ot1.png";
import ProfilePic1 from "../Assets/ot1-1.png";
import ProfilePic2 from "../Assets/ot2.png";
import ProfilePic2_1 from "../Assets/ot2-1.png";
import ProfilePic3 from "../Assets/ot3.png";
import Bo from "../Assets/bo.png";
import { AiFillStar } from "react-icons/ai";
import { Element } from "react-scroll";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" style={{ marginTop: "12rem" }}>
      <Element name="comment" className="element">
        <img src={Bo} className="bo" alt="" />
        <img src={Bo} className="bo1" alt="" />
        <div className="work-section-top">
          <p className="primary-subheading">Отзывы</p>
          <h1 className="primary-heading">Что о нас говорят</h1>
          <p className="primary-text">
            Каждую неделю мы получаем положительные отзывы о проделанной работе.
            Мы дорожим репутацией, поэтому предлагаем индивидуальный подход к
            каждому клиенту. <br />
            <br />В большинстве случаев к нам обращаются автовладельцы попавшие
            в ДТП, либо клиенты, которые хотят вернуть "заводское" состояние
            салона своего авто. <br />
            <br />
            Несколько отзывов с Avito:
          </p>
        </div>
        <div className="testimonial-section-bottom">
          <div className="testimonial-img-section">
            <img src={ProfilePic} alt="Хорошие отзывы ремонт подушек" />
            <img src={ProfilePic1} alt="Отличные отзывы ремонт торпеды" />
          </div>

          <p>
            Всем рекомендую! Сделали всё на отлично! Сделали перетяжку торпеды,
            с подушками безопасности. Всё отлично! Не одна ошибка не горит! Всё
            работает отлично!!! Спасибо ребята!
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Алексей</h2>
        </div>
        <div className="testimonial-section-bottom">
          <div className="testimonial-img-section">
            <img src={ProfilePic2} alt="Лучшие отзывы ремонт салона" />
            <img
              src={ProfilePic2_1}
              alt="Ростов отзывы ремонт подушек безопасности"
            />
          </div>

          <p>
            Обратился к ребятам в первый раз по рекомендации, сделали все быстро
            и качественно , по цене приятнее чем у конкурентов! Качеством и
            скоростью более чем доволен))В дальнейшем буду обращаться еще ,
            спасибо за проделанную работу)) Ребят Рекомендую!
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Александр</h2>
        </div>
        <div className="testimonial-section-bottom">
          <div className="testimonial-img-section">
            <img src={ProfilePic3} alt="Лучшая компания перетяжка торпеды" />
          </div>
          <p>
            Спасибо за качественную работу, на такой результат даже не
            расчитовал. Рекоментую
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Дмитрий</h2>
        </div>
      </Element>
    </div>
  );
};

export default Testimonial;
