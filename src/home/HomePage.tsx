import * as React from 'react';
import HomeEvents from './HomeEvents';
import HomeHeader from './HomeHeader';
import HomeWeddingPartyCarousel from './HomeWeddingPartyCarousel';
import HomeFAQ from './HomeFAQ';

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <HomeEvents />
      <HomeWeddingPartyCarousel />
      <HomeFAQ />
    </>
  );
};

export default HomePage;
