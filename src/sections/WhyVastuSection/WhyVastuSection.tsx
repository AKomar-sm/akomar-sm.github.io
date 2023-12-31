import React from 'react';
import parushaBack from 'assets/images/parushaBack.jpg';

import './why_vastu_section_big_screen.scss';
import './why_vastu_section_tablet.scss';
import './why_vastu_section_mobile.scss';

const vastyPros = [
  {
    text: 'Дом, построенный по Васту, будет формировать необходимые человеку качества, способствовать его материальному и духовному процветанию',
    id: 1,
  },
  {
    text: 'Правильно рассчитанное пространство создает благоприятный эмоциональный фон, где отсутствуют условия для зарождения деструктивных мыслей',
    id: 2,
  },
  {
    text: 'Дом построенный по Васту, гармонирует с внешним пространством Земли и с внутренним пространством человека',
    id: 3,
  },
];

export const WhyVastuSection = (): JSX.Element => {
  return (
    <div className="whyVastuWrapper">
      <h2>почему васту</h2>
      <div className="whyVastuContent">
        <div className="whyVastuFirstContentSection">
          <div>
            <p>
              «Традиционная индийская наука есть наука о Материи и Энергии.
              Наука о Времени и Пространстве. Наука о Пространствах и
              Пространственных формах. Наука Звука и Света. Наука о Слове и
              Форме. Наука о Тонкой Вселенной и Тяжелой Вселенной. Это не
              философия и не религия.»
              <span> Доктор Г. Стхапати «Стхапатья Веда»</span>
            </p>
            <p className="notQuote">
              Уникальность Васту в том, что она вышла за границы материальных
              наук. До этого никто не объяснял духовный опыт, счастье,
              материальное процветание и физическое благополучие с научной точки
              зрения и математических основ.
            </p>
          </div>
          <div className="parushaWrapper">
            <img src={parushaBack} alt="" />
            <div className="parushaHolder" />
          </div>
        </div>
        <div className="vastuPros">
          {vastyPros.map(({ text, id }) => (
            <div key={id} className="prosItem">
              <div className="prosFlower">
                <div className="bl"></div>
                <div className="yel"></div>
                <div className="gra"></div>
                <div className="purp"></div>
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>{' '}
    </div>
  );
};
