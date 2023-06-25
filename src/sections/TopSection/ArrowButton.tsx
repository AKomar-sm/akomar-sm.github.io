import React, { MouseEventHandler } from 'react';
import { RxArrowRight } from 'react-icons/rx';
import './arrow_button.scss';

interface ArrowButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const ArrowButton = ({ onClick }: ArrowButtonProps): JSX.Element => {
  return (
    <button className="freeConsultingButton" onClick={onClick}>
      <div className="buttomLeftLine" />
      <div className="arrowInCercle">
        <RxArrowRight color="#d8a27d" fontSize="60px" />
      </div>
      <span>
        Получить <br />
        консультацию
      </span>
    </button>
  );
};
