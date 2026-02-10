import { BonusesSection } from "@/components/BonusesSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { CurriculumSection } from "@/components/CurriculumSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { InvestToolsBanner } from "@/components/InvestToolsBanner";
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
      <CurriculumSection />
      <InvestToolsBanner />
      <BonusesSection />
      <Footer />
    </main>
  );
}
