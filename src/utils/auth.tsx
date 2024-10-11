// auth.tsx

export const validateForm = ({
    name,
    email,
    password,
    phone,
  }: {
    name: string;
    email: string;
    password: string;
    phone: string;
  }) => {
  const errors: { [key: string]: string } = {};
  
    if (!name) {
      errors.name = "Full name is required";
    }
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      errors.email = "Valid email is required";
    }
  
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
  
    const phonePattern = /^[0-9]{10,}$/;
    if (!phone || !phonePattern.test(phone)) {
      errors.phone = "Valid phone number is required";
    }
  
    return errors;
  };
  