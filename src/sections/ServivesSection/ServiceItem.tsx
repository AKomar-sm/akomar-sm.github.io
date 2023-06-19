import React from 'react';
import './service_item.scss';
// import arrowButton from 'assets/images/arrowButton.png';
interface WhyItemProps {
  header: string;
  text: string;
}

export const ServiceItem = ({ header, text }: WhyItemProps): JSX.Element => {
  return (
    <div className="servicesWrapper">
      <h3>{header}</h3>
      <ul className="itemUl">
        {text.split('-').map((liText: string, idx) => (
          <li key={idx}>{liText}</li>
        ))}
      </ul>
      <button className="freeConsultingItemButton">
        <span>Бесплатная консультация</span>
        {/* TODO: */}
        {/* <img src={arrowButton} alt="" /> */}
      </button>
    </div>
  );
};
