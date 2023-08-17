import React, { useRef, MouseEventHandler } from 'react';

import { TopSection } from './sections/TopSection';
import { AboutUsSection } from 'sections/AboutUsSection';
import { WhyVastuSection } from 'sections/WhyVastuSection';
import { ServicesSection } from 'sections/ServivesSection';
import { PortfolioSection } from 'sections/PortfolioSection/PortfolioSection';
import { FeedbackSection } from 'sections/FeedbackSection';

import { sayswho } from 'helpers';

import './app.scss';
import './fonts/fonts.scss';

function App(): JSX.Element {
  const anchorRef = useRef<any>({});

  const behavior = sayswho.toLowerCase().match(/(safari [1-9])/)?.length
    ? undefined
    : 'smooth';
  const scrollIntoBottom: MouseEventHandler<HTMLButtonElement> = () => {
    anchorRef.current.scrollIntoView({
      behavior,
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
