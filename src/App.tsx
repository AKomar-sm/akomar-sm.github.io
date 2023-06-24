import React, { useRef } from 'react';
import { TopSection } from './sections/TopSection';
import { AboutUsSection } from 'sections/AboutUsSection';
import { WhyVastuSection } from 'sections/WhyVastuSection';
import { ServicesSection } from 'sections/ServivesSection';

import './app.scss';
import './fonts/fonts.scss';
import { PortfolioSection } from 'sections/PortfolioSection/PortfolioSection';
import { FeedbackSection } from 'sections/FeedbackSection';

function App(): JSX.Element {
  const anchorRef = useRef<any>({});

  return (
    <div className="sectionsWrapper">
      <TopSection {...{ anchorRef }} />
      <AboutUsSection />
      <ServicesSection />
      <WhyVastuSection />
      <PortfolioSection />
      <FeedbackSection {...{ anchorRef }} />
    </div>
  );
}

export default App;
