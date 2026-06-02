"use client";
import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}) => {
  const variantClass = {
    default: "bg-violet-600 text-white hover:bg-violet-500",
    outline: "border border-violet-500/40 text-violet-400 hover:bg-violet-500/10",
    ghost: "hover:bg-white/5 text-slate-300",
  }[variant];

  const sizeClass = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-9 px-3 text-sm",
    lg: "h-12 px-6 text-base",
  }[size];

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
        variantClass,
        sizeClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
