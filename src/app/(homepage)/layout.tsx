import Section from '@/components/external/hero/homeHero';
import React from 'react';
import SpecialMenu from './specialMenu';
import Slider from '@/components/ui/slider';
import Features from './features';



const HomePageLayout = () => {
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
