import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Enhanced button variants with DS Education branding
const buttonDSVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary - Navy background (main CTA)
        primary:
          "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary shadow-sm hover:shadow-md active:scale-[0.98]",
        // Secondary - Lighter background
        secondary:
          "bg-primary/10 text-primary hover:bg-primary/20 focus-visible:ring-primary active:scale-[0.98]",
        // Accent - Gold/Yellow for important CTAs
        accent:
          "bg-accent text-primary hover:bg-accent/90 focus-visible:ring-accent shadow-sm hover:shadow-md active:scale-[0.98]",
        // Outline - Bordered style
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white focus-visible:ring-primary active:scale-[0.98]",
        // Ghost - No background
        ghost:
          "bg-transparent text-primary hover:bg-primary/5 focus-visible:ring-primary active:scale-[0.98]",
        // Link - Text style with underline
        link:
          "bg-transparent text-primary underline-offset-4 hover:underline focus-visible:ring-primary p-0 h-auto",
        // White - For dark backgrounds
        white:
          "bg-white text-primary hover:bg-white/90 focus-visible:ring-white shadow-sm hover:shadow-md active:scale-[0.98]",
        // Destructive - For dangerous actions
        destructive:
          "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500 shadow-sm hover:shadow-md active:scale-[0.98]",
        // Success - For positive actions
        success:
          "bg-green-500 text-white hover:bg-green-600 focus-visible:ring-green-500 shadow-sm hover:shadow-md active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-lg [&_svg]:size-4",
        md: "h-10 px-5 text-sm rounded-lg [&_svg]:size-4",
        lg: "h-12 px-6 text-base rounded-xl [&_svg]:size-5",
        xl: "h-14 px-8 text-lg rounded-xl [&_svg]:size-5",
        icon: "h-10 w-10 rounded-lg [&_svg]:size-5",
        "icon-sm": "h-8 w-8 rounded-md [&_svg]:size-4",
        "icon-lg": "h-12 w-12 rounded-xl [&_svg]:size-6",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      rounded: {
        md: "rounded-lg",
        lg: "rounded-xl",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      // Link variant doesn't need padding adjustments
      {
        variant: "link",
        size: "sm",
        className: "px-0",
      },
      {
        variant: "link",
        size: "md",
        className: "px-0",
      },
      {
        variant: "link",
        size: "lg",
        className: "px-0",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

// Loading spinner component
const ButtonSpinner = ({ className }: { className?: string }) => (
  <svg
    className={cn("animate-spin", className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export interface ButtonDSProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonDSVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const ButtonDS = React.forwardRef<HTMLButtonElement, ButtonDSProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      rounded,
      asChild = false,
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || isLoading;

    return (
      <Comp
        className={cn(
          buttonDSVariants({ variant, size, fullWidth, rounded, className })
        )}
        ref={ref}
        disabled={isDisabled}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && <ButtonSpinner className="size-4" />}
        {!isLoading && leftIcon}
        {isLoading && loadingText ? loadingText : children}
        {!isLoading && rightIcon}
      </Comp>
    );
  }
);
ButtonDS.displayName = "ButtonDS";

// Icon Button - Convenience wrapper for icon-only buttons
export interface IconButtonDSProps
  extends Omit<ButtonDSProps, "leftIcon" | "rightIcon" | "children"> {
  icon: React.ReactNode;
  "aria-label": string;
}

const IconButtonDS = React.forwardRef<HTMLButtonElement, IconButtonDSProps>(
  ({ icon, size = "icon", variant = "ghost", ...props }, ref) => (
    <ButtonDS ref={ref} size={size} variant={variant} {...props}>
      {icon}
    </ButtonDS>
  )
);
IconButtonDS.displayName = "IconButtonDS";

// Button Group - For related actions
interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  attached?: boolean;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, attached = false, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      className={cn(
        "inline-flex",
        attached
          ? "[&>button]:rounded-none [&>button:first-child]:rounded-l-lg [&>button:last-child]:rounded-r-lg [&>button:not(:last-child)]:border-r-0"
          : "gap-2",
        className
      )}
      {...props}
    />
  )
);
ButtonGroup.displayName = "ButtonGroup";

export { ButtonDS, IconButtonDS, ButtonGroup, buttonDSVariants, ButtonSpinner };
