import React from 'react';
import pr1 from 'assets/images/pr1.jpg';
import pr2 from 'assets/images/pr2.png';
import pr3 from 'assets/images/pr3.jpg';
import './portfolio_section.scss';
import { ArrowButtonForPortfolio } from './ArrowButtonForPortfolio';
import { ArrowOnlyButton } from './ArrowOnlyButton';

const portfolioData = [
  {
    description: 'Дом из клееного бруса, 234 кв.м.',
    imageSrc: pr1,
    id: '1',
  },
  {
    description: 'Дом с бельведером, 321 кв.м',
    imageSrc: pr2,
    id: '2',
  },
  {
    description: 'Одноэтажный жилой дом, 160 кв. м',
    imageSrc: pr3,
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
