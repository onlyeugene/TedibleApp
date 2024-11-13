'use client'

import React from "react";
import SpecialMenu from "./specialMenu";
import Slider from "@/components/ui/slider";
import Features from "./features";
import InfoPage from "@/components/vendor-info";
import { useSession } from "next-auth/react";
import Hero from "@/components/external/hero/homeHero";

const HomePageLayout: React.FC = () => {
  const { data: session } = useSession();

  return (
    <>
      <Hero/>
      <SpecialMenu />
      <Slider />
      <Features />
      {!session && <InfoPage />}
    </>
  );
};

export default HomePageLayout;
