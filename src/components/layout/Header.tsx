import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import { ButtonDS } from "@/components/ui/button-ds";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";

const partnerCountries = [
  { nameKey: "footer.countries.singapore", path: "/partners/singapore" },
  { nameKey: "footer.countries.uk", path: "/partners/uk" },
  { nameKey: "footer.countries.australia", path: "/partners/australia" },
  { nameKey: "footer.countries.southKorea", path: "/partners/south-korea" },
  { nameKey: "footer.countries.usa", path: "/partners/usa" },
  { nameKey: "footer.countries.china", path: "/partners/china" },
  { nameKey: "footer.countries.switzerland", path: "/partners/switzerland" },
  { nameKey: "footer.countries.canada", path: "/partners/canada" },
  { nameKey: "footer.countries.vietnam", path: "/partners/vietnam" },
];

const navLinks = [
  { nameKey: "nav.home", path: "/" },
  { nameKey: "nav.services", path: "/services" },
  { nameKey: "nav.foundation", path: "/foundation" },
  { nameKey: "nav.testimonials", path: "/testimonials" },
];

// NavLink component with better active states
interface NavLinkItemProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavLinkItem = ({ to, isActive, children, onClick, className }: NavLinkItemProps) => (
  <Link
    to={to}
    onClick={onClick}
    className={cn(
      "relative text-sm font-medium transition-all duration-200 py-2 px-1",
      "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full",
      "after:bg-primary after:transition-transform after:duration-200 after:origin-left",
      isActive
        ? "text-primary after:scale-x-100"
        : "text-muted-foreground hover:text-primary after:scale-x-0 hover:after:scale-x-100",
      className
    )}
  >
    {children}
  </Link>
);

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const [isMobilePartnersOpen, setIsMobilePartnersOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  const isActive = (path: string) => location.pathname === path;
  const isPartnersActive = () => location.pathname.startsWith("/partners");

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsPartnersOpen(false);
    setIsMobilePartnersOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target as Node)
      ) {
        setIsPartnersOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Keyboard navigation for dropdown
  const handleDropdownKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsPartnersOpen(false);
      dropdownButtonRef.current?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsPartnersOpen(!isPartnersOpen);
    } else if (e.key === "ArrowDown" && isPartnersOpen) {
      e.preventDefault();
      const firstItem = dropdownRef.current?.querySelector("a");
      (firstItem as HTMLElement)?.focus();
    }
  }, [isPartnersOpen]);

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          "backdrop-blur-glass-lg bg-white/70 dark:bg-primary/40",
          "border-b border-white/20 shadow-lg shadow-black/5",
          isScrolled && "backdrop-blur-glass-xl bg-white/80 dark:bg-primary/60 shadow-xl"
        )}
      >
        <div className="ds-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="relative">
                <GraduationCap className="h-10 w-10 text-primary transition-transform duration-200 group-hover:scale-110" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary leading-tight">DS</span>
                <span className="text-xs text-muted-foreground tracking-wider">EDUCATION</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.slice(0, 2).map((link) => (
                <NavLinkItem
                  key={link.path}
                  to={link.path}
                  isActive={isActive(link.path)}
                >
                  {t(link.nameKey)}
                </NavLinkItem>
              ))}

              {/* Partners Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsPartnersOpen(true)}
                onMouseLeave={() => setIsPartnersOpen(false)}
              >
                <button
                  ref={dropdownButtonRef}
                  onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                  onKeyDown={handleDropdownKeyDown}
                  aria-expanded={isPartnersOpen}
                  aria-haspopup="true"
                  className={cn(
                    "relative text-sm font-medium transition-all duration-200 py-2 px-1",
                    "flex items-center gap-1 focus-ring rounded-md",
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full",
                    "after:bg-primary after:transition-transform after:duration-200 after:origin-left",
                    isPartnersActive()
                      ? "text-primary after:scale-x-100"
                      : "text-muted-foreground hover:text-primary after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {t("nav.partners")}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isPartnersOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  ref={dropdownRef}
                  role="menu"
                  aria-label={t("nav.partners")}
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50",
                    "transition-all duration-200 origin-top",
                    isPartnersOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  )}
                >
                  <div className="bg-background border border-border rounded-xl shadow-xl py-2 min-w-[200px]">
                    {partnerCountries.map((country, index) => (
                      <Link
                        key={country.path}
                        to={country.path}
                        role="menuitem"
                        tabIndex={isPartnersOpen ? 0 : -1}
                        className={cn(
                          "block px-4 py-2.5 text-sm transition-all duration-150",
                          "hover:bg-primary/5 hover:pl-5 focus:bg-primary/5 focus:pl-5 focus:outline-none",
                          isActive(country.path)
                            ? "text-primary font-medium bg-primary/5"
                            : "text-muted-foreground hover:text-primary"
                        )}
                        style={{ animationDelay: `${index * 30}ms` }}
                      >
                        {t(country.nameKey)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.slice(2).map((link) => (
                <NavLinkItem
                  key={link.path}
                  to={link.path}
                  isActive={isActive(link.path)}
                >
                  {t(link.nameKey)}
                </NavLinkItem>
              ))}

              {/* Language Switcher */}
              <div className="ml-2">
                <LanguageSwitcher />
              </div>

              <Link to="/contact" className="ml-2">
                <ButtonDS variant="primary" size="md">
                  {t("common.bookNow")}
                </ButtonDS>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <button
                className={cn(
                  "p-2 rounded-lg transition-colors duration-200 focus-ring",
                  "hover:bg-primary/5 active:bg-primary/10"
                )}
                onClick={toggleMobileMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <div className="relative w-6 h-6">
                  <X
                    className={cn(
                      "absolute inset-0 h-6 w-6 text-primary transition-all duration-200",
                      isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                    )}
                  />
                  <Menu
                    className={cn(
                      "absolute inset-0 h-6 w-6 text-primary transition-all duration-200",
                      isMenuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer with Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />

        {/* Drawer */}
        <nav
          className={cn(
            "absolute top-16 left-0 right-0 bg-background border-b border-border",
            "max-h-[calc(100vh-4rem)] overflow-y-auto",
            "transition-all duration-300 ease-out",
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          )}
        >
          <div className="ds-container py-6">
            <div className="flex flex-col gap-1">
              {navLinks.slice(0, 2).map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-base font-medium py-3 px-4 rounded-lg transition-all duration-200",
                    "hover:bg-primary/5 hover:pl-6",
                    isActive(link.path)
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground"
                  )}
                  onClick={toggleMobileMenu}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {t(link.nameKey)}
                </Link>
              ))}

              {/* Mobile Partners Accordion */}
              <div className="border-y border-border/50 my-2">
                <button
                  className={cn(
                    "w-full text-base font-medium py-3 px-4 rounded-lg",
                    "transition-all duration-200 flex items-center justify-between",
                    "hover:bg-primary/5",
                    isPartnersActive() ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobilePartnersOpen(!isMobilePartnersOpen)}
                  aria-expanded={isMobilePartnersOpen}
                >
                  {t("nav.partners")}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      isMobilePartnersOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isMobilePartnersOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="py-2 space-y-1">
                    {partnerCountries.map((country, index) => (
                      <Link
                        key={country.path}
                        to={country.path}
                        className={cn(
                          "block text-sm py-2.5 px-8 transition-all duration-200",
                          "hover:bg-primary/5 hover:pl-10 rounded-md",
                          isActive(country.path)
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-primary"
                        )}
                        onClick={toggleMobileMenu}
                        style={{ animationDelay: `${index * 30}ms` }}
                      >
                        {t(country.nameKey)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.slice(2).map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-base font-medium py-3 px-4 rounded-lg transition-all duration-200",
                    "hover:bg-primary/5 hover:pl-6",
                    isActive(link.path)
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground"
                  )}
                  onClick={toggleMobileMenu}
                  style={{ animationDelay: `${(index + 3) * 50}ms` }}
                >
                  {t(link.nameKey)}
                </Link>
              ))}

              <Link to="/contact" onClick={toggleMobileMenu} className="mt-4">
                <ButtonDS variant="primary" fullWidth size="lg">
                  {t("common.bookNow")}
                </ButtonDS>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
