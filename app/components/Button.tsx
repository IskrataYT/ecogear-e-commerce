"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "lg" | "sm";
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export default function Button({ 
  variant = "primary", 
  size = "default",
  children, 
  className = "", 
  showArrow = true,
  ...props 
}: ButtonProps) {
  
  const baseStyles = `
    relative inline-flex items-center justify-center 
    font-heading-tech font-bold uppercase tracking-[0.12em] 
    transition-all duration-400 ease-out
    cursor-pointer
    overflow-hidden
    group
  `;
  
  const sizes = {
    default: "px-7 py-4 text-xs",
    lg: "px-10 py-5 text-sm",
    sm: "px-5 py-3 text-[10px]"
  };

  const variants = {
    primary: `
      bg-[var(--color-brand-highlight)] 
      text-[#1a1a1a]
      shadow-[0_4px_20px_rgba(197,160,101,0.4)]
      hover:shadow-[0_6px_30px_rgba(197,160,101,0.6)]
      hover:scale-[1.02]
    `,
    secondary: `
      bg-[var(--color-brand-primary)] 
      text-white
      shadow-[0_4px_20px_rgba(47,72,56,0.3)]
      hover:shadow-[0_6px_30px_rgba(47,72,56,0.5)]
      hover:scale-[1.02]
    `,
    outline: `
      bg-transparent 
      text-white
      border border-white/60
      backdrop-blur-sm
      hover:bg-white/10
      hover:border-white
    `,
    ghost: `
      bg-white/10
      text-white
      backdrop-blur-sm
      border border-white/20
      hover:bg-white/20
      hover:border-white/40
    `
  };

  return (
    <button 
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Shine effect on hover */}
      <span className="absolute inset-0 w-full h-full">
        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700 ease-out"></span>
      </span>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        <span>{children}</span>
        {showArrow && (
          <svg 
            className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </span>
    </button>
  );
}
