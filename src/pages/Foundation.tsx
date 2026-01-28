import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-singapore.jpg";
import { Building, Heart, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Foundation = () => {
  const { t } = useTranslation();
  const heroAnimation = useScrollAnimation();
  const aboutAnimation = useScrollAnimation();
  const impactAnimation = useScrollAnimation();

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
            {t("foundation.pageTitle")}
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto"
          >
            {t("foundation.pageSubtitle")}
          </motion.p>
        </div>
      </motion.section>

      {/* About Foundation */}
      <section className="ds-section bg-background">
        <div className="ds-container">
          <motion.div 
            ref={aboutAnimation.ref}
            initial="hidden"
            animate={aboutAnimation.isInView ? "visible" : "hidden"}
            variants={staggerContainer(0.15, 0.2)}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="ds-heading text-center mb-8">{t("foundation.aboutTitle")}</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-center leading-relaxed mb-12">
              {t("foundation.aboutDescription")}
            </motion.p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={scaleIn} className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{t("foundation.compassion.title")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("foundation.compassion.description")}
                </p>
              </motion.div>
              <motion.div variants={scaleIn} className="text-center p-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{t("foundation.opportunity.title")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("foundation.opportunity.description")}
                </p>
              </motion.div>
              <motion.div variants={scaleIn} className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{t("foundation.community.title")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("foundation.community.description")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="ds-section bg-muted">
        <motion.div 
          ref={impactAnimation.ref}
          initial="hidden"
          animate={impactAnimation.isInView ? "visible" : "hidden"}
          variants={staggerContainer(0.15, 0.3)}
          className="ds-container"
        >
          <motion.h2 variants={fadeInUp} className="ds-heading text-center mb-12">{t("foundation.impactTitle")}</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div 
              variants={scaleIn}
              className={cn(
                "p-8 rounded-xl text-center backdrop-blur-glass-lg",
                "bg-white/40 border border-white/40",
                "shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              )}
            >
              <div className="text-4xl font-bold text-accent drop-shadow-md mb-2">50+</div>
              <p className="text-muted-foreground">{t("foundation.studentsSupported")}</p>
            </motion.div>
            <motion.div 
              variants={scaleIn}
              className={cn(
                "p-8 rounded-xl text-center backdrop-blur-glass-lg",
                "bg-white/40 border border-white/40",
                "shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              )}
            >
              <div className="text-4xl font-bold text-accent drop-shadow-md mb-2">10+</div>
              <p className="text-muted-foreground">{t("foundation.partnerUniversities")}</p>
            </motion.div>
            <motion.div 
              variants={scaleIn}
              className={cn(
                "p-8 rounded-xl text-center backdrop-blur-glass-lg",
                "bg-white/40 border border-white/40",
                "shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              )}
            >
              <div className="text-4xl font-bold text-accent drop-shadow-md mb-2">5</div>
              <p className="text-muted-foreground">{t("foundation.countries")}</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Foundation;
