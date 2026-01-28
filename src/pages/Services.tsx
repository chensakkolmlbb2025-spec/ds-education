import Layout from "@/components/layout/Layout";
import { Languages, Plane, FileCheck, Building, GraduationCap, Home } from "lucide-react";
import heroImage from "@/assets/hero-singapore.jpg";

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad Consultation",
    description:
      "Our team will assist the students who wish to study overseas to their country of choice since the beginning of the process until the student graduate.",
    details: [
      "Consultation to the better choice of countries, subjects, university choices for students",
      "Admission application preparation and process",
      "Visa application process",
      "Accommodation advise",
      "Studying progression follow up",
    ],
  },
  {
    icon: Plane,
    title: "Study Tour",
    description:
      "We provide the students the experiences of studying and living overseas before they make their choice of foreign country to study.",
    details: [
      "During our study tour, the students will experience studying, living and the culture of the country they do the study tour.",
      "We are also assisting students and student parents to visit the schools or universities they wish to visit during the trip.",
    ],
  },
  {
    icon: FileCheck,
    title: "Visa Guidance",
    description:
      "We are providing the professional service for visa preparation and process for many types of visa to overseas.",
    details: [],
  },
  {
    icon: Languages,
    title: "Translation Service",
    description: "We provide translation service from the local language to English.",
    details: [],
  },
  {
    icon: Building,
    title: "DS Foundation",
    description:
      "DS Foundation is the foundation which is formed by DS Overseas Education Consultant in order to provide the opportunities to less fortune students from less developed areas in Cambodia to continue studying their degree.",
    details: [],
  },
  {
    icon: Home,
    title: "Accommodation Arrangement",
    description:
      "Our accommodation arrangement services help international students to find comfortable and affordable housing in their new country. We assist in securing the best options based on your budget and preferences to ensure a smooth transition and a great start to your academic journey.",
    details: [],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="ds-container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Explore more opportunities with our study abroad consultancy and services.
            We provide overseas placements, visa assistance, and translation services for a
            seamless experience. Our study tours and accommodation support ensure
            comfort that meet your needs. Embark your study abroad journey with us today
            and let us make your dreams a reality!
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="ds-section bg-background">
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="ds-card-navy">
                <div className="w-14 h-14 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-5">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.details.length > 0 && (
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="text-sm text-primary-foreground/80 flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
