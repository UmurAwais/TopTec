import React, { useEffect } from 'react';
import AboutHero from '../components/AboutHero';
import AboutStory from '../components/AboutStory';
import ExpertisePillars from '../components/ExpertisePillars';
import MissionVision from '../components/MissionVision';
import ContactSection from '../components/ContactSection';

const About = () => {
  useEffect(() => {
    document.title = "About TopTec | ISO Certified Cleanroom Manufacturer | Pharmaceutical Engineering";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      <AboutHero />
      <AboutStory />
      <ExpertisePillars />
      <MissionVision />
      <ContactSection />
    </main>
  );
};

export default About;
