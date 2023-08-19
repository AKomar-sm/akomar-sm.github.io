import React from 'react';
import { RxArrowRight } from 'react-icons/rx';
import './arrow_button.scss';
import { TODO_TYPE } from 'types';

export const ArrowButton = ({ scrollIntoBottom }: TODO_TYPE): JSX.Element => {
  const onClick: TODO_TYPE = () =>
    window?.parent?.postMessage('scrollIntoBottomApp', '*');

  return (
    <button
      className="freeConsultingButton"
      onClick={onClick || scrollIntoBottom}
    >
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
