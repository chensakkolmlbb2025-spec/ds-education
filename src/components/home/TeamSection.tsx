import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import teamDesmond from "@/assets/team-desmond.jpg";
import teamVeasna from "@/assets/team-veasna.jpg";
import teamMember1 from "@/assets/team-member1.jpg";
import teamMember2 from "@/assets/team-member2.jpg";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

// Reusable social icon component
const SocialIcon = ({ 
  href, 
  icon: Icon, 
  label, 
  variant = "primary" 
}: { 
  href: string; 
  icon: React.ElementType; 
  label: string;
  variant?: "primary" | "light";
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    className={cn(
      "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200",
      "hover:shadow-md",
      variant === "primary" 
        ? "bg-primary text-primary-foreground hover:bg-primary/90" 
        : "bg-primary/10 text-primary hover:bg-primary/20"
    )}
    aria-label={label}
  >
    <Icon className="h-4 w-4" />
  </motion.a>
);

// Team member card component
const TeamMemberCard = ({ 
  name, 
  role, 
  image, 
  size = "md",
  showSocials = false,
}: {
  name: string;
  role: string;
  image: string;
  size?: "sm" | "md" | "lg";
  showSocials?: boolean;
}) => {
  const sizeClasses = {
    sm: "w-28 h-28 md:w-32 md:h-32",
    md: "w-36 h-36 md:w-40 md:h-40",
    lg: "w-44 h-44 md:w-52 md:h-52",
  };

  return (
    <div className="group flex flex-col items-center text-center">
      {/* Avatar with hover effect */}
      <motion.div 
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative mb-5"
      >
        <div className={cn(
          "rounded-full overflow-hidden",
          "border-4 border-primary/10 shadow-lg",
          "transition-all duration-300",
          "group-hover:border-primary/30 group-hover:shadow-2xl",
          sizeClasses[size]
        )}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Name */}
      <h4 className={cn(
        "font-bold text-primary mb-1",
        size === "lg" ? "text-xl" : "text-lg"
      )}>
        {name}
      </h4>

      {/* Role */}
      <p className={cn(
        "text-muted-foreground mb-3",
        size === "lg" ? "text-base" : "text-sm"
      )}>
        {role}
      </p>

      {/* Social icons */}
      {showSocials && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex gap-2 justify-center"
        >
          <SocialIcon
            href="#"
            icon={Facebook}
            label="Facebook"
            variant="light"
          />
          <SocialIcon
            href="#"
            icon={Instagram}
            label="Instagram"
            variant="light"
          />
          <SocialIcon
            href="#"
            icon={Twitter}
            label="Twitter"
            variant="light"
          />
          <SocialIcon
            href="#"
            icon={Linkedin}
            label="LinkedIn"
            variant="light"
          />
        </motion.div>
      )}
    </div>
  );
};

const TeamSection = () => {
  const { t } = useTranslation();

  const mainTeamMember = {
    name: t("team.founder.name"),
    role: t("team.founder.role"),
    image: teamDesmond,
  };

  const teamMembers = [
    {
      name: t("team.members.veasna.name"),
      role: t("team.members.veasna.role"),
      image: teamVeasna,
    },
    {
      name: t("team.members.jernMay.name"),
      role: t("team.members.jernMay.role"),
      image: teamMember1,
    },
    {
      name: t("team.members.sarah.name"),
      role: t("team.members.sarah.role"),
      image: teamMember2,
    },
  ];

  return (
    <section className="ds-section bg-gradient-to-b from-background to-muted/30">
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
            className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3"
          >
            {t("team.subtitle", "Meet Our Team")}
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="ds-heading mb-4"
          >
            {t("team.title")}
          </motion.h2>
          <motion.div 
            variants={scaleIn}
            className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 rounded-full" 
          />
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-muted-foreground italic max-w-lg mx-auto"
          >
            {t("team.tagline")}
          </motion.p>
        </motion.div>

        {/* Main Team Member (Founder) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <TeamMemberCard
            name={mainTeamMember.name}
            role={mainTeamMember.role}
            image={mainTeamMember.image}
            size="lg"
            showSocials
          />
        </motion.div>

        {/* Other Team Members */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer()}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-12 max-w-4xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <TeamMemberCard
                name={member.name}
                role={member.role}
                image={member.image}
                size="md"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
