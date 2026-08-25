import ProfileHero from "../components/profile/ProfileHero";
import ProfileVisiMisi from "../components/profile/ProfileVisiMisi";
import ProfileValues from "../components/profile/ProfileValues";
import ProfileTimeline from "../components/profile/ProfileTimeline";
import ProfileStats from "../components/profile/ProfileStats";
import ProfileWorkflow from "../components/profile/ProfileWorkflow";
import ProfileCTA from "../components/profile/ProfileCTA";

export default function TentangKamiPage() {
  return (
    <div>
      <ProfileHero />
      <ProfileVisiMisi />
      <ProfileValues />
      <ProfileTimeline />
      <ProfileStats />
      <ProfileWorkflow />
      <ProfileCTA />
    </div>
  );
}