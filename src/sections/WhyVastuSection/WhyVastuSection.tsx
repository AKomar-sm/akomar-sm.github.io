import React from 'react';
import './why_vastu_section.scss';
import parushtu from 'assets/images/parushtu.png';

const vastyPros = [
  {
    text: 'Дом, выполненный по правилам Васту, принесет удачу, здоровье и счастье его жильцам',
    id: 1,
  },
  {
    text: 'Дом по Васту оберегает семью, помогает духовному и материальному развитию',
    id: 2,
  },
  {
    text: 'Научно доказано, что Ватсу дома меняют жизнь владельцев в лучшую сторону',
    id: 3,
  },
];

export const WhyVastuSection = (): JSX.Element => {
  return (
    <div className="whyVastuWrapper">
      <h2>почему васту</h2>
      <div className="whyVastuContent">
        <div className="whyVastuFirstContentSection">
          <p>
            «Традиционная индийская наука есть наука о Материи и Энергии. Наука
            о Времени и Пространстве. Наука о Пространствах и Пространственных
            формах. Наука Звука и Света. Наука о Слове и Форме. Наука о Тонкой
            Вселенной и Тяжелой Вселенной. Это не философия и не религия.»
            <span> Доктор Г. Стхапати «Стхапатья Веда»</span>
          </p>
          <img src={parushtu} alt="" />
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
      </div>
    </div>
  );
};
