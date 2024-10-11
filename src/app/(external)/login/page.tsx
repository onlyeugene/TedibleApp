"use client";

import Link from "next/link";
import Google from "@/assets/home/register/google.svg";
import TechStudio from "@/assets/home/register/techstudio.svg";
import Image from "next/image";
import Input from "@/components/input";
import Button from "@/components/buttons";
import { useState, useEffect } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; 
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Redirect to home if the user is already logged in
  useEffect(() => {
    if (session) {
      const timer = setTimeout(() => {
        router.push('/internal/dashboard');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [session, router]);

  // Handle login request
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const url = "https://tedible-backend.onrender.com/api/auth/SignIn";

    try {
      const response = await axios.post(url, { email, password });

      if (response.status === 200) {
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
        });

        setTimeout(() => {
          router.push("/internal/dashboard");
        }, 3500);
      }
    } catch (error) {
      toast.error("Invalid credentials. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signUp text-white bg-cover w-full bg-center h-screen flex flex-col justify-center items-center">
      <ToastContainer /> {/* Toast notification container */}
      <div className="items-center flex flex-col">
        <h1 className="text-[32px] font-medium pb-10">Log In</h1>
        <div className="">
          <div className="flex justify-between text-sm gap-20">
            <div
              className="flex items-center gap-1"
              onClick={() => {
                setUserType("student");
              }}
            >
              {userType === "student" ? <FaCheckCircle /> : <FaRegCircle />}
              <p>Log in as a student</p>
            </div>
            <div
              className="flex items-center gap-1"
              onClick={() => {
                setUserType("vendor");
              }}
            >
              {userType === "vendor" ? <FaCheckCircle /> : <FaRegCircle />}
              <p>Log in as a vendor</p>
            </div>
          </div>
          <form className="flex flex-col gap-4 text-sm" onSubmit={handleLogin}>
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-col pt-5 gap-2">
                <label htmlFor="email">Email</label>
                <Input
                  className="py-2 px-2 rounded-md"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col pt-5 gap-2">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="py-2 px-2 rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Link href="/forgot-password">
                  <p className="pt-2 text-[#FF7834]">
                    <i>Forgot Password?</i>
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <Button
                className="w-full rounded-md py-2"
                disabled={loading}
              >
                {loading ? "Logging In..." : "Log In"}
              </Button>
              {error && <p className="text-red-500 text-xs pt-2">{error}</p>}

              <div className="pt-5 text-center">
                <p className="pb-5">
                  Don&apos;t have an account?{" "}
                  <Link href="/register">
                    <span className="text-[#FF7834]">Sign Up</span>
                  </Link>
                </p>
                <hr />
                <p className="pt-5">or Log In with</p>
                <div className="flex gap-5 justify-center pt-2 border-none">
                  <button type="button" onClick={() => signIn("google")}>
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

export default Login;
