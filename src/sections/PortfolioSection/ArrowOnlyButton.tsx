import React from 'react';
import { TfiArrowRight } from 'react-icons/tfi';

import './arrow_only_button.scss';

export const ArrowOnlyButton = (): JSX.Element => {
  return (
    <button className="arrowOnlyBtn" onClick={() => ({})}>
      <div className="buttomLeftLine" />
      <TfiArrowRight color="#d8a27d" fontSize="60px" />
    </button>
  );
};
