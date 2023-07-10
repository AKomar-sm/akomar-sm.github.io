import React from 'react';
import { TfiArrowRight } from 'react-icons/tfi';

import './arrow_only_button.scss';
import { TODO_TYPE } from 'types';

export const ArrowOnlyButton = ({ uid }: { uid: string }): JSX.Element => {
  const onClick = (event: TODO_TYPE): TODO_TYPE => {
    console.log('btn click! RJS');
    window.parent.postMessage(uid + JSON.stringify(event), '*');
  };

  return (
    <button className="arrowOnlyBtn" onClick={onClick} id={uid}>
      <div className="buttomLeftLine" />
      <TfiArrowRight color="#d8a27d" fontSize="60px" />
    </button>
  );
};
