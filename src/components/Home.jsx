import React from "react";
import Banner from "./Banner";
import FrequentlyAsked from "./FrequentlyAsked";
import HowItWorks from "./HowItWorks";
import StatsSection from "./StatsSection ";
import TestimonialSection from "./TestimonialSection ";
import CallToAction from "./CallToAction ";
import Newsletter from "./Newsletter";
import WhatWeOffer from "./WhatWeOffer";

const Home = () => {
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
