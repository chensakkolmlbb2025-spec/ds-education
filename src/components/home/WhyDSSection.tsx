import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Shield, Clock, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonDS } from "@/components/ui/button-ds";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

// Why choose us features
const features = [
  {
    icon: Shield,
    titleKey: "whyDS.features.free.title",
    descriptionKey: "whyDS.features.free.description",
    fallbackTitle: "Free Consultation",
    fallbackDesc: "No hidden fees or charges for our expert guidance",
  },
  {
    icon: Clock,
    titleKey: "whyDS.features.fast.title",
    descriptionKey: "whyDS.features.fast.description",
    fallbackTitle: "Fast Processing",
    fallbackDesc: "Quick turnaround on applications and visa processing",
  },
  {
    icon: Users,
    titleKey: "whyDS.features.support.title",
    descriptionKey: "whyDS.features.support.description",
    fallbackTitle: "Personal Support",
    fallbackDesc: "Dedicated advisors guide you every step of the way",
  },
  {
    icon: Award,
    titleKey: "whyDS.features.success.title",
    descriptionKey: "whyDS.features.success.description",
    fallbackTitle: "Proven Success",
    fallbackDesc: "High acceptance rate at top universities worldwide",
  },
];

const WhyDSSection = () => {
  const { t } = useTranslation();

  return (
    <section className="ds-section bg-background relative overflow-hidden">
      {/* Background pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      <div className="ds-container relative z-10">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer()}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3"
          >
            {t("whyDS.subtitle", "Why Choose Us")}
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="ds-heading mb-6"
          >
            {t("whyDS.title")}
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {t("whyDS.description")}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer()}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "group relative p-6 rounded-2xl overflow-hidden",
                "backdrop-blur-glass-lg bg-white/50 dark:bg-primary/20",
                "border border-white/40 dark:border-white/10",
                "shadow-lg shadow-primary/5",
                "hover:shadow-2xl hover:bg-white/70 hover:border-white/60"
              )}
            >
              {/* Animated gradient background */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 0.7 }}
                className={cn(
                  "absolute -inset-[200%]",
                  "bg-gradient-to-br from-primary via-accent to-primary blur-3xl"
                )} 
              />
              
              {/* Icon */}
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "relative z-10 w-14 h-14 rounded-xl mb-5 flex items-center justify-center",
                  "backdrop-blur-md bg-gradient-to-br from-white/40 to-white/20",
                  "border border-white/50 shadow-inner"
                )}
              >
                <feature.icon className="w-7 h-7 text-primary drop-shadow" />
              </motion.div>

              {/* Title */}
              <h3 className="relative z-10 text-lg font-bold text-primary mb-2">
                {t(feature.titleKey, feature.fallbackTitle)}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
                {t(feature.descriptionKey, feature.fallbackDesc)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="text-center"
        >
          <Link to="/testimonials">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ButtonDS 
                variant="outline" 
                size="lg"
                rightIcon={<ArrowRight className="h-5 w-5" />}
              >
                {t("whyDS.cta")}
              </ButtonDS>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDSSection;
