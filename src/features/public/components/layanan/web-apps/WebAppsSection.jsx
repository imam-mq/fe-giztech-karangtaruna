import WebAppsHero from "./WebAppsHero";
import WebAppsValueProps from "./WebAppsValueProps";
import WebAppsTechStack from "./WebAppsTechStack";
import WebAppsPricing from "./WebAppsPricing";
import WebAppsCTA from "./WebAppsCTA";

export default function WebAppsSection() {
  return (
    <div id="web-apps">
      <WebAppsHero />
      <WebAppsValueProps />
      <WebAppsTechStack />
      <WebAppsPricing />
      <WebAppsCTA />
    </div>
  );
}