import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonDS } from "@/components/ui/button-ds";
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
    <section className="ds-section bg-muted/50">
      <div className="ds-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("testimonial.subtitle", "Student Success Stories")}
          </span>
          <h2 className="ds-heading mt-3 mb-4">{t("testimonial.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("testimonial.description", "Hear from our students who achieved their dreams of studying abroad")}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative px-12">
            {/* Card */}
            <div 
              key={currentTestimonial.id}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-border"
            >
              {/* Opening Quote */}
              <div className="flex justify-start mb-4">
                <Quote className="w-10 h-10 text-primary/20" />
              </div>
              
              {/* Quote Text */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                {t(currentTestimonial.quoteKey)}
              </p>
              
              {/* Closing Quote */}
              <div className="flex justify-end mb-6">
                <Quote className="w-10 h-10 text-primary/20 rotate-180" />
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={currentTestimonial.image}
                  alt={t(currentTestimonial.authorKey)}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/10"
                />
                <div className="flex-1">
                  <p className="font-bold text-foreground text-lg">
                    {t(currentTestimonial.authorKey)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t(currentTestimonial.roleKey)}
                  </p>
                  <p className="text-xs text-primary font-medium mt-0.5">
                    {t(currentTestimonial.universityKey)}
                  </p>
                </div>
                <div className="hidden sm:block">
                  <StarRating rating={currentTestimonial.rating} />
                </div>
              </div>
              
              {/* Mobile Rating */}
              <div className="sm:hidden mt-4 flex justify-center">
                <StarRating rating={currentTestimonial.rating} />
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-border shadow-md hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-border shadow-md hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="text-center">
          <Link to="/testimonials">
            <ButtonDS variant="primary" size="lg">
              {t("testimonial.cta", "Read More Success Stories")}
            </ButtonDS>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
