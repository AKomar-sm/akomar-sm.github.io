import React, { MouseEventHandler, useRef } from 'react';

import { TopSection } from './sections/TopSection';
import { AboutUsSection } from 'sections/AboutUsSection';
import { WhyVastuSection } from 'sections/WhyVastuSection';
import { ServicesSection } from 'sections/ServivesSection';
import { PortfolioSection } from 'sections/PortfolioSection/PortfolioSection';
import { FeedbackSection } from 'sections/FeedbackSection';

import './app.scss';
import './fonts/fonts.scss';

function App(): JSX.Element {
  const anchorRef = useRef<any>({});

  const scrollIntoBottom: MouseEventHandler<HTMLButtonElement> = () => {
    anchorRef.current.scrollIntoView({
      block: 'start',
      inline: 'nearest',
    });
  };
  return (
    <div className="sectionsWrapper">
      <TopSection {...{ scrollIntoBottom }} />
      <AboutUsSection />
      <ServicesSection {...{ scrollIntoBottom }} />
      <WhyVastuSection />
      <PortfolioSection />
      <FeedbackSection {...{ anchorRef }} />
    </div>
  );
}

export default App;
