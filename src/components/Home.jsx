import React from "react";
import Banner from "./Banner";
import CoursesSection from "./CoursesSection ";
import FrequentlyAsked from "./FrequentlyAsked";
import HowItWorks from "./HowItWorks";
import StatsSection from "./StatsSection ";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CoursesSection></CoursesSection>
      <HowItWorks></HowItWorks>
      <StatsSection></StatsSection>
      <FrequentlyAsked></FrequentlyAsked>
    </div>
  );
};

export default Home;
