import React, { useEffect } from "react";
import Banner from "../components/Banner";
import WhatWeOffer from "../components/WhatWeOffer";
import HowItWorks from "../components/HowItWorks";
import StatsSection from "../components/StatsSection ";
import TestimonialSection from "../components/TestimonialSection ";
import CallToAction from "../components/CallToAction ";
import FrequentlyAsked from "../components/FrequentlyAsked";
import Newsletter from "../components/Newsletter";

const Home = () => {
  useEffect(() => {
    document.title = "Be-A-Dev | Home";
  });

  return (
    <div>
      <Banner></Banner>
      <WhatWeOffer></WhatWeOffer>
      <HowItWorks></HowItWorks>
      <StatsSection></StatsSection>
      <TestimonialSection></TestimonialSection>
      <CallToAction></CallToAction>
      <FrequentlyAsked></FrequentlyAsked>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
