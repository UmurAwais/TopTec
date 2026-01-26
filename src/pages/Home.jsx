import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import ProductCarousel from '../components/ProductCarousel';
import StatsSection from '../components/StatsSection';
import ProcessSection from '../components/ProcessSection';
import ComplianceSection from '../components/ComplianceSection';
import PartnersSection from '../components/PartnersSection';
import InsightsSection from '../components/InsightsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <div className="relative">
        <Hero />
        <CategorySection />
        <ProductCarousel />
        <StatsSection />
        <ProcessSection />
        <ComplianceSection />
        <PartnersSection />
        <InsightsSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Home;
