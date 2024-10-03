"use client";

import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import React from "react";

interface UserTypeSelectorProps {
  userType: string;
  setUserType: React.Dispatch<React.SetStateAction<string>>;
}

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({
  userType,
  setUserType,
}) => {

    // const [userType, setUserType] = useState('')
  return (
    <div className="flex justify-between text-sm gap-20">
      <div
        className="flex items-center gap-1"
        onClick={() => setUserType("student")}
      >
        {userType === "student" ? <FaCheckCircle /> : <FaRegCircle />}
        <p>Log in as a student</p>
      </div>
      <div
        className="flex items-center gap-1"
        onClick={() => setUserType("vendor")}
      >
        {userType === "vendor" ? <FaCheckCircle /> : <FaRegCircle />}
        <p>Log in as a vendor</p>
      </div>
    </div>
  );
};

export default UserTypeSelector;
