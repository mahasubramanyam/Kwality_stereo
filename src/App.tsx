import { useState } from 'react';
import Header from './components/Header';
import ClarificationNotice from './components/ClarificationNotice';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ProductsServices from './components/ProductsServices';
import PlateVisualizer from './components/PlateVisualizer';
import IndustriesServed from './components/IndustriesServed';
import GalleryPortfolio from './components/GalleryPortfolio';
import QuoteEstimator from './components/QuoteEstimator';
import LocationsDelivery from './components/LocationsDelivery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { PortfolioItem } from './data/businessData';

export default function App() {
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('all');
  const [quoteEstimatorInitialBag, setQuoteEstimatorInitialBag] = useState<string>('cattle-feed-50');

  const scrollToQuoteEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuoteWithItem = (item: PortfolioItem) => {
    if (item.category === 'cattle-feed') {
      setQuoteEstimatorInitialBag('cattle-feed-50');
    } else if (item.category === 'flour-mill') {
      setQuoteEstimatorInitialBag('atta-flour-50');
    }
    scrollToQuoteEstimator();
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 pb-14 sm:pb-0">
      {/* Header with Navigation & Call Actions */}
      <Header onOpenQuote={scrollToQuoteEstimator} />

      {/* Industrial Clarification Banner */}
      <ClarificationNotice />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuote={scrollToQuoteEstimator} />

        {/* About Us (Mohan, Facilities, Pan-India Reach) */}
        <AboutUs />

        {/* Products & Services (Custom engraving, multi-language, bulk L30x10) */}
        <ProductsServices onOpenQuote={scrollToQuoteEstimator} />

        {/* Interactive Stereo-to-Bag Visualizer */}
        <PlateVisualizer />

        {/* Industries Served (Cattle Feed, Poultry, Flour Mill, Fertilizer) */}
        <IndustriesServed
          onOpenQuote={scrollToQuoteEstimator}
          onSelectCategory={(cat) => {
            setSelectedGalleryCategory(cat);
          }}
        />

        {/* Gallery / Portfolio (Samrudhi Milk Gain, Chunni, Hariom Gold, Star, Kohinoor, Tamil, Punjabi, Hindi, Bengali, Borders) */}
        <GalleryPortfolio
          selectedCategory={selectedGalleryCategory}
          onCategoryChange={setSelectedGalleryCategory}
          onOpenQuoteWithItem={handleOpenQuoteWithItem}
        />

        {/* Interactive Stereo Specification Estimator & 1-Click WhatsApp */}
        <QuoteEstimator initialBagType={quoteEstimatorInitialBag} />

        {/* Locations (Krishnagiri & Bangalore, Pan-India Dispatch) */}
        <LocationsDelivery />

        {/* Contact Section (Mohan, Phone: 90490 98150, Email, Form, FAQ) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Dial & WhatsApp Bar */}
      <FloatingActions />
    </div>
  );
}
