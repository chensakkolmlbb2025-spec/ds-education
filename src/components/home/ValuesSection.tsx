import { useTranslation } from "react-i18next";
import { Target, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const valuesConfig = [
  {
    titleKey: "values.mission.title",
    descriptionKey: "values.mission.description",
    variant: "outline" as const,
    icon: Target,
  },
  {
    titleKey: "values.vision.title",
    descriptionKey: "values.vision.description",
    variant: "filled" as const,
    icon: Eye,
  },
  {
    titleKey: "values.coreValues.title",
    descriptionKey: "values.coreValues.description",
    variant: "outline" as const,
    icon: Heart,
  },
];

const ValuesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="ds-section-sm bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
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
          className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" 
        />
      </motion.div>

      <div className="ds-container relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer()}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {valuesConfig.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "group relative p-8 md:p-10 rounded-2xl text-center overflow-hidden",
                "backdrop-blur-glass-lg shadow-2xl",
                value.variant === "filled"
                  ? "bg-primary/80 border border-white/20 text-primary-foreground"
                  : "bg-white/40 border border-primary/30 hover:bg-white/60 hover:border-primary/50"
              )}
            >
              {/* Icon */}
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center",
                  "backdrop-blur-md bg-white/30 border border-white/40 shadow-inner"
                )}
              >
                <value.icon className={cn(
                  "h-8 w-8 drop-shadow",
                  value.variant === "filled" ? "text-white" : "text-primary"
                )} />
              </motion.div>

              {/* Title */}
              <h3
                className={cn(
                  "text-xl font-bold mb-4 uppercase tracking-wide",
                  value.variant === "filled" ? "text-primary-foreground" : "text-primary"
                )}
              >
                {t(value.titleKey)}
              </h3>

              {/* Description */}
              <p
                className={cn(
                  "text-sm leading-relaxed",
                  value.variant === "filled" ? "text-primary-foreground/85" : "text-muted-foreground"
                )}
              >
                {t(value.descriptionKey)}
              </p>

              {/* Decorative corner for filled variant */}
              {value.variant === "filled" && (
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl" 
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
