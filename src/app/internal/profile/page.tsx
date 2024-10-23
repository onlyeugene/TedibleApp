"use client";

import Button from "@/components/buttons";
import Input from "@/components/input";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function Dashboard() {
  const { data: session, update } = useSession();
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [editing, setEditing] = useState(false);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the updated session object
    const updatedData = {
      firstname: newName || session?.user?.firstname,
      lastname: newLastName || session?.user?.lastname,
      phone: newPhone || session?.user?.phone,
    };

    // Update the session
    await update(updatedData);
    setEditing(false);
  };

  return (
    <div className="px-5 w-full">
      <h1>My Profile</h1>
      <div className="flex sm:flex-row flex-col w-full gap-3 mt-10">
        <div className="sm:border border-none bg-white flex sm:flex-col flex-row sm:justify-center justify-start items-center sm:w-1/2 w-full gap-4 rounded-2xl">
          <Image
            src={session?.user?.image || ""}
            alt="profile picture"
            className="rounded-full text-center border"
            width={120}
            height={120}
          />
          <h2 className="font-semibold sm:text-xl text-[16.85px]">
            {session?.user?.firstname} {session?.user?.lastname}
          </h2>
        </div>

        <div className="w-full sm:border border-none bg-white px-5 py-5 rounded-2xl">
          <h1>Personal Information</h1>
          <form className="mt-5 flex flex-col gap-4" onSubmit={handleProfileUpdate}>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="firstname">First Name</label>
                <Input
                  type="text"
                  value={newName}
                  disabled={!editing}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder={session?.user?.firstname}
                  className={`mt-1 px-2 py-2 block w-full border ${
                    editing ? "border-gray-300" : "border-[#CED4DA] bg-gray-100"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="lastname">Last Name</label>
                <Input
                  type="text"
                  value={newLastName}
                  disabled={!editing}
                  onChange={(e) => setNewLastName(e.target.value)}
                  placeholder={session?.user?.lastname}
                  className={`mt-1 px-2 py-2 block w-full border ${
                    editing ? "border-gray-300" : "border-[#CED4DA] bg-gray-100"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="phone">Phone Number</label>
                <Input
                  type="text"
                  value={newPhone}
                  disabled={!editing}
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder={session?.user?.phone?.toString()}
                  className={`mt-1 px-2 py-2 block w-full border ${
                    editing ? "border-gray-300" : "border-[#CED4DA] bg-gray-100"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="tsaId">TSA ID</label>
                <Input
                  type="text"
                  placeholder="Enter TSA ID"
                  disabled={!editing}
                  className={`mt-1 px-2 py-2 block w-full border ${
                    editing ? "border-gray-300" : "border-[#CED4DA] bg-gray-100"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                value={session?.user?.email}
                disabled
                className="px-2 py-2 bg-gray-100 rounded-md"
              />
            </div>
            <div>
              {editing ? (
                <Button
                  className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 input-width"
                  type="submit"
                >
                  Save Changes
                </Button>
              ) : (
                <Button
                  onClick={() => setEditing(true)}
                  className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 input-width"
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
