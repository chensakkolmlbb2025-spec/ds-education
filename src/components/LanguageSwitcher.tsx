import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Check, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { languages, changeLanguage, type LanguageCode } from "@/lib/i18n";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const currentLanguage = (i18n.language as LanguageCode) || "en";
  const currentLangConfig = languages[currentLanguage] || languages.en;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "Escape":
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case "ArrowDown":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        }
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        }
        break;
      case "Enter":
      case " ":
        if (!isOpen) {
          event.preventDefault();
          setIsOpen(true);
        }
        break;
    }
  };

  const handleLanguageSelect = (langCode: LanguageCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const handleOptionKeyDown = (
    event: React.KeyboardEvent,
    langCode: LanguageCode
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleLanguageSelect(langCode);
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-lg",
          "text-sm font-medium transition-all duration-200",
          "border border-border bg-background",
          "hover:bg-muted hover:border-primary/30",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          isOpen && "bg-muted border-primary/30"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t("language.select")}
        title={t("language.currentLanguage", {
          language: currentLangConfig.nativeName,
        })}
      >
        {/* Flag/Globe Icon */}
        <span className="text-lg" role="img" aria-hidden="true">
          {currentLangConfig.flag}
        </span>

        {/* Language Code */}
        <span className="uppercase font-semibold text-primary">
          {currentLanguage === "en" ? "EN" : "KH"}
        </span>

        {/* Dropdown Arrow */}
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={cn(
            "absolute right-0 mt-2 z-50",
            "min-w-[180px] py-1",
            "bg-background border border-border rounded-lg shadow-lg",
            "animate-in fade-in-0 zoom-in-95 duration-200"
          )}
          role="listbox"
          aria-label={t("language.select")}
          aria-activedescendant={`lang-${currentLanguage}`}
        >
          {/* Header */}
          <div className="px-3 py-2 border-b border-border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Globe className="h-3 w-3" />
              <span>{t("language.select")}</span>
            </div>
          </div>

          {/* Language Options */}
          {Object.entries(languages).map(([code, config]) => {
            const isSelected = currentLanguage === code;
            return (
              <button
                key={code}
                id={`lang-${code}`}
                onClick={() => handleLanguageSelect(code as LanguageCode)}
                onKeyDown={(e) =>
                  handleOptionKeyDown(e, code as LanguageCode)
                }
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-3",
                  "text-left transition-all duration-150",
                  "hover:bg-muted focus:bg-muted",
                  "focus:outline-none",
                  isSelected && "bg-primary/5"
                )}
                role="option"
                aria-selected={isSelected}
                tabIndex={isOpen ? 0 : -1}
              >
                {/* Flag */}
                <span
                  className="text-2xl"
                  role="img"
                  aria-label={config.name}
                >
                  {config.flag}
                </span>

                {/* Language Info */}
                <div className="flex-1">
                  <div className="font-medium text-sm text-foreground">
                    {config.nativeName}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {config.name}
                  </div>
                </div>

                {/* Check Mark for Selected */}
                {isSelected && (
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
