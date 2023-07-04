import React from 'react';
import { RxArrowRight } from 'react-icons/rx';

import './arrow_button_for_portfolio.scss';

export const ArrowButtonForPortfolio = (): JSX.Element => {
  return (
    <button className="freeConsultingButtonForPortfolio" onClick={() => ({})}>
      <span>Все проекты</span>
      <div className="buttomLeftLine" />
      <div className="arrowInCercle">
        <RxArrowRight color="#d8a27d" fontSize="60px" />
      </div>
    </button>
  );
};
