import { Languages, Plane, FileCheck, Building, GraduationCap, Home } from "lucide-react";

const services = [
  {
    icon: Languages,
    title: "Translation Service",
    description:
      "We provide translation service from the local language to English.",
  },
  {
    icon: Plane,
    title: "Study Tour",
    description:
      "We provide the students the experiences of studying and living overseas before they make their choice of foreign country to study.",
  },
  {
    icon: FileCheck,
    title: "Visa Service",
    description:
      "We are providing the professional service for visa preparation and process for many types of visa to overseas.",
  },
  {
    icon: GraduationCap,
    title: "Study Abroad Consultation",
    description:
      "Our team will assist the students who wish to study overseas to their country of choice since the beginning of the process until the student graduate.",
  },
  {
    icon: Building,
    title: "DS Foundation",
    description:
      "DS Foundation is the foundation which is formed by DS Overseas Education Consultant in order to provide the opportunities to less fortune students from less developed areas in Cambodia to continue studying their degree.",
  },
  {
    icon: Home,
    title: "Accommodation Arrangement",
    description:
      "Our accommodation arrangement services help international students to find comfortable and affordable housing in their new country.",
  },
];

const ServicesSection = () => {
  return (
    <section className="ds-section bg-muted">
      <div className="ds-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="ds-heading mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="ds-card-navy">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
