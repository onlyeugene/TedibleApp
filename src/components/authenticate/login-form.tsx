"use client";

import { FaCheckCircle, FaEye, FaEyeSlash, FaRegCircle } from "react-icons/fa";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "../../types/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { CardWrapper } from "./auth-card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import FormError from "./form-error";
import FormSuccess from "./form-success";
import { signIn } from "next-auth/react";


const LoginForm: React.FC = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showEye, setShowEye] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const toggleEye = useCallback(() => {
    setShowEye(!showEye);
  }, [showEye, setShowEye]);

  const [userType, setUserType] = useState<string>("student");
  const router = useRouter();

  const handleSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      setLoading(true);
      
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        userType: userType,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error || "Login failed"); 
        toast.error(result.error || "Login failed");
        return;
      }

      setSuccess("Login successful");
      toast.success("Login successful");
      
      // Immediately route to loader page
      // router.push("/loading");
      router.replace("/internal/dashboard");

    } catch (error) {
      setError("Something went wrong");
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signUp text-white bg-cover w-full bg-center h-screen flex flex-col justify-center items-center">
      <div className="items-center flex flex-col">
        <div className="">
          <CardWrapper
            headerLabel="Log In"
            content={
              <p className=" text-white">Don&apos;t have an account ?</p>
            }
            backButtonLabel="Sign Up"
            backButtonHref="/auth/register"
            showSocial
          >
            <div className="flex justify-between text-sm md:gap-20 gap-10 text-nowrap w-full pb-6">
              <div
                className="flex items-center gap-1"
                onClick={() => setUserType("student")}
              >
                {userType === "student" ? (
                  <FaCheckCircle size={17} className="text-tertiary" />
                ) : (
                  <FaRegCircle
                    size={17}
                    className="text-gray-600 bg-gray-600 rounded-full"
                  />
                )}
                <p>Log in as a User</p>
              </div>
              <div
                className="flex items-center gap-1"
                onClick={() => setUserType("vendor")}
              >
                {userType === "vendor" ? (
                  <FaCheckCircle size={17} className="text-tertiary" />
                ) : (
                  <FaRegCircle
                    size={17}
                    className="text-gray-600 bg-gray-600 rounded-full"
                  />
                )}
                <p>Log in as a Vendor</p>
              </div>
            </div>
            <FormProvider {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="pb-4">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="johndoe@example.com"
                          {...field}
                          disabled={loading}
                          type="email"
                          className="placeholder:text-gray-400 text-black text-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="xxxxxxx"
                          {...field}
                          disabled={loading}
                          type={showEye ? "text" : "password"}
                          className="placeholder:text-gray-400 text-black text-sm"
                        />
                      </FormControl>
                      {showEye ? (
                        <FaEye
                          onClick={toggleEye}
                          style={{ color: "black" }}
                          className="absolute top-9 right-2"
                        />
                      ) : (
                        <FaEyeSlash
                          onClick={toggleEye}
                          style={{ color: "black" }}
                          className="absolute top-9 right-2"
                        />
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Link
                  href="/forgot-password"
                  className="text-tertiary italic text-sm mt-2"
                >
                  Forgot password?
                </Link>

                {error && <FormError message={error} />}
                {success && <FormSuccess message={success} />}
                <Button
                  className="w-full bg-gray-300 active:bg-tertiary disabled:bg-gray-300 mt-5 hover:bg-tertiary"
                  type="submit"
                >
                  Login
                </Button>
              </form>
            </FormProvider>
          </CardWrapper>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
