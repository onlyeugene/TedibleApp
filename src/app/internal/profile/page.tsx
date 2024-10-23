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
  // const [newImage, setImage] = useState<File | null>(null);

  console.log(session);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the updated session object
    const updatedData = {
      firstname: newName || session?.user?.firstname,
      lastname: newLastName || session?.user?.lastname,
      phone: newPhone || session?.user?.phone,
      // image: newImage ? URL.createObjectURL(newImage) : session?.user?.image,
    };

    // Update the session
    await update(updatedData);
  };

  return (
    <div className="px-5 w-full">
      <h1>My Profile</h1>
      <div className="flex sm:flex-row flex-col w-full gap-3 mt-10">
        <div className="border bg-white flex flex-col justify-center items-center w-1/2 gap-4 rounded-2xl">
          <Image
            src={session?.user?.image || ''}
            alt="profile picture"
            className="rounded-full text-center border"
            width={120}
            height={120}
          />
          <h2 className="font-semibold text-xl">
            {session?.user?.firstname} {session?.user?.lastname}
          </h2>
        </div>

        <div className="w-full border bg-white px-5 py-5 rounded-2xl">
          <h1>Personal Information</h1>
          <form className="mt-5 flex flex-col gap-4" onSubmit={handleProfileUpdate}>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="firstname">First Name</label>
                <Input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder={session?.user?.firstname}
                  className="px-2 w-full py-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="lastname">Last Name</label>
                <Input
                  type="text"
                  value={newLastName}
                  onChange={(e) => setNewLastName(e.target.value)}
                  placeholder={session?.user?.lastname}
                  className="px-2 w-full py-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="phone">Phone Number</label>
                <Input
                  type="text"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder={session?.user?.phone?.toString()}
                  className="px-2 w-full py-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="tsaId">TSA ID</label>
                <Input
                  type="text"
                  placeholder="Enter TSA ID"
                  className="px-2 w-full py-2 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                value={session?.user?.email}
                className="px-2 py-2 rounded-md"
              />
            </div>
            <div>
              <Button  className="flex items-start justify-start py-2 px-5">
                Edit Profile
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
