import Hero from "../components/beranda/Hero";
import StatsBanner from "../components/beranda/StatsBanner";
import TrustedBy from "../components/beranda/TrustedBy";
import ValueProp from "../components/beranda/ValueProp";
import ServicesHighlight from "../components/beranda/ServicesHighlight";
import CaseStudySpotlight from "../components/beranda/CaseStudySpotlight";
import TechStackShowcase from "../components/beranda/TechStackShowcase";
import Testimonials from "../components/beranda/Testimonials";
import FAQ from "../components/beranda/FAQ";
import FinalCTA from "../components/beranda/FinalCTA";

export default function BerandaPage() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <ValueProp />
      <StatsBanner />
      <ServicesHighlight />
      <CaseStudySpotlight />
      <TechStackShowcase />
      <Testimonials />
      <FAQ />
      <FinalCTA />

    </div>
  );
}