import React from 'react';
import doorOpened from 'assets/images/doorOpened.jpg';

import { ArrowButton } from './ArrowButton';

import './top_section_big_screen.scss';
import './top_section_tablet.scss';
import './top_section_mobile.scss';
import { TODO_TYPE } from 'types';

export const TopSection = ({ scrollIntoBottom }: TODO_TYPE): JSX.Element => {
  return (
    <div className="topLogoWrapper">
      <div className="topWrapperLeftSide">
        <p className="topVastuWord mobile">
          VASTU<span>SPACE</span>
        </p>
        <img
          src={doorOpened}
          className="doorOpenedImg"
          alt="doorOpenedImg"
          width="100%"
          height="700px"
        />
      </div>
      <div className="topWrapperRightSide">
        <p className="topSpaceWord">SPACE</p>
        <div className="rightBottomSloganWrapper">
          <p className="sloganText">Создаем пространства меняющие сознание</p>
          <ArrowButton {...{ scrollIntoBottom }} />
        </div>
      </div>
    </div>
  );
};
