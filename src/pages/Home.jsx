import React from 'react';
import Hero from '../components/Hero';
import ImageSlider from '../components/ImageSlider';
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
        {/* <Hero /> */}
        
        {/* Image Slider Section - Full Width */}
        <section className="pt-24 lg:pt-28">
          <ImageSlider />
        </section>

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
