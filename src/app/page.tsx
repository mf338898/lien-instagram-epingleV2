import { BonusesSection } from "@/components/BonusesSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { JestimonlineSection } from "@/components/JestimonlineSection";
import { FeesSection } from "@/components/FeesSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RoadmapSection />
      <TargetAudienceSection />
      <ComparisonSection />
      <FeesSection />
      <FAQSection />
      <JestimonlineSection />
      <BonusesSection />
      <Footer />
    </main>
  );
}
