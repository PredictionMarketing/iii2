import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import WhatYouGetSection from "@/components/landing/WhatYouGetSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => (
  <div className="min-h-screen">
    <SiteHeader />
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhatYouGetSection />
      <CTASection />
    </main>
    <SiteFooter />
  </div>
);

export default Index;
