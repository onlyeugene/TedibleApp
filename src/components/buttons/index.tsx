import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string; // Optional className prop for custom styles
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  const baseStyles = "border text-sm"; // Base button styles
  return (
    <button className={`${baseStyles} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

