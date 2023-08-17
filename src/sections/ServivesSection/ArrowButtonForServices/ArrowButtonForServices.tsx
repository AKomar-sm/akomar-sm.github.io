import React from 'react';
import { RxArrowRight } from 'react-icons/rx';

import './arrow_button_for_services.scss';

export const ArrowButtonForServices = (): JSX.Element => {
  return (
    <a href="#anchorB">
      <button className="freeConsultingButtonForServices">
        <span>
          Получить <br />
          консультацию
        </span>
        <div className="buttomLeftLine" />
        <div className="arrowInCercle">
          <RxArrowRight color="#d8a27d" fontSize="60px" />
        </div>
      </button>
    </a>
  );
};
