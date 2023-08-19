import React from 'react';
import { RxArrowRight } from 'react-icons/rx';

import { TODO_TYPE } from 'types';

import './arrow_button_for_portfolio.scss';

export const ArrowButtonForPortfolio = (): JSX.Element => {
  const onClick = (): TODO_TYPE =>
    window?.parent?.postMessage('allProjectsBtnClick', '*'); // here

  return (
    <button className="freeConsultingButtonForPortfolio" onClick={onClick}>
      <span>Все проекты</span>
      <div className="buttomLeftLine" />
      <div className="arrowInCercle">
        <RxArrowRight color="#d8a27d" fontSize="60px" />
      </div>
    </button>
  );
};
