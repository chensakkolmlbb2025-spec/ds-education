import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import londonImage from "@/assets/london-bigben.jpg";
import teamGroupImage from "@/assets/team-group.jpg";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from "@/lib/animations";

// Key highlights
const highlights = [
  { key: "about.highlights.experience", fallback: "10+ Years Experience" },
  { key: "about.highlights.universities", fallback: "100+ Partner Universities" },
  { key: "about.highlights.countries", fallback: "9 Countries Covered" },
  { key: "about.highlights.support", fallback: "24/7 Student Support" },
];

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="ds-section bg-gradient-to-br from-muted via-muted to-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" 
        />
      </motion.div>

      <div className="ds-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="relative order-2 lg:order-1"
          >
            {/* Main image */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10 group"
            >
              <motion.div 
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 0.75 }}
                whileHover={{ opacity: 1 }}
                className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-lg" 
              />
              <img
                src={londonImage}
                alt="Big Ben London"
                className="relative w-full h-auto rounded-2xl shadow-xl object-cover"
                loading="lazy"
              />
            </motion.div>
            
            {/* Team overlay image */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 24, y: 24 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, x: 28, y: 28 }}
              className="absolute bottom-0 right-0 w-2/3 z-20 group"
            >
              <div className="relative">
                {/* Glass frame */}
                <div className={cn(
                  "absolute -inset-3 rounded-2xl backdrop-blur-glass-lg",
                  "bg-white/60 border border-white/40 shadow-2xl"
                )} />
                <img
                  src={teamGroupImage}
                  alt="DS Education Team"
                  className="relative w-full h-auto rounded-xl ring-1 ring-white/50 object-cover"
                  loading="lazy"
                />
                
                {/* Glass info overlay on hover */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "absolute inset-0 rounded-xl",
                    "backdrop-blur-md bg-primary/80 border border-white/30",
                    "flex items-center justify-center"
                  )}
                >
                  <div className="text-white text-center p-4">
                    <p className="font-semibold drop-shadow-lg">Our Team in Action</p>
                    <p className="text-sm text-white/80 mt-1">Education Excellence</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Experience badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: -16 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className={cn(
                "absolute top-6 z-30 rounded-xl px-6 py-4",
                "backdrop-blur-glass-xl bg-gradient-to-br from-primary/90 to-primary/70",
                "border border-white/30 shadow-2xl shadow-primary/30",
                "animate-float text-white"
              )}
              style={{ left: '-16px' }}
            >
              <div className="relative z-10">
                <div className="text-3xl font-bold drop-shadow-lg">10+</div>
                <div className="text-sm text-white/90">{t("about.yearsExp", "Years Experience")}</div>
              </div>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 rounded-xl" />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer()}
            className="order-1 lg:order-2"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3"
            >
              {t("about.subtitle", "Who We Are")}
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="ds-heading mb-6"
            >
              {t("about.title")}
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed mb-6"
            >
              {t("about.description1")}
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              {t("about.description2")}
            </motion.p>

            {/* Highlights grid */}
            <motion.div 
              variants={staggerContainer(0.05)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl",
                    "bg-white border border-gray-100 shadow-sm",
                    "hover:shadow-md hover:border-primary/20"
                  )}
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {t(item.key, item.fallback)}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
