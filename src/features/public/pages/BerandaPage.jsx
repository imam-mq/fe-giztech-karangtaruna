import Hero from "../components/Hero";
import StatsBanner from "../components/StatsBanner";
import TrustedBy from "../components/TrustedBy";
import ValueProp from "../components/ValueProp";
import ServicesHighlight from "../components/ServicesHighlight";
import CaseStudySpotlight from "../components/CaseStudySpotlight";
import TechStackShowcase from "../components/TechStackShowcase";
import Testimonials from "../components/Testimonials";

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
    </div>
  );
}