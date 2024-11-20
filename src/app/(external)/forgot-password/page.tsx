import Button from "@/components/buttons";
import Input from "@/components/input";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col forgot bg-center text-primary w-full h-screen justify-center ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[30.45px] font-semibold">Forgot Password?</h1>
        <p className="text-sm">
          No worries, we will send you reset instructions
        </p>
      </div>

      <form
        action=""
        className="flex flex-col justify-center items-center mt-10"
      >
        <div className="flex flex-col justify-start items-start gap-3 text-sm">
          <label htmlFor="email">Enter your email</label>
          <Input
            placeholder="user@email.com"
            className="py-2 px-2 w-[30rem] rounded-md"
          ></Input>
          <Button className="w-full py-4 rounded-md text-[17px] font-bold text-primary bg-tertiary border-tertiary mt-3">
            Email me
          </Button>
        </div>
      </form>
      <div className="flex justify-center items-center mt-5 text-[#FF7834]">
        <Link href="/login" className="flex items-center justify-center gap-5">
          <FaArrowLeft />
          <p>Back to login</p>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
