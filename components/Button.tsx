import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, icon = false, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-sm";
  
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-800 border border-transparent",
    outline: "bg-transparent text-stone-900 border border-stone-900 hover:bg-stone-900 hover:text-white",
    white: "bg-white text-stone-900 hover:bg-stone-100 border border-transparent shadow-sm",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;