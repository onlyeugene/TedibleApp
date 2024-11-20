import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string; // Optional className prop for custom styles
  onClick?: () => void; // onClick should be a function
  disabled?: boolean;
  type?: "button" | "submit" | "reset"; // Corrected type to string for HTML button types
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
  type = "button",
}) => {
  const baseStyles = "border text-sm"; // Base button styles

  return (
    <button
      className={`${baseStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type} // Corrected the type prop
    >
      {children}
    </button>
  );
};

export default Button;
