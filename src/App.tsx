import React from 'react';
import { TopSection } from './sections/TopSection';
import { AboutUsSection } from 'sections/AboutUsSection';
import { WhyVastuSection } from 'sections/WhyVastuSection';
import { ServicesSection } from 'sections/ServivesSection';
import { PortfolioSection } from 'sections/PortfolioSection/PortfolioSection';
import { FeedbackSection } from 'sections/FeedbackSection';

import './app.scss';
import './fonts/fonts.scss';

function App(): JSX.Element {
  return (
    <div className="sectionsWrapper">
      <TopSection />
      <AboutUsSection />
      <ServicesSection />
      <WhyVastuSection />
      <PortfolioSection />
      <FeedbackSection />
    </div>
  );
}

export default App;
