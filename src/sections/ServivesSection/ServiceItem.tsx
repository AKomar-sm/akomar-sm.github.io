import React from 'react';
import './service_item.scss';
import { ArrowButtonForServices } from './ArrowButtonForServices';
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
