"use client";

import React from "react";
import { Button } from "../ui/button";
import Input from "../input";
import { Circle } from "lucide-react";
// import DeleteAccount from "./delete-account";
import { toast } from "sonner";
import axios from "axios";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Settings = () => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const token = session?.user?.token;

  const router = useRouter();

  const toggleDeleteAccount = async () => {
    try {
      const response = await axios.delete(
        `https://tedible-backend-1.onrender.com/api/auth/delete/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      response.data;
      toast.success("Account deleted successfully.");
      await signOut();
      router.push("/auth/login");
    } catch (error) {
      toast.error("Failed to delete account.");
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-[28.5px] text-secondary mb-5">Settings</h1>
      <div className="bg-white p-5 rounded-xl space-y-10 w-full">
        <div className="flex flex-col md:flex-row gap-20">
          <h1 className="min-w-60 text-2xl font-medium">Email Notification</h1>
          <div className="w-full space-y-6">
            <div className="flex justify-between w-full">
              <div>
                <h2 className="text-base font-medium">Food Purchase</h2>
                <p className="text-sm text-[#747474]">
                  Get your invoice sent to your Email to track your purchase.
                </p>
              </div>
              <div className="my-2">
                <label
                  htmlFor="checkbox"
                  className="relative inline-flex cursor-pointer items-center"
                >
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    id="checkbox"
                  />
                  <div className="h-[1.1rem] w-9 rounded-full border-gray-200 bg-gray-200 after:absolute after:start-[2px] after:top-[.1rem] after:h-[.9rem] after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full transition-all duration-500"></div>
                </label>
              </div>
            </div>
            <hr />
            <div className="flex justify-between w-full">
              <div>
                <h2 className="text-base font-medium">New Offers.</h2>
                <p className="text-sm text-[#747474]">
                  Receive the latest news/information on your new products,
                  discounts <br /> and offers we have to offer.
                </p>
              </div>
              <div className="my-2">
                <label
                  htmlFor="offer-checkbox"
                  className="relative inline-flex cursor-pointer items-center"
                >
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    id="offer-checkbox"
                  />
                  <div className="h-[1.1rem] w-9 rounded-full border-gray-200 bg-gray-200 after:absolute after:start-[2px] after:top-[.1rem] after:h-[.9rem] after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-secondaryLight peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full transition-all duration-500"></div>
                </label>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-20">
          <h1 className="min-w-60 text-2xl font-medium">Security</h1>
          <div className="w-full space-y-6">
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-2">
                <h2 className="text-base font-medium">Password</h2>
                <p className="text-sm text-[#747474]">********************</p>
                <p className="text-sm text-[#747474]">Last changed</p>
              </div>
              <Button
                variant="link"
                className="hover:no-underline text-sm text-secondary font-medium place-items-end"
              >
                Change Password
              </Button>
            </div>
            <hr />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-20">
          <h1 className="min-w-60 text-2xl font-medium">Contact Email</h1>
          <div className="w-full space-y-6">
            <div className="flex flex-col gap-2 relative">
              <h2>Account Email</h2>
              <Input
                type="text"
                placeholder="sandrawilliams@gmail.com"
                className="w-full md:w-[85%] rounded-md p-2 bg-gray-100 border-gray-100"
              />
              <Circle
                className="absolute right-16 top-10"
                style={{ color: "gray" }}
              />
            </div>
            <div className="flex flex-col gap-2 relative">
              <h2>Alternative Email</h2>
              <Input
                type="text"
                placeholder="Enter email"
                className="w-full md:w-[85%] rounded-md p-2 bg-gray-100 border-gray-100"
              />
              <Circle
                className="absolute right-16 top-10"
                style={{ color: "gray" }}
              />
            </div>
            <hr />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-20">
          <h1 className="min-w-60 text-2xl font-medium">Delete Account</h1>
          <div className="w-full space-y-6">
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-2">
                <h2 className="text-base font-medium">Deleting Account</h2>
                <p className="text-sm text-[#747474]">
                  Once your account is deleted, all information attached to your
                  account would be <br />
                  cleared, removed from the system and irretrivable.
                </p>
                <p className="text-sm text-[#747474]">
                  You&apos;ll have to create a new account to conmtinue using
                  Tedible in the future.
                </p>
                <div className="flex gap-4 mt-5">
                  <Button
                    className="bg-tertiary hover:bg-tertiary"
                    onClick={toggleDeleteAccount}
                  >
                    Proceed to delete
                  </Button>
                  <Button className="bg-transparent border-tertiary border text-tertiary hover:bg-transparent">
                    Never mind, keep account.
                  </Button>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
