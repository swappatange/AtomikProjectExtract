import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { AppDownloadSection } from "@/components/home/AppDownloadSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <AppDownloadSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
