// // auth.tsx

// export const validateForm = ({
//     firstname,
//     lastname,
//     email,
//     password,
//     phone,
//   }: {
//     firstname: string,
//     lastname: string,
//     email: string;
//     password: string;
//     phone: string;
//   }) => {
//   const errors: { [key: string]: string } = {};
  
//     if (!firstname) {
//       errors.name = "First name is required";
//     }
//     if(!lastname){
//       errors.lastname = "Last name is required"
//     }
  
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!email || !emailPattern.test(email)) {
//       errors.email = "Valid email is required";
//     }
  
//     if (password.length < 6) {
//       errors.password = "Password must be at least 6 characters";
//     }
  
//     const phonePattern = /^[0-9]{10,}$/;
//     if (!phone || !phonePattern.test(phone)) {
//       errors.phone = "Valid phone number is required";
//     }
  
//     return errors;
//   };
  

//   export const validateLoginForm = (email: string, password: string): string | null => {
//     if (!email || !password) {
//       return "Both Email and password are required";
//     }
  
//     if (password.length < 6) {
//       return "Password must be at least 6 characters long";
//     }
  
//     return null;
//   };
  