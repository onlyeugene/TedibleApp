import { useEffect, useState, useRef } from "react";


export const useDropdownExternal = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const dropdownTriggerRef = useRef<HTMLSpanElement>(null); // Ref for the arrow trigger

  const handleDropdown = () => setDropdown(!dropdown);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)&&  dropdownTriggerRef.current &&
      !dropdownTriggerRef.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    };

    if (dropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdown]);

  return { dropdown, handleDropdown, dropdownRef, dropdownTriggerRef };
};


// hooks/useDropdown.ts


export const useDropdownInternal = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const dropdownTriggerRef = useRef<HTMLSpanElement>(null); // Ref for the arrow trigger

  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        dropdownTriggerRef.current &&
        !dropdownTriggerRef.current.contains(event.target as Node) // Check if click is on arrow
      ) {
        setDropdown(false);
      }
    }

    if (dropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  return { dropdown, handleDropdown, dropdownRef, dropdownTriggerRef };
};
