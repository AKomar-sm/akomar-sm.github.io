import React from 'react';
import doorOpened from 'assets/images/doorOpened.jpg';
import arrowButton from 'assets/images/arrowButton.png';
import './top_section.scss';

export const TopSection = (): JSX.Element => {
  return (
    <div className="topLogoWrapper">
      <div className="topWrapperLeftSide">
        <p className="topVastuWord">VASTU</p>
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
          <button className="freeConsultingButton">
            <img src={arrowButton} alt="" />
            <span>Бесплатная консультация</span>
          </button>
        </div>
      </div>
    </div>
  );
};
