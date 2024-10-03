"use client";

import Link from "next/link";
import Google from "@/assets/home/register/google.svg";
import TechStudio from "@/assets/home/register/techstudio.svg";

import Image from "next/image";
import Input from "@/components/input";
import Button from "@/components/buttons";
import { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
// import Map from "@/components/ui/map";
const Login: React.FC = () => {
  const [userType, setUserType] = useState("");
  return (
    <div className="signUp text-white bg-cover w-full bg-center h-screen flex  flex-col justify-center items-center">
      <div className="items-center flex flex-col ">
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
          <form className="flex flex-col gap-4 text-sm">
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-col pt-5 gap-2">
                <label htmlFor="email">Email</label>
                <Input className="" type="text" />
              </div>
              <div className="flex flex-col pt-5 gap-2">
                <label htmlFor="password">Password</label>
                <Input type="password" />
                <Link href="/forgotpassword">
                  <p className="pt-2 text-[#FF7834]">Forgot Password?</p>
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <Button className="w-full rounded-md">Log In</Button>
              <div className="pt-5 text-center">
                <p className="pb-5">
                  Don&apos;t have an account?{" "}
                  <Link href="/register">
                    <span className="text-[#FF7834]">Sign Up</span>
                  </Link>
                </p>
                <hr />
                <p className="pt-5">or Log In with</p>
                <div className="flex gap-5 justify-center pt-2">
                  <Image
                    src={Google}
                    alt="Google Icon"
                    width={26}
                    height={26}
                  />
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
      {/* <Map /> */}
    </div>
  );
};

export default Login;
