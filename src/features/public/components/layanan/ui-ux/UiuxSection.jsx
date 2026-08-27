import UiuxHero from "./UiuxHero";
import UiuxProcess from "./UiuxProcess";
import UiuxValueProps from "./UiuxValueProps";
import UiuxPortfolio from "./UiuxPortfolio";
import UiuxTools from "./UiuxTools";
import UiuxPricing from "./UiuxPricing";
import UiuxCTA from "./UiuxCTA";

export default function UiuxSection() {
  return (
    <div id="ui-ux-design">
      <UiuxHero />
      <UiuxProcess />
      <UiuxValueProps />
      <UiuxPortfolio />
      <UiuxTools />
      <UiuxPricing />
      <UiuxCTA />
    </div>
  );
}