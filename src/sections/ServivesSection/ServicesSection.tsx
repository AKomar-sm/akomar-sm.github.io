import React from 'react';

import { ServiceItem } from './ServiceItem';

import family from 'assets/images/family.jpg';

import './service_section.scss';

const servicesContent = [
  {
    header: 'Проектирование ИЖС',
    text: '- Lorem ipsum dolor sit amet- consectetur adipiscing elit- sed do eiusmod tempor- incididunt ut labore et dolore- magna aliqua- Quis ipsum suspendisse',
    id: 1,
  },
  {
    header: 'консультации по подбору недвижимости',
    text: '- Lorem ipsum dolor sit amet- consectetur adipiscing elit- sed do eiusmod tempor- incididunt ut labore et dolore- magna aliqua- Quis ipsum suspendisse',
    id: 2,
  },
  {
    header: 'энергетическая коррекция помещений',
    text: '- Lorem ipsum dolor sit amet- consectetur adipiscing elit- sed do eiusmod tempor- incididunt ut labore et dolore- magna aliqua- Quis ipsum suspendisse',
    id: 3,
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <div className="ServicesWrapper">
      <h2>УСЛУГИ</h2>
      <img src={family} alt="" width="100%" className="familyImage" />
      <div className="itemsWrapper">
        {servicesContent.map((data) => (
          <ServiceItem key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};
