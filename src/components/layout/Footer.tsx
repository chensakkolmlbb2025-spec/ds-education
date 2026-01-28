import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Instagram, Linkedin } from "lucide-react";

const studyAbroadLinks = [
  { name: "Study in Singapore", path: "/study/singapore" },
  { name: "Study in UK", path: "/study/uk" },
  { name: "Study in Australia", path: "/study/australia" },
  { name: "Study in USA", path: "/study/usa" },
  { name: "Study in South Korean", path: "/study/south-korea" },
  { name: "Study in China", path: "/study/china" },
  { name: "Study in Switzerland", path: "/study/switzerland" },
  { name: "Study in Canada", path: "/study/canada" },
  { name: "Study in Vietnam", path: "/study/vietnam" },
];

const aboutLinks = [
  { name: "Testimonials", path: "/testimonials" },
  { name: "DS Foundation", path: "/foundation" },
  { name: "Our Service", path: "/services" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="ds-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <GraduationCap className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-tight">DS</span>
                <span className="text-xs tracking-wider opacity-80">EDUCATION</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 mt-4">
              Start Your application<br />
              with DS Education
            </p>
          </div>

          {/* Study Abroad */}
          <div>
            <h4 className="footer-heading text-accent">Study Abroad</h4>
            <ul className="space-y-2">
              {studyAbroadLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="footer-heading text-accent">About Us</h4>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="footer-heading text-accent">Contact Us</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Telegram: +65 9297 5755 (Ada)</li>
              <li>WhatsApp: +65 915 932 87 (Desmond)</li>
              <li>Email: support@dseducation.sg</li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-accent flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <span className="text-xs font-bold">TT</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Telegram"
              >
                <span className="text-xs font-bold">TG</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-primary-foreground/20">
        <div className="ds-container py-4">
          <p className="text-center text-sm opacity-70">
            © Copyright 2026 DS Education. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
