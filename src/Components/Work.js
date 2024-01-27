import React from "react";
import PickMeals from "../Assets/podyshka.png";
import ChooseMeals from "../Assets/panel.png";
import DeliveryMeals from "../Assets/remen.png";
import srcBlock from "../Assets/src.png";
import Montag from "../Assets/montag.png";
import Seed from "../Assets/sid.png";
import { Element } from "react-scroll";

const Work = () => {
  const workInfoData = [
    {
      image: ChooseMeals,
      title: "Салон",
      text: [
        "Перетяжка торпедо после взрыва подушки безопасности",
        "Перетяжка потолка, отпаривание заломов",
        "Перетяжка рулей, ручек КПП, элементов салона",
      ],
    },
    {
      image: PickMeals,
      title: "Подушки безопасности",
      text: [
        "Восстановление подушки безопасности водителя",
        "Восстановление подушки безопасности пассажира",
        "Восстановление коленной подушки",
        "Восстановление боковых подушек (шторки)",
      ],
    },
    {
      image: DeliveryMeals,
      title: "Ремни безопасности",
      text: [
        "Ремонт ремней безопасности после ДТП",
        "Разблокировка ремней безопасности",
      ],
    },
    {
      image: Seed,
      title: "Cиденья",
      text: [
        "Ремонт сидений после разрыва",
        "Зашитие оригинальной строчкой",
        "Ремонт подушки безопасности",
      ],
    },
    {
      image: srcBlock,
      title: "Блок SRS Airbag",
      text: [
        "Диагностика неисправности систем безопасности автомобиля",
        "Сброс ошибок",
        "Crash data reset",
      ],
    },
    {
      image: Montag,
      title: "Демонтаж/монтаж",
      text: [
        "Профессиональное снятие и установка всех элементов безопасности салона.",
      ],
    },
  ];
  return (
    <div className="work-section-wrapper">
      <Element name="service" className="element">
        <div className="work-section-top">
          <p className="primary-subheading">Услуги</p>
          <h1 className="primary-heading">С чем мы работаем:</h1>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img
                  src={data.image}
                  alt="airbagrostov подушки безопасности ростов"
                />
              </div>
              <h2>{data.title}</h2>
              <ul style={{ width: "100%", minHeight: "270px" }}>
                {data.text.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Element>
    </div>
  );
};

export default Work;
