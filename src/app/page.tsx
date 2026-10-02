import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { QuickTeaser } from "@/components/home/quick-teaser";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-0">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <QuickTeaser />
    </div>
  );
}
