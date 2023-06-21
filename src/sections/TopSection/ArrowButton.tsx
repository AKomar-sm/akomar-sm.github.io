import React from 'react';
import { RxArrowRight } from 'react-icons/rx';
import './arrow_button.scss';

export const ArrowButton = (): JSX.Element => {
  return (
    <button className="freeConsultingButton" onClick={() => ({})}>
      <div className="buttomLeftLine" />
      <div className="arrowInCercle">
        <RxArrowRight color="#d8a27d" fontSize="60px" />
      </div>
      <span>
        Бесплатная <br />
        консультация
      </span>
    </button>
  );
};
