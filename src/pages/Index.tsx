import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import WhyDSSection from "@/components/home/WhyDSSection";
import AboutSection from "@/components/home/AboutSection";
import ValuesSection from "@/components/home/ValuesSection";
import TeamSection from "@/components/home/TeamSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  const { t } = useTranslation();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "DS Education - Your Gateway to Global Education",
    "description": "Expert overseas education consulting for students in Cambodia and Southeast Asia. Study abroad in 9+ countries with 98% success rate.",
    "url": "https://dseducation.com/",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "DS Education",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500"
      }
    }
  };

  return (
    <Layout>
      <SEO 
        title={t("seo.home.title", "Your Gateway to Global Education")}
        description={t("seo.home.description", "Expert overseas education consulting for 9+ countries. Free consultation, visa assistance, and 98% success rate. Start your study abroad journey today.")}
        keywords={t("seo.home.keywords", "study abroad, overseas education, education consultant, DS Education, Cambodia, study in Singapore, study in UK, study in Australia, student visa, scholarship")}
        url="/"
        structuredData={structuredData}
      />
      <HeroSection />
      <StatsSection />
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
