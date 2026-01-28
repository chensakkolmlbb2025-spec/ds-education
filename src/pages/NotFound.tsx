import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/lib/animations";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center"
      >
        <motion.h1 
          variants={scaleIn}
          className="mb-4 text-4xl font-bold"
        >
          {t("notFound.title")}
        </motion.h1>
        <motion.p 
          variants={fadeInUp}
          className="mb-4 text-xl text-muted-foreground"
        >
          {t("notFound.message")}
        </motion.p>
        <motion.p 
          variants={fadeInUp}
          className="mb-6 text-muted-foreground"
        >
          {t("notFound.description")}
        </motion.p>
        <motion.a 
          variants={scaleIn}
          href="/" 
          className="text-primary underline hover:text-primary/90"
        >
          {t("notFound.backHome")}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
