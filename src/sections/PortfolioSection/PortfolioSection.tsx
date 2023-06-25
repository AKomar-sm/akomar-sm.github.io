import React from 'react';
import house from 'assets/images/house.png';
import './portfolio_section.scss';
import { ArrowButtonForPortfolio } from './ArrowButtonForPortfolio';
import { ArrowOnlyButton } from './ArrowOnlyButton';

const portfolioData = [
  {
    description: 'Васту дизайн интерьера дома «Солнечный», 160 кв. м',
    imageSrc: house,
    id: '1',
  },
  {
    description: 'Васту дизайн интерьера дома «Солнечный», 160 кв. м',
    imageSrc: house,
    id: '2',
  },
  {
    description: 'Васту дизайн интерьера дома «Солнечный», 160 кв. м',
    imageSrc: house,
    id: '3',
  },
];

export const PortfolioSection = (): JSX.Element => {
  return (
    <div className="portfolioWrapper">
      <h2>Проекты</h2>
      <div className="portfolioContent">
        {portfolioData.map(({ id, description, imageSrc }) => (
          <div key={id} className="portfolioItem">
            <img src={imageSrc} alt="" />
            <div className="textWithArrowButton">
              <p>{description}</p>
              <ArrowOnlyButton />
            </div>
          </div>
        ))}
      </div>
      <div className="portfolioBtnContainer">
        <ArrowButtonForPortfolio />
      </div>
    </div>
  );
};
