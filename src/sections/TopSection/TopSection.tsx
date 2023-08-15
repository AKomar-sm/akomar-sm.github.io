import React, { MouseEventHandler } from 'react';
import doorOpened from 'assets/images/doorOpened.jpg';

import { ArrowButton } from './ArrowButton';

import './top_section_big_screen.scss';
import './top_section_tablet.scss';
import './top_section_mobile.scss';
import { smoothScrollTo } from 'helpers';

export const TopSection = (): JSX.Element => {
  const onArrowButtonClick:
    | MouseEventHandler<HTMLButtonElement>
    | any = async () => {
    await smoothScrollTo();
  };
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
          <ArrowButton onClick={onArrowButtonClick} />
        </div>
      </div>
    </div>
  );
};
