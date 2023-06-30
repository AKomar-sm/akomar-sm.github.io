import React from 'react';
import pencil from 'assets/images/pencil.jpg';

import './about_us_section_mobile.scss';
import './about_us_section_tablet.scss';
import './about_us_section_big_screen.scss';

export const AboutUsSection = (): JSX.Element => {
  return (
    <div className="aboutUsWrapper">
      <h2>О НАС</h2>
      <div className="aboutUsBody">
        <div className="leftSideContainer aboutUs tablet">
          <p className="leftSideText">
            Цель проекта VASTUSPACE - улучшение жизни людей, благодаря созданию
            гармоничных пространств. Каждое построенное здание, обладает своей
            вибрацией и производит хорошее или плохое воздействие на людей.
            Сооружения, спроектированные и построенные по принципам Васту
            шастры, создают благоприятный ритм в своей пространственной форме,
            благодаря чему на Земле появляются строения, которые притягательны
            на физическом уровне и прекрасны духовно.
            <br />
            <br />
            Строительство подобных домов пока не имеет широкого распространения,
            хотя люди все чаще начинают задумываться не только о технической
            стороне вопроса, но и о том, как создать живой, уютный и теплый дом
            для всей семьи. <br />
            <br />
          </p>
        </div>

        <img
          src={pencil}
          alt=""
          width="450px"
          height="590px"
          className="pencilImage"
        />
        <div>
          <div>
            <div className="headerDecoration" />
            <h3>улучшаем вашу жизнь с помощью гармоничных пространств</h3>{' '}
            <div className="headerDecoration" />
          </div>

          <p className="rightSideText">
            Мы сможем помочь вам в решении этой задачи. Команда ведических
            архитекторов с многолетним опытом работы готова реализовать любой
            проект, от небольшого дома до градостроительного плана жилого
            поселка.
          </p>
        </div>
      </div>
    </div>
  );
};
