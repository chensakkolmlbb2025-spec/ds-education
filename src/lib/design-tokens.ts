/**
 * DS Education Design System - Design Tokens
 * 
 * A comprehensive design token system implementing 8pt grid spacing,
 * consistent typography scale, and professional color palette.
 */

// ============================================
// SPACING SYSTEM (8pt Grid)
// ============================================
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
} as const;

// ============================================
// SECTION SPACING
// ============================================
export const sectionSpacing = {
  // Vertical padding for sections
  section: {
    sm: 'py-12',            // 48px - compact sections
    md: 'py-16 md:py-20',   // 64-80px - standard sections
    lg: 'py-20 md:py-24 lg:py-32', // 80-128px - hero sections
  },
  // Container max widths
  container: {
    sm: 'max-w-3xl',        // 48rem - narrow content
    md: 'max-w-5xl',        // 64rem - medium content
    lg: 'max-w-7xl',        // 80rem - full width
  },
  // Gaps for grids
  gap: {
    cards: 'gap-6 lg:gap-8',    // 24-32px
    sections: 'gap-12 lg:gap-16', // 48-64px
    items: 'gap-4',              // 16px
  },
} as const;

// ============================================
// TYPOGRAPHY SCALE
// ============================================
export const typography = {
  // Display - Hero titles (use sparingly)
  display: {
    lg: 'text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]',
    md: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]',
    sm: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2]',
  },
  // Headings
  heading: {
    h1: 'text-3xl md:text-4xl font-bold tracking-tight leading-tight',
    h2: 'text-2xl md:text-3xl font-bold leading-snug',
    h3: 'text-xl md:text-2xl font-semibold leading-snug',
    h4: 'text-lg md:text-xl font-semibold leading-normal',
    h5: 'text-base md:text-lg font-semibold leading-normal',
  },
  // Body text
  body: {
    lg: 'text-lg leading-relaxed',
    md: 'text-base leading-relaxed',
    sm: 'text-sm leading-relaxed',
  },
  // UI text
  ui: {
    label: 'text-sm font-medium leading-none',
    caption: 'text-xs leading-tight',
    button: 'text-sm font-semibold',
  },
} as const;

// ============================================
// COLOR PALETTE
// ============================================
export const colors = {
  // Primary - Navy Blue
  primary: {
    DEFAULT: 'hsl(222, 47%, 20%)',
    light: 'hsl(222, 47%, 30%)',
    dark: 'hsl(222, 47%, 15%)',
    foreground: 'hsl(0, 0%, 100%)',
  },
  // Accent - Orange
  accent: {
    DEFAULT: 'hsl(14, 90%, 55%)',
    light: 'hsl(14, 90%, 65%)',
    dark: 'hsl(14, 90%, 45%)',
    foreground: 'hsl(0, 0%, 100%)',
  },
  // Semantic colors
  semantic: {
    success: 'hsl(142, 76%, 36%)',
    warning: 'hsl(38, 92%, 50%)',
    error: 'hsl(0, 84%, 60%)',
    info: 'hsl(199, 89%, 48%)',
  },
  // Social media brand colors
  social: {
    facebook: '#1877F2',
    instagram: '#E4405F',
    twitter: '#1DA1F2',
    linkedin: '#0A66C2',
    tiktok: '#000000',
    telegram: '#0088cc',
    whatsapp: '#25D366',
  },
} as const;

// ============================================
// SHADOWS
// ============================================
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  // Custom shadows
  card: '0 2px 8px -2px rgb(0 0 0 / 0.08), 0 4px 16px -4px rgb(0 0 0 / 0.12)',
  'card-hover': '0 8px 24px -4px rgb(0 0 0 / 0.15), 0 12px 32px -8px rgb(0 0 0 / 0.18)',
  nav: '0 1px 3px 0 rgb(0 0 0 / 0.08)',
  'nav-scrolled': '0 4px 12px -2px rgb(0 0 0 / 0.12)',
  glow: '0 0 20px rgba(238, 108, 77, 0.3)',
} as const;

// ============================================
// BORDER RADIUS
// ============================================
export const borderRadius = {
  none: '0',
  sm: '0.25rem',    // 4px
  DEFAULT: '0.5rem', // 8px
  md: '0.5rem',      // 8px
  lg: '0.75rem',     // 12px
  xl: '1rem',        // 16px
  '2xl': '1.5rem',   // 24px
  full: '9999px',
} as const;

// ============================================
// TRANSITIONS
// ============================================
export const transitions = {
  fast: 'transition-all duration-150 ease-out',
  DEFAULT: 'transition-all duration-200 ease-out',
  medium: 'transition-all duration-300 ease-out',
  slow: 'transition-all duration-500 ease-out',
  // Specific transitions
  colors: 'transition-colors duration-200',
  transform: 'transition-transform duration-200',
  shadow: 'transition-shadow duration-200',
  opacity: 'transition-opacity duration-200',
} as const;

// ============================================
// ANIMATION PRESETS
// ============================================
export const animations = {
  // Entrance animations
  fadeIn: 'animate-fade-in',
  fadeInUp: 'animate-fade-in-up',
  fadeInDown: 'animate-fade-in-down',
  fadeInLeft: 'animate-fade-in-left',
  fadeInRight: 'animate-fade-in-right',
  // Scale animations
  scaleIn: 'animate-scale-in',
  // Loading
  spin: 'animate-spin',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
} as const;

// ============================================
// BREAKPOINTS
// ============================================
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================
// Z-INDEX SCALE
// ============================================
export const zIndex = {
  dropdown: 50,
  sticky: 100,
  overlay: 200,
  modal: 300,
  popover: 400,
  tooltip: 500,
} as const;

// ============================================
// COMPONENT PRESETS
// ============================================
export const componentPresets = {
  // Card variants
  card: {
    base: 'rounded-xl transition-all duration-300',
    default: 'bg-card border border-border shadow-card hover:shadow-card-hover',
    navy: 'bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-lg',
    outline: 'border-2 border-primary bg-background',
    elevated: 'bg-card shadow-lg hover:shadow-xl',
  },
  // Button sizes
  button: {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-13 px-8 text-lg',
    xl: 'h-16 px-10 text-lg',
  },
  // Input sizes
  input: {
    sm: 'h-9 text-sm',
    md: 'h-11 text-base',
    lg: 'h-13 text-lg',
  },
  // Avatar sizes
  avatar: {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-32 h-32',
    '3xl': 'w-48 h-48',
  },
} as const;

// ============================================
// UTILITY CLASSES
// ============================================
export const utilities = {
  // Interactive states
  hoverLift: 'hover:-translate-y-1 hover:shadow-lg transition-all duration-300',
  hoverScale: 'hover:scale-105 transition-transform duration-200',
  hoverGlow: 'hover:shadow-glow transition-shadow duration-300',
  // Focus states
  focusRing: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  // Text utilities
  textBalance: 'text-balance',
  textPretty: 'text-pretty',
  // Layout utilities
  centerAbsolute: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
} as const;

// Export all tokens as default
const designTokens = {
  spacing,
  sectionSpacing,
  typography,
  colors,
  shadows,
  borderRadius,
  transitions,
  animations,
  breakpoints,
  zIndex,
  componentPresets,
  utilities,
};

export default designTokens;
