import Section from '@/components/external/hero/homeHero';
import React, { ReactNode } from 'react';
import SpecialMenu from './specialMenu';
import Slider from '@/components/ui/slider';
import Features from './features';

interface HomePageLayoutProps {
  children: ReactNode;
}

const HomePageLayout: React.FC<HomePageLayoutProps> = () => {
  return (
    <div>
      <Section />
      <SpecialMenu />
      <Features />
      <Slider />
    </div>
  );
};

export default HomePageLayout;
