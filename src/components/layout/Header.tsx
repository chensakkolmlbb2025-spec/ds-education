import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const partnerCountries = [
  { name: "Singapore", path: "/partners/singapore" },
  { name: "United Kingdom", path: "/partners/uk" },
  { name: "Australia", path: "/partners/australia" },
  { name: "South Korea", path: "/partners/south-korea" },
  { name: "USA", path: "/partners/usa" },
  { name: "China", path: "/partners/china" },
  { name: "Switzerland", path: "/partners/switzerland" },
  { name: "Canada", path: "/partners/canada" },
  { name: "Vietnam", path: "/partners/vietnam" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "DS Foundation", path: "/foundation" },
  { name: "Testimonials", path: "/testimonials" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const [isMobilePartnersOpen, setIsMobilePartnersOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isPartnersActive = () => location.pathname.startsWith("/partners");

  return (
    <header className="sticky top-0 z-50 bg-background shadow-nav">
      <div className="ds-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight">DS</span>
              <span className="text-xs text-muted-foreground tracking-wider">EDUCATION</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Partners Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPartnersOpen(true)}
              onMouseLeave={() => setIsPartnersOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  isPartnersActive()
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                }`}
              >
                Partners
                <ChevronDown className={`h-4 w-4 transition-transform ${isPartnersOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {isPartnersOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[160px]">
                    {partnerCountries.map((country) => (
                      <Link
                        key={country.path}
                        to={country.path}
                        className={`block px-4 py-2 text-sm transition-colors hover:bg-muted ${
                          isActive(country.path)
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        {country.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="ds-btn-accent">Book Now</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium py-2 transition-colors ${
                    isActive(link.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Partners Accordion */}
              <div>
                <button
                  className={`text-sm font-medium py-2 transition-colors flex items-center justify-between w-full ${
                    isPartnersActive() ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMobilePartnersOpen(!isMobilePartnersOpen)}
                >
                  Partners
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobilePartnersOpen ? "rotate-180" : ""}`} />
                </button>
                {isMobilePartnersOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    {partnerCountries.map((country) => (
                      <Link
                        key={country.path}
                        to={country.path}
                        className={`block text-sm py-2 transition-colors ${
                          isActive(country.path)
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {country.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium py-2 transition-colors ${
                    isActive(link.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="ds-btn-accent w-full mt-2">Book Now</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
