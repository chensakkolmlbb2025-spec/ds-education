import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import { Languages, Plane, FileCheck, Building, GraduationCap, Home, LucideIcon } from "lucide-react";
import heroImage from "@/assets/hero-singapore.jpg";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ServiceConfig {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
  detailsKey?: string;
}

const serviceConfigs: ServiceConfig[] = [
  {
    icon: GraduationCap,
    titleKey: "services.consultation.title",
    descriptionKey: "services.consultation.description",
    detailsKey: "services.consultation.details",
  },
  {
    icon: Plane,
    titleKey: "services.studyTour.title",
    descriptionKey: "services.studyTour.description",
    detailsKey: "services.studyTour.details",
  },
  {
    icon: FileCheck,
    titleKey: "services.visa.title",
    descriptionKey: "services.visa.description",
  },
  {
    icon: Languages,
    titleKey: "services.translation.title",
    descriptionKey: "services.translation.description",
  },
  {
    icon: Building,
    titleKey: "services.foundation.title",
    descriptionKey: "services.foundation.description",
  },
  {
    icon: Home,
    titleKey: "services.accommodation.title",
    descriptionKey: "services.accommodation.description",
  },
];

const Services = () => {
  const { t } = useTranslation();
  const heroAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <motion.section 
        ref={heroAnimation.ref}
        initial="hidden"
        animate={heroAnimation.isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="relative py-20 md:py-32"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="ds-container relative z-10 text-center">
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            {t("services.pageTitle")}
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto"
          >
            {t("services.pageSubtitle")}
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="ds-section bg-background">
        <motion.div 
          ref={servicesAnimation.ref}
          initial="hidden"
          animate={servicesAnimation.isInView ? "visible" : "hidden"}
          variants={staggerContainer(0.1, 0.2)}
          className="ds-container"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {serviceConfigs.map((service, index) => {
              const details = service.detailsKey 
                ? (t(service.detailsKey, { returnObjects: true }) as string[])
                : [];
              
              return (
                <motion.div 
                  key={index} 
                  variants={scaleIn}
                  className={cn(
                    "rounded-xl p-6 md:p-8 transition-all duration-300 text-white group",
                    "backdrop-blur-glass-lg bg-gradient-to-br from-primary/80 to-primary/60",
                    "border border-white/20 shadow-xl hover:shadow-2xl",
                    "hover:-translate-y-1 overflow-hidden relative"
                  )}
                >
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10 rounded-xl pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  />
                  
                  <div className={cn(
                    "relative z-10 w-14 h-14 rounded-lg mb-5 flex items-center justify-center",
                    "backdrop-blur-md bg-white/20 border border-white/30",
                    "group-hover:bg-white/30 group-hover:scale-110 transition-all"
                  )}>
                    <service.icon className="h-7 w-7 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="relative z-10 text-xl font-bold mb-4">{t(service.titleKey)}</h3>
                  <p className="relative z-10 text-white/90 leading-relaxed mb-4">
                    {t(service.descriptionKey)}
                  </p>
                  {details.length > 0 && (
                    <ul className="relative z-10 space-y-2">
                      {details.map((detail, i) => (
                        <li key={i} className="text-sm text-white/85 flex items-start gap-2 drop-shadow">
                          <span className="text-accent mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Services;
