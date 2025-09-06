import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CaseStudies } from "@/components/CaseStudies";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Solutions />
      <WhyChooseUs />
      <CaseStudies />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
