import Hero from "../components/Hero";
import StatsBanner from "../components/StatsBanner";
import TrustedBy from "../components/TrustedBy";
import ValueProp from "../components/ValueProp";
import ServicesHighlight from "../components/ServicesHighlight";
import CaseStudySpotlight from "../components/CaseStudySpotlight";

export default function BerandaPage() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <ValueProp />
      <StatsBanner />
      <ServicesHighlight />
      <CaseStudySpotlight />
    </div>
  );
}