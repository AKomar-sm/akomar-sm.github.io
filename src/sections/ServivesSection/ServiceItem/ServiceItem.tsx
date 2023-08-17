import React from 'react';
import { ArrowButtonForServices } from '../ArrowButtonForServices';

import './service_item_big_screen.scss';
import './service_item_tablet.scss';
import './service_item_mobile.scss';
import { TODO_TYPE } from 'types';

interface WhyItemProps {
  header: string;
  text: string;
  scrollIntoBottom: TODO_TYPE;
}

export const ServiceItem = ({
  header,
  text,
  scrollIntoBottom,
}: WhyItemProps): JSX.Element => {
  return (
    <div className="serviceItemWrapper">
      <div className="headerContainer">
        <h3>{header}</h3>
      </div>
      <p className="itemUl">{text}</p>
      <ArrowButtonForServices {...{ scrollIntoBottom }} />
    </div>
  );
};
