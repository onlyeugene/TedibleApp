"use client";

import Button from "@/components/buttons";
import Input from "@/components/input";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useRef } from "react";

import { LuPenLine } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";

export default function Dashboard() {
  const { data: session, update } = useSession();
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newImage, setNewImage] = useState(session?.user?.image || ""); // Store the new image
  const [editing, setEditing] = useState(false);
  const [showModal, setShowModal] = useState({ visible: false, success: true }); // Modal state

  // Ref for the file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleProfileUpdate = async () => {
    try {
      const updatedData = {
        firstName: newName || session?.user?.firstName,
        lastName: newLastName || session?.user?.lastName,
        phone: newPhone || session?.user?.phone,
        image: newImage || session?.user?.image,
      };

      // Update session data and switch off editing mode
      await update(updatedData);
      setEditing(false);

      // Show success modal
      setShowModal({ visible: true, success: true });
    } catch (error) {
      // Show failure modal
      setShowModal({ visible: true, success: false });
    } finally {
      // Hide modal after 3 seconds
      setTimeout(() => {
        setShowModal({ visible: false, success: true });
      }, 3000);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Preview the selected image
      const imageURL = URL.createObjectURL(file);
      setNewImage(imageURL);
    }
  };

  const openFilePicker = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Simulate a click on the file input
    }
  };

  return (
    <div className="px-5 w-full">
      <h1 className="sm:text-2xl font-semibold text-xl text-secondary">
        My Profile
      </h1>
      <div className="flex sm:flex-row flex-col w-full gap-3 mt-10">
        <div className="sm:border border-none bg-white flex sm:flex-col flex-row sm:justify-center justify-start items-center sm:w-1/2 w-full gap-4 rounded-2xl">
          <div className="relative">
            {session ? (
              <Image
                src={newImage}
                alt="profile picture"
                className="rounded-full text-center border w-[9rem] h-[9rem]"
                width={120}
                height={120}
              />
            ) : (
              <RxAvatar className="w-40 h-40" />
            )}
            {/* Pen icon that opens the file picker */}
            <LuPenLine
              style={{ color: "white" }}
              className="border rounded-full bottom-0 right-3 py-1 absolute w-8 h-8 bg-tertiary border-tertiary cursor-pointer"
              onClick={openFilePicker}
            />
          </div>
          <h2 className="font-semibold sm:text-xl text-[16.85px]">
            {session?.user?.firstName} {session?.user?.lastName}
          </h2>
        </div>

        <div className="w-full sm:border border-none bg-white px-5 py-5 rounded-2xl">
          <h1 className="sm:text-2xl text-secondary">Personal Information</h1>
          <form
            className="mt-5 flex flex-col gap-4"
            onSubmit={handleProfileUpdate}
          >
            <div className="flex gap-10">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="firstname" className="sm:text-sm text-xs">
                  First Name
                </label>
                <Input
                  type="text"
                  value={newName}
                  disabled={!editing} // Disable input if not editing
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder={session?.user?.firstName}
                  className={`mt-1 px-2 py-2 block w-full border text-sm sm:text-xs ${
                    editing ? "border-gray-300" : "border-[#CED4DA] bg-gray-100"
                  } rounded-md shadow-sm focus:border-tertiary sm:text-sm`}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="lastname" className="sm:text-sm text-xs">
                  Last Name
                </label>
                <Input
                  type="text"
                  value={newLastName}
                  disabled={!editing} // Disable input if not editing
                  onChange={(e) => setNewLastName(e.target.value)}
                  placeholder={session?.user?.lastName}
                  className={`mt-1 px-2 py-2 block w-full border text-sm sm:text-xs ${
                    editing ? "border-gray-300" : "border-[#CED4DA] bg-gray-100"
                  } rounded-md shadow-sm focus:border-tertiary sm:text-sm`}
                />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="phone" className="sm:text-sm text-xs">
                  Phone Number
                </label>
                <Input
                  type="text"
                  value={newPhone}
                  disabled={!editing} // Disable input if not editing
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder={session?.user?.phone?.toString()}
                  className={`mt-1 px-2 py-2 block w-full border text-sm sm:text-xs ${
                    editing ? "border-gray-300" : "border-[#CED4DA] bg-gray-100"
                  } rounded-md shadow-sm focus:border-tertiary sm:text-sm`}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="tsaId" className="sm:text-sm text-xs">
                  TSA ID
                </label>
                <Input
                  type="text"
                  placeholder="Enter TSA ID"
                  disabled={!editing} // Disable input if not editing
                  className={`mt-1 px-2 py-2 block w-full border text-sm sm:text-xs ${
                    editing ? "border-gray-300" : "border-[#CED4DA] bg-gray-100"
                  } rounded-md shadow-sm focus:border-tertiary sm:text-sm`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="sm:text-sm text-xs">
                Email
              </label>
              <Input
                type="text"
                placeholder={session?.user?.email}
                disabled={!editing}
                className={`mt-1 px-2 py-2 block w-full border text-sm sm:text-xs ${
                  editing ? "border-gray-300" : "border-[#CED4DA] bg-gray-100"
                } rounded-md shadow-sm focus:border-tertiary sm:text-sm`}
              />
            </div>
            <div>
              {editing ? (
                <Button
                  className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
                  onClick={handleProfileUpdate}
                >
                  Save Changes
                </Button>
              ) : (
                <Button
                  onClick={() => setEditing(true)} // Enable editing on click
                  className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Modal for update success or failure */}
      {showModal.visible && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md shadow-lg">
            {showModal.success ? (
              <p className="text-green-600 font-bold">Update Successful!</p>
            ) : (
              <p className="text-red-600 font-bold">Update Failed!</p>
            )}
          </div>
        </div>
      )}

      {/* Hidden file input for selecting profile image */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef} // Reference to trigger file input programmatically
        className="hidden"
        onChange={handleFileChange} // Handle file selection
      />
    </div>
  );
}
