import React, { useState } from 'react';
import pr1 from 'assets/images/pr1.jpg';
import pr2 from 'assets/images/pr2.png';
import pr3 from 'assets/images/pr3.jpg';
import { ArrowButtonForPortfolio } from './ArrowButtonForPortfolio/ArrowButtonForPortfolio';
import { ArrowOnlyButton } from './ArrowOnlyButton/ArrowOnlyButton';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { BsDot } from 'react-icons/bs';
import './portfolio_section_mobile.scss';
import './portfolio_section_tablet.scss';
import './portfolio_section_big_screen.scss';
import { TODO_TYPE } from 'types';

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
  const [mobileVisibleItemId, setMobileVisibleItemId] = useState(
    portfolioData[0].id
  );

  const onPrevClick = (): TODO_TYPE => {
    const currentIndex = portfolioData.findIndex(
      ({ id }) => id === mobileVisibleItemId
    );
    let nextIndex;
    if (currentIndex === 0) {
      nextIndex = portfolioData.length - 1;
    } else {
      nextIndex = currentIndex - 1;
    }
    console.log('for prev', { currentIndex, nextIndex });
    setMobileVisibleItemId(portfolioData[nextIndex].id);
  };

  const onNextClick = (): TODO_TYPE => {
    const currentIndex = portfolioData.findIndex(
      ({ id }) => id === mobileVisibleItemId
    );

    let nextIndex;
    if (currentIndex + 1 === portfolioData.length) {
      nextIndex = 0;
    } else {
      nextIndex = currentIndex + 1;
    }
    setMobileVisibleItemId(portfolioData[nextIndex].id);
  };

  return (
    <div className="portfolioWrapper">
      <h2>Проекты</h2>
      <div className="portfolioContent">
        {portfolioData.map(({ id, description, imageSrc }) => (
          <div
            key={id}
            className={`portfolioItem ${
              id === mobileVisibleItemId ? '' : 'invisible'
            }`}
          >
            <button className="leftButton" onClick={onPrevClick}>
              <IoIosArrowBack />
            </button>
            <button className="rightButton" onClick={onNextClick}>
              <IoIosArrowForward />
            </button>

            <img src={imageSrc} alt="" />
            <div className="textWithArrowButton">
              <p>{description}</p>
              <ArrowOnlyButton />
            </div>
          </div>
        ))}

        <div className="dotsPositioning">
          {portfolioData.map(({ id }) => (
            <BsDot
              key={id}
              color={id === mobileVisibleItemId ? '#d1afaf' : '#5b5b68'}
            />
          ))}
        </div>
      </div>
      <div className="portfolioBtnContainer">
        <ArrowButtonForPortfolio />
      </div>
    </div>
  );
};
