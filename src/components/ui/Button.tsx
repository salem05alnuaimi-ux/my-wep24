"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  isLoading?: boolean;
  as?: "button" | "span" | "div";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      className = "",
      isLoading,
      disabled,
      as = "button",
      ...props
    },
    ref
  ) => {
    // Base classes
    const baseClasses =
      "relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 overflow-hidden";
    
    // Corners - curved as requested (rounded-xl)
    const corners = "rounded-xl";

    // Size classes
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-10 py-4 text-lg",
    };

    // Variant classes
    const variantClasses = {
      primary:
        "bg-primary text-white shadow-[0_0_20px_rgba(138,28,20,0.2)] hover:shadow-[0_0_30px_rgba(138,28,20,0.4)] hover:bg-red-800",
      secondary:
        "bg-secondary text-white shadow-sm hover:bg-primary",
      outline:
        "border-2 border-primary/50 text-primary hover:border-primary hover:bg-primary/5 backdrop-blur-sm",
      ghost:
        "text-primary hover:bg-primary/5",
    };

    const combinedClasses = `${baseClasses} ${corners} ${sizeClasses[size]} ${variantClasses[variant]} ${
      disabled || isLoading ? "opacity-60 cursor-not-allowed" : ""
    } ${className}`;

    const inner = (
      <>
        {variant === "primary" && !disabled && (
          <span className="absolute inset-0 z-0 overflow-hidden rounded-xl">
            <span className="absolute left-[-20%] top-0 h-full w-[140%] -skew-x-12 bg-white/20 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:left-[120%] animate-[shine_3s_infinite]" />
          </span>
        )}
        <span className="relative z-10 flex items-center gap-2">
          {isLoading ? (
            <svg
              className="animate-spin -ml-1 mr-2 h-5 w-5 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          ) : null}
          {children}
        </span>
      </>
    );

    const motionProps = {
      className: combinedClasses,
      whileHover: disabled || isLoading ? {} : { scale: 1.02 },
      whileTap: disabled || isLoading ? {} : { scale: 0.98 },
    };

    if (as === "span") {
      return <motion.span {...motionProps}>{inner}</motion.span>;
    }
    if (as === "div") {
      return <motion.div {...motionProps}>{inner}</motion.div>;
    }
    return (
      <motion.button ref={ref} {...motionProps} disabled={disabled || isLoading} {...props}>
        {inner}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
