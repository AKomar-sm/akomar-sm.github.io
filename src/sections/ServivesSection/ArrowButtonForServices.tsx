import React from 'react';
import { RxArrowRight } from 'react-icons/rx';

import './arrow_button_for_services.scss';
import { TODO_TYPE } from 'types';

export const ArrowButtonForServices = ({ onClick }: TODO_TYPE): JSX.Element => {
  return (
    <button className="freeConsultingButtonForServices" onClick={onClick}>
      <span>
        Бесплатная <br />
        консультация
      </span>
      <div className="buttomLeftLine" />
      <div className="arrowInCercle">
        <RxArrowRight color="#d8a27d" fontSize="60px" />
      </div>
    </button>
  );
};
