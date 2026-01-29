import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, Quote, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonDS, IconButtonDS } from "@/components/ui/button-ds";
import testimonialStudent from "@/assets/testimonial-student.jpg";

// Extended testimonials data
const testimonialsData = [
  {
    id: 1,
    quoteKey: "testimonial.quote",
    authorKey: "testimonial.author",
    roleKey: "testimonial.role",
    universityKey: "testimonial.university",
    image: testimonialStudent,
    rating: 5,
  },
  {
    id: 2,
    quoteKey: "testimonials.items.0.quote",
    authorKey: "testimonials.items.0.name",
    roleKey: "testimonials.items.0.role",
    universityKey: "testimonials.items.0.university",
    image: testimonialStudent, // Replace with actual images
    rating: 5,
  },
  {
    id: 3,
    quoteKey: "testimonials.items.1.quote",
    authorKey: "testimonials.items.1.name",
    roleKey: "testimonials.items.1.role",
    universityKey: "testimonials.items.1.university",
    image: testimonialStudent, // Replace with actual images
    rating: 5,
  },
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={cn(
          "h-5 w-5 transition-colors",
          i < rating ? "fill-primary text-primary" : "fill-gray-200 text-gray-200"
        )}
      />
    ))}
  </div>
);

// Carousel dot indicator
const CarouselDot = ({ active, onClick }: { active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={cn(
      "w-3 h-3 rounded-full transition-all duration-300",
      active 
        ? "bg-primary w-8" 
        : "bg-gray-300 hover:bg-gray-400"
    )}
    aria-label={active ? "Current slide" : "Go to slide"}
  />
);

const TestimonialSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const goToPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + testimonialsData.length) % testimonialsData.length);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide((currentIndex + 1) % testimonialsData.length);
  }, [currentIndex, goToSlide]);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="ds-section bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Enhanced Background decorations with animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
        
        {/* Floating elements */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
      </div>

      <div className="ds-container relative z-10">
        {/* Enhanced Header with stats */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 backdrop-blur-md bg-primary/10 px-4 py-2 rounded-full mb-4 border border-primary/20">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t("testimonial.subtitle", "Student Success Stories")}
            </span>
            <Star className="w-4 h-4 text-primary fill-primary" />
          </div>
          <h2 className="ds-heading mb-4">{t("testimonial.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            {t("testimonial.description", "Hear from our students who achieved their dreams of studying abroad")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
        </div>

        {/* Main Testimonial Showcase */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative">
            {/* Decorative quote marks */}
            <div className="absolute -top-8 -left-4 md:left-6 z-0">
              <Quote className="w-20 h-20 md:w-32 md:h-32 text-primary/10 rotate-180" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:right-6 z-0">
              <Quote className="w-20 h-20 md:w-32 md:h-32 text-primary/10" />
            </div>

            {/* Enhanced Carousel content with fade animation */}
            <div 
              key={currentTestimonial.id}
              className={cn(
                "relative z-10 rounded-3xl p-8 md:p-14",
                "backdrop-blur-glass-xl bg-gradient-to-br from-white/70 via-white/60 to-white/50",
                "dark:from-primary/40 dark:via-primary/30 dark:to-primary/20",
                "border-2 border-white/40 shadow-2xl shadow-primary/20",
                "transition-all duration-700 ease-in-out",
                "before:absolute before:inset-0 before:rounded-3xl",
                "before:bg-gradient-to-br before:from-white/50 before:via-transparent before:to-white/30",
                "before:opacity-60 before:pointer-events-none",
                "after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-t after:from-primary/5 after:to-transparent after:pointer-events-none",
                "animate-in fade-in-0 slide-in-from-bottom-4 duration-700"
              )}
            >
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Enhanced Image section - 4 columns */}
                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative group">
                    {/* Animated decorative rings */}
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 via-primary/20 to-primary/30 blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse" />
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-white/50 to-white/20 group-hover:from-white/70 group-hover:to-white/30 transition-all duration-500" />
                    
                    {/* Image container */}
                    <div className="relative">
                      <img
                        src={currentTestimonial.image}
                        alt={t(currentTestimonial.authorKey)}
                        className={cn(
                          "relative w-56 h-56 md:w-72 md:h-72 rounded-3xl object-cover",
                          "shadow-2xl transition-all duration-700",
                          "group-hover:scale-[1.02] group-hover:shadow-primary/20"
                        )}
                      />
                      
                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Enhanced Rating badge */}
                    <div className={cn(
                      "absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl px-6 py-3",
                      "backdrop-blur-glass-lg bg-white/90 dark:bg-primary/90",
                      "border-2 border-white/60 shadow-xl",
                      "transform group-hover:scale-110 transition-transform duration-300"
                    )}>
                      <StarRating rating={currentTestimonial.rating} />
                    </div>
                  </div>
                </div>

                {/* Enhanced Quote section - 8 columns */}
                <div className="lg:col-span-8 text-center lg:text-left space-y-6">
                  {/* Quote text */}
                  <div className="relative">
                    <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 dark:text-white/90 font-light italic leading-relaxed">
                      "{t(currentTestimonial.quoteKey)}"
                    </p>
                  </div>
                  
                  {/* Author info with enhanced design */}
                  <div className="pt-6 border-t-2 border-gradient-to-r from-transparent via-primary/30 to-transparent">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                      <div className="flex-1">
                        <p className="font-bold text-primary text-2xl mb-1">
                          {t(currentTestimonial.authorKey)}
                        </p>
                        <p className="text-base text-muted-foreground mb-2">
                          {t(currentTestimonial.roleKey)}
                        </p>
                        <div className="inline-flex items-center gap-2 backdrop-blur-md bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <p className="text-sm text-primary font-semibold">
                            {t(currentTestimonial.universityKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-0 md:-mx-8 pointer-events-none z-20">
              <IconButtonDS
                icon={<ChevronLeft className="h-6 w-6" />}
                aria-label="Previous testimonial"
                onClick={goToPrev}
                variant="secondary"
                size="icon"
                className={cn(
                  "pointer-events-auto shadow-xl backdrop-blur-glass-md",
                  "bg-white/80 hover:bg-white border-2 border-white/60",
                  "h-12 w-12 rounded-2xl",
                  "hover:scale-110 transition-all duration-300"
                )}
              />
              <IconButtonDS
                icon={<ChevronRight className="h-6 w-6" />}
                aria-label="Next testimonial"
                onClick={goToNext}
                variant="secondary"
                size="icon"
                className={cn(
                  "pointer-events-auto shadow-xl backdrop-blur-glass-md",
                  "bg-white/80 hover:bg-white border-2 border-white/60",
                  "h-12 w-12 rounded-2xl",
                  "hover:scale-110 transition-all duration-300"
                )}
              />
            </div>
          </div>

          {/* Enhanced Controls section */}
          <div className="flex items-center justify-center gap-6 mt-10">
            {/* Carousel indicators with progress */}
            <div className="flex items-center gap-3">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "relative rounded-full transition-all duration-500 overflow-hidden",
                    index === currentIndex 
                      ? "w-12 h-3 bg-primary" 
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === currentIndex && isAutoPlaying && (
                    <div 
                      className="absolute inset-0 bg-primary/30"
                      style={{
                        animation: 'progress 6s linear infinite'
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Play/Pause control */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={cn(
                "backdrop-blur-md bg-white/60 hover:bg-white/80",
                "border-2 border-white/60 rounded-full p-2",
                "transition-all duration-300 hover:scale-110",
                "shadow-lg"
              )}
              aria-label={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
            >
              {isAutoPlaying ? (
                <Pause className="h-4 w-4 text-primary" />
              ) : (
                <Play className="h-4 w-4 text-primary" />
              )}
            </button>

            {/* Counter */}
            <div className="backdrop-blur-md bg-white/60 px-4 py-2 rounded-full border-2 border-white/60">
              <span className="text-sm font-semibold text-primary">
                {currentIndex + 1} / {testimonialsData.length}
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced CTA with stats */}
        <div className="text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="backdrop-blur-md bg-white/40 px-6 py-3 rounded-2xl border border-white/60">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">{t("testimonial.stats.students", "Happy Students")}</div>
            </div>
            <div className="backdrop-blur-md bg-white/40 px-6 py-3 rounded-2xl border border-white/60">
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">{t("testimonial.stats.rating", "Average Rating")}</div>
            </div>
            <div className="backdrop-blur-md bg-white/40 px-6 py-3 rounded-2xl border border-white/60">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">{t("testimonial.stats.success", "Success Rate")}</div>
            </div>
          </div>
          
          <Link to="/testimonials">
            <ButtonDS 
              variant="primary" 
              size="lg"
              className="shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300"
            >
              {t("testimonial.cta", "Read More Success Stories")}
            </ButtonDS>
          </Link>
        </div>
      </div>

      {/* Add keyframes for progress animation */}
      <style>{`
        @keyframes progress {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
