"use client";

import { FaCheckSquare, FaSquare, FaEye, FaEyeSlash } from "react-icons/fa";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { registerSchema } from "../../types/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { CardWrapper } from "./auth-card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import FormSuccess from "./form-success";
import FormError from "./form-error";

const RegisterForm: React.FC = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showEye, setShowEye] = useState(false);
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  const toggleEye = useCallback(() => {
    setShowEye(!showEye);
  }, [showEye, setShowEye]);

  const handleSubmit = async (values: z.infer<typeof registerSchema>) => {
    if (!checked) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    setLoading(true);
    const url = "/api/auth/register";

    try {
      const response = await axios.post(url, {
        firstName: values.firstname,
        lastName: values.lastname,
        email: values.email,
        phone: values.phone,
        password: values.password,
      });

      if (response.data) {
        toast.success("Registration successful");
        router.replace("/auth/login");
      }
    } catch (error: unknown) {
      setError("An error occurred while registering");
      toast.error("Registration failed");
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signUp text-white bg-cover w-full bg-center min-h-screen flex flex-col justify-center items-center p-4">
      <Button variant="link" className="text-white md:block hidden">
        <Link href="/vendor" className="absolute top-24 right-10 text-sm">
          Sign up as a Vendor
        </Link>
      </Button>
      <div className="items-center flex flex-col w-full md:w-[40rem]">
        <div className="w-full">
          <CardWrapper
            headerLabel="User Sign Up"
            content={<p className=" text-white">Already have an account ?</p>}
            backButtonLabel="Log in"
            backButtonHref="/auth/login"
            showSocial
          >
            <FormProvider {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4 w-full"
              >
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John"
                            {...field}
                            disabled={loading}
                            type="text"
                            autoComplete="given-name"
                            className="placeholder:text-gray-400 text-black text-sm w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Doe"
                            {...field}
                            disabled={loading}
                            type="text"
                            autoComplete="family-name"
                            className="placeholder:text-gray-400 text-black text-sm w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="johndoe@example.com"
                            {...field}
                            disabled={loading}
                            type="email"
                            autoComplete="email"
                            className="placeholder:text-gray-400 text-black text-sm w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="08012345678"
                            {...field}
                            disabled={loading}
                            type="tel"
                            autoComplete="tel"
                            className="placeholder:text-gray-400 text-black text-sm w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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
                          autoComplete="new-password"
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
                {error && <FormError message={error} />}
                {success && <FormSuccess message={success} />}
                <div className="flex items-center gap-2 text-xs  pt-5">
                  <div
                    onClick={() => setChecked(!checked)}
                    className="cursor-pointer"
                  >
                    {checked ? (
                      <FaCheckSquare className="w-4 h-4 text-blue-500" />
                    ) : (
                      <FaSquare className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  <p>I agree to all the terms and privacy policy</p>
                </div>
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

export default RegisterForm;
