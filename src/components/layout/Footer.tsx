import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Facebook, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Send
} from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const studyAbroadLinks = [
  { countryKey: "singapore", path: "/study/singapore" },
  { countryKey: "uk", path: "/study/uk" },
  { countryKey: "australia", path: "/study/australia" },
  { countryKey: "usa", path: "/study/usa" },
  { countryKey: "southKorea", path: "/study/south-korea" },
  { countryKey: "china", path: "/study/china" },
  { countryKey: "switzerland", path: "/study/switzerland" },
  { countryKey: "canada", path: "/study/canada" },
  { countryKey: "vietnam", path: "/study/vietnam" },
];

const aboutLinks = [
  { nameKey: "nav.testimonials", path: "/testimonials" },
  { nameKey: "nav.foundation", path: "/foundation" },
  { nameKey: "nav.services", path: "/services" },
];

// Social media links with proper icons and colors
const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/dseducation",
    icon: Facebook,
    className: "social-icon-facebook",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/dseducation",
    icon: Instagram,
    className: "social-icon-instagram",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/dseducation",
    icon: Linkedin,
    className: "social-icon-linkedin",
  },
  {
    name: "Telegram",
    href: "https://t.me/dseducation",
    icon: Send,
    className: "social-icon-telegram",
  },
];

// Contact information
const contactInfo = [
  {
    type: "telegram",
    label: "Telegram (Ada)",
    value: "+65 9297 5755",
    href: "https://t.me/+6592975755",
    icon: Send,
  },
  {
    type: "whatsapp",
    label: "WhatsApp (Desmond)",
    value: "+65 915 932 87",
    href: "https://wa.me/6591593287",
    icon: Phone,
  },
  {
    type: "email",
    label: "Email",
    value: "support@dseducation.sg",
    href: "mailto:support@dseducation.sg",
    icon: Mail,
  },
];

// Footer link component with hover animation
const FooterLink = ({ to, children, external = false }: { to: string; children: React.ReactNode; external?: boolean }) => {
  const linkClasses = cn(
    "group inline-flex items-center gap-1 text-sm text-white/70",
    "hover:text-accent transition-all duration-200",
    "hover:translate-x-1"
  );

  if (external) {
    return (
      <motion.a 
        href={to} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={linkClasses}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {children}
        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.a>
    );
  }

  return (
    <Link to={to} className={linkClasses}>
      <motion.span
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {children}
      </motion.span>
    </Link>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" 
        />
      </motion.div>

      <div className="ds-container py-16 md:py-20 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
        >
          {/* Logo & Tagline */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 group transition-transform hover:scale-[1.02]"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-xl blur-lg group-hover:blur-xl transition-all" />
                <GraduationCap className="h-12 w-12 relative z-10 transition-transform group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-tight">DS</span>
                <span className="text-xs tracking-wider text-white/60">EDUCATION</span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "social-icon",
                    social.className
                  )}
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Study Abroad */}
          <motion.div variants={fadeInUp}>
            <h4 className="footer-heading">{t("footer.studyAbroad")}</h4>
            <ul className="space-y-3">
              {studyAbroadLinks.slice(0, 6).map((link) => (
                <li key={link.path}>
                  <FooterLink to={link.path}>
                    {t("footer.studyIn", { country: t(`footer.countries.${link.countryKey}`) })}
                  </FooterLink>
                </li>
              ))}
              {studyAbroadLinks.length > 6 && (
                <li>
                  <FooterLink to="/partners">
                    {t("footer.viewAll", "View all destinations")} →
                  </FooterLink>
                </li>
              )}
            </ul>
          </motion.div>

          {/* About Us */}
          <motion.div variants={fadeInUp}>
            <h4 className="footer-heading">{t("footer.aboutUs")}</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.path}>
                  <FooterLink to={link.path}>
                    {t(link.nameKey)}
                  </FooterLink>
                </li>
              ))}
              <li>
                <FooterLink to="/contact">
                  {t("nav.contact")}
                </FooterLink>
              </li>
            </ul>

            {/* Office Location */}
            <div className="mt-8">
              <h4 className="footer-heading">{t("footer.office", "Office")}</h4>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <address className="not-italic leading-relaxed">
                  {t("footer.officeLocations.phnomPenh", "Phnom Penh, Cambodia")}<br />
                  {t("footer.officeLocations.jakarta", "Jakarta, Indonesia")}
                </address>
              </div>
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={fadeInUp}>
            <h4 className="footer-heading">{t("footer.contactUs")}</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact) => (
                <li key={contact.type}>
                  <motion.a
                    href={contact.href}
                    target={contact.type !== "email" ? "_blank" : undefined}
                    rel={contact.type !== "email" ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={cn(
                      "group flex items-start gap-3 p-3 rounded-lg",
                      "bg-white/5 hover:bg-white/10 transition-all duration-200"
                    )}
                  >
                    <div className="p-2 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors">
                      <contact.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 mb-0.5">{contact.label}</div>
                      <div className="text-sm text-white/90 font-medium">{contact.value}</div>
                    </div>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Copyright */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-white/10 relative z-10"
      >
        <div className="ds-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              {t("footer.copyright", { year: currentYear })}
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/privacy" className="hover:text-white/80 transition-colors">
                  {t("footer.privacy", "Privacy Policy")}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link to="/terms" className="hover:text-white/80 transition-colors">
                  {t("footer.terms", "Terms of Service")}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
