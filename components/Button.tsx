import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withIcon?: boolean;
  pulsing?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  withIcon = false,
  pulsing = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-300 rounded-lg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-c92 text-black hover:bg-c92-glow green-glow hover:scale-105 active:scale-95",
    secondary: "bg-zinc-800 text-white hover:bg-zinc-700 hover:text-c92 border border-zinc-700",
    outline: "bg-transparent border-2 border-c92 text-c92 hover:bg-c92/10",
  };

  const pulseAnimation = pulsing ? "animate-pulse-fast" : "";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${pulseAnimation} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {withIcon && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};