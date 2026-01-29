import { useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-singapore.jpg";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { t } = useTranslation();
  const heroAnimation = useScrollAnimation();
  const contactAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
            {t("contact.title")}
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto"
          >
            {t("contact.description")}
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="ds-section bg-background">
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              ref={contactAnimation.ref}
              initial="hidden"
              animate={contactAnimation.isInView ? "visible" : "hidden"}
              variants={staggerContainer(0.15, 0.2)}
            >
              <motion.h2 variants={fadeInLeft} className="ds-heading mb-6">{t("contact.getInTouch")}</motion.h2>
              <motion.p variants={fadeInLeft} className="text-muted-foreground mb-8">
                {t("contact.description")}
              </motion.p>

              <div className="space-y-6">
                <motion.div variants={fadeInLeft} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{t("contact.mainOffice")}</h4>
                    <p className="text-muted-foreground text-sm">
                      Front of Central, Poi Pet, KHA-E street, Battang, Phnom Penh
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInLeft} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{t("contact.phoneNumbers")}</h4>
                    <p className="text-muted-foreground text-sm">
                      Jakarta: +62 817 665 4900<br />
                      Cambodia (Telegram): +855 87741 78
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInLeft} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{t("contact.whatsapp")}</h4>
                    <p className="text-muted-foreground text-sm">
                      Singapore: +65 9159 3287
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInLeft} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{t("contact.email")}</h4>
                    <p className="text-muted-foreground text-sm">
                      support@dseducation.sg
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Map */}
              <motion.div variants={fadeInLeft} className="mt-8 h-64 rounded-lg overflow-hidden shadow-lg">
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
              ref={formAnimation.ref}
              initial="hidden"
              animate={formAnimation.isInView ? "visible" : "hidden"}
              variants={staggerContainer(0.1, 0.2)}
              className="bg-muted p-8 rounded-lg"
            >
              <motion.h2 variants={fadeInRight} className="ds-heading mb-6">{t("common.bookNow")}</motion.h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div variants={fadeInRight}>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.fullName")}
                  </label>
                  <Input
                    placeholder={t("contact.form.fullNamePlaceholder")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-background"
                  />
                </motion.div>
                <motion.div variants={fadeInRight}>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.email")}
                  </label>
                  <Input
                    type="email"
                    placeholder={t("contact.form.emailPlaceholder")}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-background"
                  />
                </motion.div>
                <motion.div variants={fadeInRight}>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.phone")}
                  </label>
                  <Input
                    placeholder={t("contact.form.phonePlaceholder")}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-background"
                  />
                </motion.div>
                <motion.div variants={fadeInRight}>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.subject")}
                  </label>
                  <Input
                    placeholder={t("contact.form.subjectPlaceholder")}
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="bg-background"
                  />
                </motion.div>
                <motion.div variants={fadeInRight}>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    placeholder={t("contact.form.messagePlaceholder")}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-background min-h-[120px]"
                  />
                </motion.div>
                <motion.div variants={fadeInRight}>
                  <Button type="submit" className="ds-btn-accent w-full">
                    {t("contact.form.submit")}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
