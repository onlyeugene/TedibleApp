import Button from "@/components/buttons";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

import prompt from "@/assets/internal/dashboard/prompt.svg";

const Header = () => {
  const { data: session } = useSession();

  const [modal, setModal] = useState(false);

  function handleOpenModal() {
    setModal(!modal);
  }

  if (session) {
    return (
      <div className="py-2 flex justify-end px-3">
        <Button
          className="border-none hover:border hover:rounded-sm hover:text-primary hover:bg-tertiary hover:py-1 hover:px-5 py-1 px-5 place-items-end"
          onClick={handleOpenModal}
        >
          Log Out
        </Button>

        {modal && (
          <div
            className="absolute top-0 left-0 w-full h-screen bg-[#00000048] bg-opacity-50 flex justify-center items-center"
            onClick={handleOpenModal}
          >
            <div
              className="bg-primary py-10 px-20 rounded-lg flex flex-col justify-center items-center gap-3"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              <Image src={prompt} alt="prompt icon" width={100} height={100}/>
              <h1 className="text-[22px]">Are you leaving?</h1>
              <p className="text-sm font-light">
                Are you sure you want to log out?
              </p>

              <div className="flex gap-10">
                <Button
                  className="py-2 px-6 rounded-md border-tertiary"
                  onClick={handleOpenModal}
                >
                  Cancel
                </Button>
                <Button
                  className="py-2 px-9 rounded-md bg-tertiary text-primary border-tertiary"
                  onClick={() => signOut()}
                >
                  Yes
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default Header;
