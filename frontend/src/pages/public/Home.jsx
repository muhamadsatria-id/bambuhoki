import HeroCollage from '../../components/common/HeroCollage';
import ProductShowcase from '../../components/common/ProductShowcase';
import FeatureGrid from '../../components/common/FeatureGrid';
import CtaBanner from '../../components/common/CtaBanner';
import FaqSection from '../../components/common/FaqSection';
import ContactSection from '../../components/common/ContactSection';
import AboutSection from '../../components/common/AboutSection';
/**
 * Home page composition only. Every section lives in
 * `src/components/common/` so it can be edited in isolation.
 */
const Home = () => {
  return (
    <div className="font-sf">
      <HeroCollage />
      <AboutSection />
      <ProductShowcase />
      <FeatureGrid />
      <FaqSection />
      {/* <ContactSection /> */}
      <CtaBanner />
    </div>
  );
};

export default Home;
