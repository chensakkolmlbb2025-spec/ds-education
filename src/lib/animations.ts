/**
 * FLAGSHIP ANIMATION SYSTEM
 * World-class motion design patterns for premium user experiences
 * Inspired by Apple, Stripe, and top-tier SaaS products
 */

import { Variants } from "framer-motion";

// ============================================
// PREMIUM EASING CURVES - Natural Physics
// ============================================

const cubicBezier = {
  // Apple-style smooth ease
  apple: [0.4, 0.0, 0.2, 1],
  // Extra smooth for premium feel
  butter: [0.25, 0.1, 0.25, 1],
  // Sharp deceleration
  sharp: [0.4, 0.0, 0.6, 1],
  // Bouncy, playful
  bounce: [0.68, -0.55, 0.265, 1.55],
  // Smooth acceleration
  smooth: [0.43, 0.13, 0.23, 0.96],
  // Gentle, elegant
  elegant: [0.25, 0.46, 0.45, 0.94],
};

// ============================================
// TRANSITION PRESETS - Natural Physics
// ============================================

export const transitions = {
  // Lightning fast micro-interactions
  micro: {
    duration: 0.15,
  },
  // Quick interactions
  fast: {
    duration: 0.3,
  },
  // Standard interactions
  standard: {
    duration: 0.5,
  },
  // Smooth, premium feel
  smooth: {
    duration: 0.7,
  },
  // Slow, cinematic
  slow: {
    duration: 1.0,
  },
  // Ultra slow for hero sections
  hero: {
    duration: 1.2,
  },
  // Bouncy, playful
  bouncy: {
    duration: 0.6,
  },
  // Powerful spring physics
  spring: {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
    mass: 0.8,
  },
  // Smooth spring
  smoothSpring: {
    type: "spring" as const,
    stiffness: 120,
    damping: 18,
    mass: 1,
  },
  // Gentle spring
  gentleSpring: {
    type: "spring" as const,
    stiffness: 80,
    damping: 20,
    mass: 1.2,
  },
};

// ============================================
// ENHANCED SCROLL REVEAL ANIMATIONS
// ============================================

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.smooth,
  },
};

export const fadeInUpHero: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.hero,
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.smooth,
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: transitions.smooth,
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: transitions.smooth,
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: transitions.smooth,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.gentleSpring,
  },
};

export const scaleInLarge: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.4,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.smoothSpring,
  },
};

// Zoom with blur effect (premium)
export const zoomBlur: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.3,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: transitions.slow,
  },
};

// Slide and scale combined
export const slideScaleUp: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.smoothSpring,
  },
};

// Rotate and fade
export const rotateFadeIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -10,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: transitions.smooth,
  },
};

// ============================================
// STAGGER CONTAINERS
// ============================================

// Function to create custom stagger container
export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// ============================================
// CARD ANIMATIONS
// ============================================

export const cardHover = {
  scale: 1.02,
  y: -4,
  transition: transitions.micro,
};

export const cardTap = {
  scale: 0.98,
  transition: transitions.micro,
};

export const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitions.smoothSpring,
  },
};

// ============================================
// BUTTON ANIMATIONS
// ============================================

export const buttonHover = {
  scale: 1.05,
  transition: transitions.micro,
};

export const buttonTap = {
  scale: 0.95,
  transition: transitions.micro,
};

// ============================================
// IMAGE ANIMATIONS
// ============================================

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.slow,
  },
};

export const imageZoom: Variants = {
  hidden: {
    scale: 1.2,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: transitions.smooth,
  },
};

// ============================================
// TEXT ANIMATIONS
// ============================================

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.smooth,
  },
};

export const letterReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.standard,
  },
};

// ============================================
// ICON ANIMATIONS
// ============================================

export const iconFloat = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const iconPulse = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const iconRotate = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  },
};

// ============================================
// BACKGROUND ANIMATIONS
// ============================================

export const gradientFloat = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: "linear",
  },
};

// ============================================
// DRAW ANIMATIONS (for lines, borders)
// ============================================

export const drawLine: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1 },
      opacity: { duration: 0.01 },
    },
  },
};

// ============================================
// COUNTER ANIMATIONS
// ============================================

export const counterVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.bouncy,
  },
};

// ============================================
// PARALLAX CONFIGURATIONS
// ============================================

export const parallaxConfig = {
  slow: { y: [0, 50] },
  medium: { y: [0, 100] },
  fast: { y: [0, 150] },
  reverse: { y: [0, -100] },
};

// ============================================
// VIEWPORT CONFIGURATION
// ============================================

export const viewportConfig = {
  once: true, // Animate only once when entering viewport
  amount: 0.2, // Trigger when 20% is visible
  margin: "0px 0px -100px 0px", // Start animation before element is fully visible
};

export const viewportConfigFull = {
  once: true,
  amount: 0.8, // Trigger when 80% is visible
};

// ============================================
// SECTION ANIMATIONS
// ============================================

export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

// ============================================
// PREMIUM GLASS MORPHISM ANIMATIONS
// ============================================

export const glassReveal: Variants = {
  hidden: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    background: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    backdropFilter: "blur(24px)",
    background: "rgba(255, 255, 255, 0.1)",
    transition: transitions.smooth,
  },
};

// ============================================
// NAVIGATION ANIMATIONS
// ============================================

export const navItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.standard,
  },
};

// ============================================
// MODAL/DIALOG ANIMATIONS
// ============================================

export const modalOverlay: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: transitions.standard,
  },
};

export const modalContent: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transitions.smoothSpring,
  },
};

// ============================================
// LOADING ANIMATIONS
// ============================================

export const spinnerVariants = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Generate stagger delay for child elements
 */
export const getStaggerDelay = (index: number, baseDelay = 0.1) => {
  return index * baseDelay;
};

/**
 * Get scroll-based animation configuration
 */
export const getScrollAnimation = (direction: "up" | "down" | "left" | "right" = "up") => {
  const variants = {
    up: fadeInUp,
    down: fadeInDown,
    left: fadeInLeft,
    right: fadeInRight,
  };

  return {
    variants: variants[direction],
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportConfig,
  };
};
