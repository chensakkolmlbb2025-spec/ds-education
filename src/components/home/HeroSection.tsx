import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ButtonDS } from "@/components/ui/button-ds";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-singapore.jpg";
import { cn } from "@/lib/utils";
import { fadeInUpHero, fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

const HeroSection = () => {
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-primary overflow-hidden">
      
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient Overlay - Ensures text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary from-5% via-primary/90 via-50% to-primary/70 to-95% lg:via-primary/85 lg:to-transparent lg:w-[65%]" />
        
        {/* Mobile Overlay */}
        <div className="absolute inset-0 bg-primary/85 lg:hidden" />
      </motion.div>

      {/* Content */}
      <div className="ds-container relative z-10 w-full py-24 lg:py-32">
        <div className="max-w-4xl">
          
          {/* Content */}
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            animate="visible"
          >
            
            {/* Tagline */}
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-0.5 w-12 bg-accent rounded-full" />
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                {t("hero.tagline", "DS EDUCATION")}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={fadeInUpHero}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight md:leading-snug tracking-tight"
            >
              {t("hero.title", "Your Gateway to Global Education Starts Here.")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl"
            >
              {t("hero.subtitle", "Making world-leading education accessible to everyone.")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/services" className="group">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <ButtonDS 
                    variant="accent" 
                    size="xl"
                    className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                    rightIcon={<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                  >
                    {t("hero.cta", "Our Services")}
                  </ButtonDS>
                </motion.div>
              </Link>
              
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <ButtonDS 
                    variant="white"
                    size="xl"
                    className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t("hero.ctaSecondary", "Free Consultation")}
                  </ButtonDS>
                </motion.div>
              </Link>
            </motion.div>

            {/* Glassmorphic Stats Bar */}
            <motion.div 
              variants={scaleIn}
              className={cn(
                "mt-16 backdrop-blur-glass-xl bg-white/10 border border-white/20",
                "rounded-2xl p-6 shadow-2xl shadow-black/20",
                "grid grid-cols-3 gap-6 text-center max-w-2xl",
                "transition-all duration-500 hover:bg-white/15"
              )}
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">500+</div>
                  <div className="text-sm text-white/80 mt-1">{t("hero.stats.students", "Students Placed")}</div>
                </div>
              </div>
              <div className="border-l border-r border-white/20 relative group">
                <div className="absolute -inset-2 bg-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">100+</div>
                  <div className="text-sm text-white/80 mt-1">{t("hero.stats.universities", "Universities")}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">9</div>
                  <div className="text-sm text-white/80 mt-1">{t("hero.stats.countries", "Countries")}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;