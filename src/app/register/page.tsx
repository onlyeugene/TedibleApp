"use client";

import Google from "@/assets/home/register/google.svg";
import TechStudio from "@/assets/home/register/techstudio.svg";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/buttons";
import Input from "@/components/input";
import { signIn } from "next-auth/react";

const Register: React.FC = () => {
  return (
    <div className="signUp bg-center bg-cover w-full h-screen text-white flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="pb-5 text-3xl font-medium">User Sign Up</h1>

        <div className="text-sm ">
          <form
          >
            <div className="flex flex-col gap-3 w-full">
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullname">Full Name</label>
                  <Input className="sm:w-60" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="tsa-id">TSA ID (Optional)</label>
                  <Input className="sm:w-60" type="text" />
                </div>
              </div>
              <div className="flex gap-5 w-full">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <Input className="sm:w-60" type="email" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone-number">Phone Number</label>
                  <Input className="sm:w-60" type="text" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password">Create Password</label>
                <Input className="sm:w-60" type="password" />
              </div>
            </div>

            <div className="pt-4">
              <div className="flex gap-1">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="text-xs">
                  I agree to all the terms and privacy policy
                </label>
              </div>
              <Button className="w-full py-2 mt-4 rounded-md">
                Sign Up
                {/* {loading ? 'Signing Up...' : 'Sign Up'} */}
              </Button>
              {/* {error && <p className="text-red-500 text-xs pt-2">{error}</p>} Display error message */}

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
                  <button type='button' onClick={() => signIn("google")}>
                    <Image
                      src={Google}
                      alt="Google Icon"
                      width={26}
                      height={26}
                    />
                  </button>
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

// use redirect instead
// import React, { useState } from "react";

// import { redirect } from "next/navigation";
// import axios from 'axios';

// const [fullname, setFullName] = useState('');
// const [tsaId, setTsaId] = useState('');
// const [email, setEmail] = useState('');
// const [phone, setPhone] = useState('');
// const [password, setPassword] = useState('');
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState<string | null>(null);
// const router = useRouter();

// const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   setLoading(true);
//   setError(null); // Reset any previous errors

//   const url = 'http://localhost:3001/createuser';
//   try {
//     if (!fullname || !email || !password) {
//       setError('Please fill in all required fields');
//       return;
//     }

//     const response = await axios.post(url, {
//       fullname,
//       tsaId,
//       email,
//       phone,
//       password,
//     });

//     if (!response.data.success) {
//       throw new Error('Failed to create user');
//     }

//     console.log(response.data);
//     router.push('/login');
//   } catch (error) {
//     setError((error as Error).message); // Capture error message
//     console.error(error);
//   } finally {
//     setLoading(false); // Reset loading state
//   }
// };
