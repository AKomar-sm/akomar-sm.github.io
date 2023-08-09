import React, { MouseEventHandler } from 'react';
import { polyfill } from 'seamless-scroll-polyfill';

import { ArrowButtonForServices } from '../ArrowButtonForServices';

import './service_item_big_screen.scss';
import './service_item_tablet.scss';
import './service_item_mobile.scss';

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

  polyfill();

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
