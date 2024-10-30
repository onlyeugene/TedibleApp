"use client";

import Google from "@/assets/home/register/google.svg";
import TechStudio from "@/assets/home/register/techstudio.svg";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/buttons";
import Input from "@/components/input";
import { signIn } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRegister } from "@/hooks/register";
import { validateForm } from "@/utils/validate";


const Register: React.FC = () => {
  const {
    firstname, setFirstName,
    lastname, setLastname,
    email, setEmail,
    password, setPassword,
    phone, setPhone,
    loading, error,
    handleCreateUser,
  } = useRegister(); // Use custom hook

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm({ firstname, lastname, email, password, phone });

    if (Object.keys(formErrors).length > 0) {
      // Show errors in the UI
      Object.values(formErrors).forEach(error => {
        // Assuming you have toast notifications for errors
        toast.error(error, { position: "top-right", autoClose: 3000 });
      });
      return;
    }

    // If validation passes, proceed with user creation
    handleCreateUser(e);
  };

  return (
    <div className="signUp bg-center bg-cover w-full h-screen text-white flex flex-col justify-center">
      <ToastContainer /> {/* Toast notification container */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="pb-5 text-3xl font-medium">User Sign Up</h1>

        <div className="text-sm">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullname">Full Name</label>
                  <Input
                    className="sm:w-60 py-2 px-2 rounded-md"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="tsa-id">Last Name</label>
                  <Input
                    className="sm:w-60 py-2 px-2 rounded-md"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-5 w-full">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <Input
                    className="sm:w-60 py-2 px-2 rounded-md"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone-number">Phone Number</label>
                  <Input
                    className="sm:w-60 py-2 px-2 rounded-md"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password">Create Password</label>
                <Input
                  className="sm:w-60 py-2 px-2 rounded-md"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="pt-4">
              <div className="flex gap-1">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="text-xs">
                  I agree to all the terms and privacy policy
                </label>
              </div>
              <Button className={`w-full py-2 mt-4 rounded-md ${loading ? ' cursor-not-allowed bg-gray-300 border-gray-300' : 'bg-tertiary border-tertiary'}`} disabled={loading} type="submit">
                {loading ? 'Signing Up...' : 'Sign Up'}
              </Button>
              {error && <p className="text-red-500 text-xs pt-2">{error}</p>}

              <div className="text-center pt-4 flex flex-col gap-2">
                <p className="text-xs flex justify-center gap-1">
                  Already have an account?
                  <Link className="text-[#FF7834]" href="/login">
                    Log in
                  </Link>
                </p>
                <hr />
                <p className="text-xs">or Sign up with</p>
                <div className="flex justify-center gap-4">
                  <Button type="button" onClick={() => signIn("google")} className="border-none">
                    <Image
                      src={Google}
                      alt="Google Icon"
                      width={26}
                      height={26}
                    />
                  </Button>
                  <Image
                    src={TechStudio}
                    alt="TechStudio Icon"
                    width={26}
                    height={26}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
