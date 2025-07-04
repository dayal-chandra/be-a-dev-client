import React from "react";
import Banner from "./Banner";
import CoursesSection from "./CoursesSection ";
import FrequentlyAsked from "./FrequentlyAsked";
import HowItWorks from "./HowItWorks";
import StatsSection from "./StatsSection ";
import TestimonialSection from "./TestimonialSection ";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CoursesSection></CoursesSection>
      <HowItWorks></HowItWorks>
      <StatsSection></StatsSection>
      <TestimonialSection></TestimonialSection>
      <FrequentlyAsked></FrequentlyAsked>
    </div>
  );
};

export default Home;
