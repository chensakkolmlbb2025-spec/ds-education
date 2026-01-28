import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-singapore.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="ds-container relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <p className="text-accent font-medium mb-4">DS EDUCATION</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Gateway to Global Education Starts Here.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            Making world-leading education accessible to everyone.
          </p>
          <Link to="/services">
            <Button className="ds-btn-accent text-lg px-8 py-6">
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
