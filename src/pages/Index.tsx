import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CaseStudies } from "@/components/CaseStudies";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="solutions">
        <Solutions />
      </div>
      <WhyChooseUs />
      <CaseStudies />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
