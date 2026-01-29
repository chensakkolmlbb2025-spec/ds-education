import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Languages, Plane, FileCheck, Building, GraduationCap, Home, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ButtonDS } from "@/components/ui/button-ds";
import { fadeInUp, staggerContainer, cardHover, scaleIn } from "@/lib/animations";

const servicesConfig = [
  {
    icon: Languages,
    titleKey: "services.translation.title",
    descriptionKey: "services.translation.description",
    color: "from-blue-500 to-blue-600",
    link: "/services#translation",
  },
  {
    icon: Plane,
    titleKey: "services.studyTour.title",
    descriptionKey: "services.studyTour.description",
    color: "from-emerald-500 to-emerald-600",
    link: "/services#study-tour",
  },
  {
    icon: FileCheck,
    titleKey: "services.visa.title",
    descriptionKey: "services.visa.description",
    color: "from-purple-500 to-purple-600",
    link: "/services#visa",
  },
  {
    icon: GraduationCap,
    titleKey: "services.consultation.title",
    descriptionKey: "services.consultation.description",
    color: "from-orange-500 to-orange-600",
    link: "/services#consultation",
  },
  {
    icon: Building,
    titleKey: "services.foundation.title",
    descriptionKey: "services.foundation.description",
    color: "from-cyan-500 to-cyan-600",
    link: "/services#foundation",
  },
  {
    icon: Home,
    titleKey: "services.accommodation.title",
    descriptionKey: "services.accommodation.description",
    color: "from-rose-500 to-rose-600",
    link: "/services#accommodation",
  },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="ds-section bg-gradient-to-b from-muted to-background">
      <div className="ds-container">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer()}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3"
          >
            {t("services.subtitle", "What We Offer")}
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="ds-heading mb-4"
          >
            {t("services.title")}
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="ds-subheading max-w-2xl mx-auto"
          >
            {t("services.intro", "Comprehensive education services to support your journey from start to finish")}
          </motion.p>
          <motion.div 
            variants={scaleIn}
            className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-6 rounded-full" 
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer()}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {servicesConfig.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <Link
                to={service.link}
                className={cn(
                  "group relative bg-primary rounded-2xl p-6 md:p-8 block",
                  "overflow-hidden transition-all duration-300",
                  "hover:-translate-y-2 hover:shadow-2xl",
                  "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                )}
              >
                {/* Background gradient on hover */}
                <div 
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    "bg-gradient-to-br",
                    service.color
                  )}
                />
                
                {/* Card content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
                    "bg-white/10 group-hover:bg-white/20 transition-colors duration-300"
                  )}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white">
                    {t(service.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/70 group-hover:text-white/90 leading-relaxed mb-4 line-clamp-3">
                    {t(service.descriptionKey)}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center gap-2 text-white/90 group-hover:text-white font-medium text-sm transition-colors">
                    <span>{t("common.learnMore")}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div 
                  className={cn(
                    "absolute -bottom-8 -right-8 w-32 h-32 rounded-full",
                    "bg-white/5 group-hover:bg-white/10 transition-all duration-300",
                    "group-hover:scale-150"
                  )}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <Link to="/services">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ButtonDS variant="outline" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                {t("services.viewAll", "View All Services")}
              </ButtonDS>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
