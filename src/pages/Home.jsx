import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import StatsSection from '../components/StatsSection';

const Home = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <StatsSection />
      {/* Add more sections here later if needed */}
    </>
  );
};

export default Home;
