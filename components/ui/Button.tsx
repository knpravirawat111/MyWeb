"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105",
    secondary:
      "bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 hover:scale-105",
    outline:
      "border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = motion.button;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={buttonClasses}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <Link href={href}>
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={buttonClasses}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <MotionComponent
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
    >
      {children}
    </MotionComponent>
  );
}
