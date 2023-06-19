import React from 'react';
import house from 'assets/images/house.png';
import './portfolio_section.scss';

const portfolioData = [
  {
    header: 'Квартиры',
    description: 'Васту дизайн интерьера дома «Солнечный», 160 кв. м',
    imageSrc: house,
    id: '1',
  },
  {
    header: 'Дома',
    description: 'Васту дизайн интерьера дома «Солнечный», 160 кв. м',
    imageSrc: house,
    id: '2',
  },
  {
    header: 'Комерческие помещения',
    description: 'Васту дизайн интерьера дома «Солнечный», 160 кв. м',
    imageSrc: house,
    id: '3',
  },
];

export const PortfolioSection = (): JSX.Element => {
  return (
    <div className="portfolioWrapper">
      <h2>Портфолио</h2>

      <div className="portfolioContent">
        {portfolioData.map(({ id, header, description, imageSrc }) => (
          <div key={id} className="portfolioItem">
            <h4>{header}</h4>
            <img src={imageSrc} alt="" />
            <div className="textWithArrowButton">
              <p>{description}</p>
              {/* TODO: */}
              {/* <button>arrow</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
