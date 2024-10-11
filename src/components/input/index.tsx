import React from 'react';

interface InputProps {
  type?: string;            // Type of input (e.g., text, password, email)
  value?: string;           // Value of the input field
  placeholder?: string;     // Placeholder text
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // onChange handler
  className?: string;       // Optional className for custom styles
  required?: boolean
}

const Input: React.FC<InputProps> = ({ type = 'text', value, placeholder, onChange, className, required }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      className={`border outline-none text-black ${className}`} // Add default styles + optional className
    />
  );
};

export default Input;
