import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Award, Users, Globe, GraduationCap, Building } from "lucide-react";
import { cn } from "@/lib/utils";

// Stats data
const statsData = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    labelKey: "stats.students",
    fallback: "Students Helped",
  },
  {
    icon: Building,
    value: 100,
    suffix: "+",
    labelKey: "stats.universities",
    fallback: "Partner Universities",
  },
  {
    icon: Globe,
    value: 9,
    suffix: "",
    labelKey: "stats.countries",
    fallback: "Countries",
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    labelKey: "stats.successRate",
    fallback: "Success Rate",
  },
  {
    icon: GraduationCap,
    value: 10,
    suffix: "+",
    labelKey: "stats.experience",
    fallback: "Years Experience",
  },
];

// Animated counter hook
const useAnimatedCounter = (
  end: number,
  duration: number = 2000,
  startOnView: boolean = true
): [number, React.RefObject<HTMLDivElement>] => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      // Animate immediately
      animateCounter();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated, startOnView]);

  const animateCounter = () => {
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return [count, ref as React.RefObject<HTMLDivElement>];
};

// Individual stat card
const StatCard = ({
  icon: Icon,
  value,
  suffix,
  label,
  index,
}: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  index: number;
}) => {
  const [count, ref] = useAnimatedCounter(value, 2000);

  return (
    <div
      ref={ref}
      className={cn(
        "relative text-center p-6 rounded-2xl",
        "bg-card border border-border shadow-md",
        "transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-accent/50",
        "group"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className={cn(
        "w-14 h-14 mx-auto mb-4 rounded-xl",
        "bg-accent/10 flex items-center justify-center",
        "transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20"
      )}>
        <Icon className="w-7 h-7 text-accent" />
      </div>

      {/* Value */}
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
        {count.toLocaleString()}
        <span className="text-accent">{suffix}</span>
      </div>

      {/* Label */}
      <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f172a'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="ds-container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            {t("stats.subtitle", "Our Impact")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("stats.title", "Transforming Lives Through Education")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("stats.description", "Join thousands of students who have achieved their dreams with our guidance")}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={t(stat.labelKey, stat.fallback)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
