import LandingCTA from "./LandingCTA";
import LandingHero from "./LandingHero";
import LandingPortfolio from "./LandingPortfolio";
import LandingPricing from "./LandingPricing";
import LandingStats from "./LandingStats";
import LandingWhy from "./LandingWhy";

export default function LandingSection() {
    return (
        <div className="landing-page">
            <LandingHero />
            <LandingWhy />
            <LandingStats />
            <LandingPortfolio />
            <LandingPricing />
            <LandingCTA />
        </div>
    );
}