import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhyDSSection from "@/components/home/WhyDSSection";
import AboutSection from "@/components/home/AboutSection";
import ValuesSection from "@/components/home/ValuesSection";
import TeamSection from "@/components/home/TeamSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyDSSection />
      <AboutSection />
      <ValuesSection />
      <TeamSection />
      <ServicesSection />
      <TestimonialSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
