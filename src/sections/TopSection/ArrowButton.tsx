import React from 'react';
import { RxArrowRight } from 'react-icons/rx';
import './arrow_button.scss';

export const ArrowButton = (): JSX.Element => {
  return (
    <a href="#anchorB">
      <button className="freeConsultingButton">
        <div className="buttomLeftLine" />
        <div className="arrowInCercle">
          <RxArrowRight color="#d8a27d" fontSize="60px" />
        </div>
        <span>
          Получить <br />
          консультацию
        </span>
      </button>
    </a>
  );
};
