import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Card container variants
const cardVariants = cva(
  "rounded-xl transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default: "bg-white border border-gray-100 shadow-card",
        navy: "bg-primary text-white border-none",
        outline: "bg-transparent border-2 border-gray-200 hover:border-primary/30",
        ghost: "bg-transparent border-none shadow-none",
        elevated: "bg-white border-none shadow-card-lg",
        gradient: "bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-card",
      },
      padding: {
        none: "",
        sm: "p-4 md:p-5",
        md: "p-5 md:p-6",
        lg: "p-6 md:p-8",
        xl: "p-8 md:p-10",
      },
      interactive: {
        true: "cursor-pointer hover-lift hover:shadow-card-lg",
        false: "",
      },
      rounded: {
        md: "rounded-lg",
        lg: "rounded-xl",
        xl: "rounded-2xl",
        full: "rounded-3xl",
      },
    },
    compoundVariants: [
      // Navy variant interactive state
      {
        variant: "navy",
        interactive: true,
        className: "hover:bg-primary/90",
      },
      // Outline variant interactive state
      {
        variant: "outline",
        interactive: true,
        className: "hover:border-primary hover:shadow-card",
      },
    ],
    defaultVariants: {
      variant: "default",
      padding: "md",
      interactive: false,
      rounded: "lg",
    },
  }
);

// Card header with consistent styling
const cardHeaderVariants = cva(
  "flex flex-col space-y-1.5",
  {
    variants: {
      size: {
        sm: "pb-3",
        md: "pb-4",
        lg: "pb-6",
      },
      border: {
        true: "border-b border-gray-100 mb-4",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      border: false,
    },
  }
);

// Card title with typography system
const cardTitleVariants = cva(
  "font-heading font-semibold tracking-tight",
  {
    variants: {
      size: {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-2xl",
        xl: "text-3xl",
      },
      variant: {
        default: "text-foreground",
        navy: "text-white",
        muted: "text-muted-foreground",
        primary: "text-primary",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

// Card description variants
const cardDescriptionVariants = cva(
  "font-body",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      variant: {
        default: "text-muted-foreground",
        navy: "text-white/80",
        subtle: "text-gray-500",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

// Types
export interface CardDSProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  as?: React.ElementType;
}

export interface CardDSHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {}

export interface CardDSTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof cardTitleVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface CardDSDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof cardDescriptionVariants> {}

// Components
const CardDS = React.forwardRef<HTMLDivElement, CardDSProps>(
  ({ className, variant, padding, interactive, rounded, as: Comp = "div", ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(cardVariants({ variant, padding, interactive, rounded, className }))}
      {...props}
    />
  )
);
CardDS.displayName = "CardDS";

const CardDSHeader = React.forwardRef<HTMLDivElement, CardDSHeaderProps>(
  ({ className, size, border, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardHeaderVariants({ size, border, className }))}
      {...props}
    />
  )
);
CardDSHeader.displayName = "CardDSHeader";

const CardDSTitle = React.forwardRef<HTMLHeadingElement, CardDSTitleProps>(
  ({ className, size, variant, as: Comp = "h3", ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(cardTitleVariants({ size, variant, className }))}
      {...props}
    />
  )
);
CardDSTitle.displayName = "CardDSTitle";

const CardDSDescription = React.forwardRef<HTMLParagraphElement, CardDSDescriptionProps>(
  ({ className, size, variant, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(cardDescriptionVariants({ size, variant, className }))}
      {...props}
    />
  )
);
CardDSDescription.displayName = "CardDSDescription";

const CardDSContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
);
CardDSContent.displayName = "CardDSContent";

const CardDSFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center pt-4 mt-auto", className)}
      {...props}
    />
  )
);
CardDSFooter.displayName = "CardDSFooter";

// Icon container for cards (like service cards with icons)
const CardDSIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "primary" | "accent" | "navy";
    size?: "sm" | "md" | "lg";
  }
>(({ className, variant = "primary", size = "md", ...props }, ref) => {
  const sizeClasses = {
    sm: "w-10 h-10 text-lg",
    md: "w-12 h-12 text-xl",
    lg: "w-16 h-16 text-2xl",
  };
  
  const variantClasses = {
    default: "bg-gray-100 text-gray-600",
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    navy: "bg-white/10 text-white",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center rounded-xl mb-4 transition-transform group-hover:scale-105",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
});
CardDSIcon.displayName = "CardDSIcon";

export {
  CardDS,
  CardDSHeader,
  CardDSFooter,
  CardDSTitle,
  CardDSDescription,
  CardDSContent,
  CardDSIcon,
  cardVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardDescriptionVariants,
};
