"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { FiEdit3 } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const { data: session, status, update } = useSession();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstname: session?.user?.firstname || "",
    lastname: session?.user?.lastname || "",
    email: session?.user?.email || "",
    phone: session?.user?.phone || "",
    profileImage: session?.user?.image || "/default-avatar.png",
  });

  const [imageFile, setImageFile] = useState<string | null>(null);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageFile(imageUrl);
      setFormData({ ...formData, profileImage: imageUrl });
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/update-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Profile updated and changes saved successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        await update({
          user: {
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email,
            phone: formData.phone,
            image: formData.profileImage,
          },
        });
      } else {
        toast.error("Failed to update profile. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("Error updating profile:", error);
    }
    setEditing(false);
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <h1 className="pb-5 text-xl text-[#0C513F] font-semibold">My Profile</h1>
      <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
        <div className="profile-image md:w-1/3 flex flex-col items-center py-24 bg-white rounded-lg shadow-lg relative">
          <div className="relative group">
            <Image
              src={imageFile || formData.profileImage}
              alt=""
              className="rounded-full w-32 h-32 object-cover"   width={100} 
              height={100} 
            />
            {!imageFile && formData.profileImage === "/default-avatar.png" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
                <p className="text-white text-sm text-center">
                  Uploaded image here
                </p>
              </div>
            )}
            <label
              htmlFor="imageUpload"
              className="absolute top-28 left-20 bg-[#FF7834] rounded-full p-2 cursor-pointer"
            >
              <FiEdit3 className="text-white" />
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <p className="mt-4 font-semibold text-xl">{`${formData.firstname} ${formData.lastname}`}</p>
        </div>

        <div className="personal-info md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl text-[#0C513F] font-semibold mb-4">
            Personal Information
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  disabled={!editing}
                  className={`mt-1 px-2 py-2 block w-full border ${
                    editing ? "border-gray-300" : "border-[#CED4DA]"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  disabled={!editing}
                  className={`mt-1 px-2 py-2 block w-full border ${
                    editing ? "border-gray-300" : "border-[#CED4DA]"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!editing}
                  className={`mt-1 px-2 py-2 block w-full border ${
                    editing ? "border-gray-300" : "border-[#CED4DA]"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="tsa_id"
                  className="block text-sm font-medium text-gray-700"
                >
                  TSA ID
                </label>
                <input
                  type="text"
                  name="tsa_id"
                  value={formData.tsa_id || ""}
                  onChange={handleInputChange}
                  disabled={!editing}
                  className={`mt-1 px-2 py-2 block w-full border ${
                    editing ? "border-gray-300" : "border-[#CED4DA]"
                  } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!editing}
                className={`mt-1 px-2 py-2 block w-full border ${
                  editing ? "border-gray-300" : "border-[#CED4DA]"
                } rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
            </div>
          </div>

          {editing ? (
            <button
              onClick={handleSubmit}
              className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
``;
