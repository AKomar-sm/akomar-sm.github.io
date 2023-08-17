import React from 'react';
import { ArrowButtonForServices } from '../ArrowButtonForServices';

import './service_item_big_screen.scss';
import './service_item_tablet.scss';
import './service_item_mobile.scss';

interface WhyItemProps {
  header: string;
  text: string;
}

export const ServiceItem = ({ header, text }: WhyItemProps): JSX.Element => {
  return (
    <div className="serviceItemWrapper">
      <div className="headerContainer">
        <h3>{header}</h3>
      </div>
      <p className="itemUl">{text}</p>
      <ArrowButtonForServices />
    </div>
  );
};
