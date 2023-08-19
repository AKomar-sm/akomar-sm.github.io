import React from 'react';
import { RxArrowRight } from 'react-icons/rx';

import './arrow_button_for_services.scss';
import { TODO_TYPE } from 'types';

export const ArrowButtonForServices = ({
  scrollIntoBottom,
}: TODO_TYPE): JSX.Element => {
  const onClick: TODO_TYPE = () =>
    window?.parent?.postMessage('scrollIntoBottom', '*');

  return (
    <a href="#anchorB">
      <button
        className="freeConsultingButtonForServices"
        onClick={onClick || scrollIntoBottom}
      >
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
