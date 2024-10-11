import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string; // Optional className prop for custom styles
  onClick?: () => void; // onClick should be a function
  disabled? : boolean
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, disabled }) => {
  const baseStyles = "border text-sm"; // Base button styles

  return (
    <button className={`${baseStyles} ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
