import React, { MouseEventHandler } from 'react';
import './service_item.scss';
import { ArrowButtonForServices } from './ArrowButtonForServices';

import { TODO_TYPE } from 'types';
interface WhyItemProps {
  header: string;
  text: string;
  anchorRef: TODO_TYPE;
}

export const ServiceItem = ({
  header,
  text,
  anchorRef,
}: WhyItemProps): JSX.Element => {
  const onArrowBtnClick: MouseEventHandler<HTMLButtonElement> = () => {
    anchorRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <div className="serviceItemWrapper">
      <div className="headerContainer">
        <h3>{header}</h3>
      </div>
      <p className="itemUl">{text}</p>
      <ArrowButtonForServices onClick={onArrowBtnClick} />
    </div>
  );
};
