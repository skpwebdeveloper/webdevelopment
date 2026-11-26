/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import ReviewsSection from './components/ReviewsSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#040712] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <ReviewsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
