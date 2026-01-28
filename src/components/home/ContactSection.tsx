import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Send as SendIcon,
  CheckCircle,
  AlertCircle,
  Loader2
} from "lucide-react";
import { ButtonDS } from "@/components/ui/button-ds";
import { cn } from "@/lib/utils";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

// Form validation
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Form field component with label and error
const FormField = ({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <label className="ds-form-label">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    {children}
    {error && (
      <p className="text-sm text-red-500 flex items-center gap-1 animate-fade-in">
        <AlertCircle className="w-4 h-4" />
        {error}
      </p>
    )}
  </div>
);

const ContactSection = () => {
  const { t } = useTranslation();

  // Contact info items - using translation for locations
  const contactItems = [
    {
      icon: MapPin,
      titleKey: "contact.mainOffice",
      content: [
        t("contact.locations.jakarta", "Jakarta, Indonesia"), 
        t("contact.locations.phnomPenh", "Phnom Penh, Cambodia")
      ],
      href: null,
    },
    {
      icon: Phone,
      titleKey: "contact.phoneNumbers",
      content: ["+62 817 665 4900 (Jakarta)", "+855 87741 78 (Cambodia)"],
      href: "tel:+62817665490",
    },
    {
      icon: MessageCircle,
      titleKey: "contact.whatsapp",
      content: [`+65 9159 3287 (${t("contact.locations.singapore", "Singapore")})`],
      href: "https://wa.me/6591593287",
    },
    {
      icon: Mail,
      titleKey: "contact.email",
      content: ["info@dseducation.com"],
      href: "mailto:info@dseducation.com",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t("contact.form.errors.nameRequired", "Name is required");
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t("contact.form.errors.nameTooShort", "Name must be at least 2 characters");
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t("contact.form.errors.emailRequired", "Email is required");
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t("contact.form.errors.emailInvalid", "Please enter a valid email");
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t("contact.form.errors.messageRequired", "Message is required");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("contact.form.errors.messageTooShort", "Message must be at least 10 characters");
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <section className="ds-section bg-gradient-to-b from-muted to-background relative overflow-hidden">
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
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" 
        />
      </motion.div>

      <div className="ds-container relative z-10">
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
            {t("contact.subtitle", "Get In Touch")}
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="ds-heading mb-4"
          >
            {t("contact.title")}
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {t("contact.description")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <h3 className="text-xl font-bold text-primary mb-6">
              {t("contact.info", "Contact Information")}
            </h3>

            <motion.div 
              variants={staggerContainer()}
              className="space-y-4 mb-8"
            >
              {contactItems.map((item, index) => {
                const content = (
                  <motion.div 
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={cn(
                      "flex items-start gap-4 p-5 rounded-xl",
                      "backdrop-blur-glass-lg bg-white/40 border border-white/30",
                      "shadow-lg",
                      item.href && "hover:bg-white/60 hover:shadow-xl cursor-pointer"
                    )}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0",
                      "backdrop-blur-md bg-white/40 border border-white/50"
                    )}>
                      <item.icon className="w-5 h-5 text-primary drop-shadow" />
                    </div>
                    <div className="relative z-10">
                      <p className="font-semibold text-primary mb-1">
                        {t(item.titleKey)}
                      </p>
                      {item.content.map((line, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </motion.div>

            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="h-64 bg-gray-100 rounded-2xl overflow-hidden shadow-inner"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7989!2d103.8519!3d1.2897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMjIuOSJOIDEwM8KwNTEnMDYuOCJF!5e0!3m2!1sen!2ssg!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DS Education Location"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
          >
            <h3 className="text-xl font-bold text-primary mb-2">
              {t("contact.getInTouch")}
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
              {t("contact.formIntro", "Fill out the form below and we'll get back to you within 24 hours.")}
            </p>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </motion.div>
                <h4 className="text-xl font-bold text-primary mb-2">
                  {t("contact.successTitle", "Message Sent!")}
                </h4>
                <p className="text-muted-foreground">
                  {t("contact.successMessage", "We'll get back to you as soon as possible.")}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormField
                  label={t("contact.form.fullName", "Full Name")}
                  error={errors.name}
                  required
                >
                  <Input
                    placeholder={t("contact.form.fullNamePlaceholder")}
                    value={formData.name}
                    onChange={handleChange("name")}
                    className={cn(
                      "ds-input",
                      errors.name && "border-red-500 focus:ring-red-500"
                    )}
                    disabled={isSubmitting}
                  />
                </FormField>

                <FormField
                  label={t("contact.form.email", "Email Address")}
                  error={errors.email}
                  required
                >
                  <Input
                    type="email"
                    placeholder={t("contact.form.emailPlaceholder")}
                    value={formData.email}
                    onChange={handleChange("email")}
                    className={cn(
                      "ds-input",
                      errors.email && "border-red-500 focus:ring-red-500"
                    )}
                    disabled={isSubmitting}
                  />
                </FormField>

                <FormField
                  label={t("contact.form.message", "Message")}
                  error={errors.message}
                  required
                >
                  <Textarea
                    placeholder={t("contact.form.messagePlaceholder")}
                    value={formData.message}
                    onChange={handleChange("message")}
                    className={cn(
                      "ds-input min-h-[150px] resize-none",
                      errors.message && "border-red-500 focus:ring-red-500"
                    )}
                    disabled={isSubmitting}
                  />
                </FormField>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ButtonDS
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    isLoading={isSubmitting}
                    loadingText={t("contact.form.sending", "Sending...")}
                    leftIcon={!isSubmitting ? <SendIcon className="w-5 h-5" /> : undefined}
                  >
                    {t("contact.form.submit", "Send Message")}
                  </ButtonDS>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
