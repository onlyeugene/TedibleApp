"use client";

import React, { useState } from "react";
import Contact from "./contact/page";
import ReportIssues from "./report/page";
import Response from "./response/page";

const Help = () => {
  const [currentPage, setCurrentPage] = useState("contact");

  const renderPage = () => {
    switch (currentPage) {
      case "contact":
        return <Contact />;
      case "report":
        return <ReportIssues />;
      case "response":
        return <Response />;
      default:
        return <Contact />;
    }
  };

  return (
    <>
      {/* <h1 className="text-secondaryLight">Help</h1> */}
      <div className="flex flex-col lg:flex-row gap-8 pl-6 items-start">
        {/* Sidebar with links */}
        <div className="xl:max-w-[273px] 2xl:max-w-[400px] grid gap-6 bg-white rounded-[8px] text-secondary px-[28px] pt-[46px] pb-[264px]">
          <button
            onClick={() => setCurrentPage("contact")}
            className={`flex gap-4 items-center hover:rounded-[8px] px-4 py-[8px] ${
              currentPage === "contact"
                ? " bg-secondaryLight text-primary rounded-[8px]"
                : ""
            }`}
            // style={{ minWidth: "206px" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className={`${
                currentPage === "contact"
                  ? "stroke-white fill-none"
                  : "stroke-black fill-none"
              }`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3096 15.2724C18.3096 15.5724 18.243 15.8807 18.1013 16.1807C17.9596 16.4807 17.7763 16.7641 17.5346 17.0307C17.1263 17.4807 16.6763 17.8057 16.168 18.0141C15.668 18.2224 15.1263 18.3307 14.543 18.3307C13.693 18.3307 12.7846 18.1307 11.8263 17.7224C10.868 17.3141 9.90964 16.7641 8.95964 16.0724C8.0013 15.3724 7.09297 14.5974 6.2263 13.7391C5.36797 12.8724 4.59297 11.9641 3.9013 11.0141C3.21797 10.0641 2.66797 9.11406 2.26797 8.1724C1.86797 7.2224 1.66797 6.31406 1.66797 5.4474C1.66797 4.88073 1.76797 4.33906 1.96797 3.83906C2.16797 3.33073 2.48464 2.86406 2.9263 2.4474C3.45964 1.9224 4.04297 1.66406 4.65964 1.66406C4.89297 1.66406 5.1263 1.71406 5.33464 1.81406C5.5513 1.91406 5.74297 2.06406 5.89297 2.28073L7.8263 5.00573C7.9763 5.21406 8.08464 5.40573 8.15964 5.58906C8.23464 5.76406 8.2763 5.93906 8.2763 6.0974C8.2763 6.2974 8.21797 6.4974 8.1013 6.68906C7.99297 6.88073 7.83464 7.08073 7.63464 7.28073L7.0013 7.93906C6.90964 8.03073 6.86797 8.13906 6.86797 8.2724C6.86797 8.33906 6.8763 8.3974 6.89297 8.46406C6.91797 8.53073 6.94297 8.58073 6.95964 8.63073C7.10964 8.90573 7.36797 9.26406 7.73464 9.6974C8.10964 10.1307 8.50964 10.5724 8.94297 11.0141C9.39297 11.4557 9.8263 11.8641 10.268 12.2391C10.7013 12.6057 11.0596 12.8557 11.343 13.0057C11.3846 13.0224 11.4346 13.0474 11.493 13.0724C11.5596 13.0974 11.6263 13.1057 11.7013 13.1057C11.843 13.1057 11.9513 13.0557 12.043 12.9641L12.6763 12.3391C12.8846 12.1307 13.0846 11.9724 13.2763 11.8724C13.468 11.7557 13.6596 11.6974 13.868 11.6974C14.0263 11.6974 14.193 11.7307 14.3763 11.8057C14.5596 11.8807 14.7513 11.9891 14.9596 12.1307L17.718 14.0891C17.9346 14.2391 18.0846 14.4141 18.1763 14.6224C18.2596 14.8307 18.3096 15.0391 18.3096 15.2724Z"
                strokeWidth="1.25"
                strokeMiterlimit="10"
              />
            </svg>

            <span>Contact</span>
          </button>
          <button
            onClick={() => setCurrentPage("report")}
            className={`flex gap-4 items-center hover:rounded-[8px] px-4 py-[8px] ${
              currentPage === "report"
                ? "bg-secondaryLight text-primary rounded-[8px]"
                : ""
            }`}
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              className={`${
                currentPage === "report"
                  ? "stroke-white fill-none"
                  : "stroke-black fill-none"
              }`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.464 14.828C1 13.657 1 12.771 1 9C1 5.229 1 3.343 2.464 2.172C3.93 1 6.286 1 11 1C15.714 1 18.071 1 19.535 2.172C20.999 3.344 21 5.229 21 9C21 12.771 21 13.657 19.535 14.828C18.072 16 15.714 16 11 16C8.49 16 7.2 17.738 5 19V15.788C3.906 15.625 3.101 15.338 2.464 14.828Z"
                // stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="whitespace-nowrap">Report Issues</span>
          </button>
          <button
            onClick={() => setCurrentPage("response")}
            className={`flex gap-4 items-center hover:rounded-[8px] px-4 py-[8px] ${
              currentPage === "response"
                ? "bg-secondaryLight text-primary rounded-[8px]"
                : ""
            }`}
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              className={`${
                currentPage === "response"
                  ? "stroke-white fill-none"
                  : "stroke-black fill-none"
              }`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.464 14.828C1 13.657 1 12.771 1 9C1 5.229 1 3.343 2.464 2.172C3.93 1 6.286 1 11 1C15.714 1 18.071 1 19.535 2.172C20.999 3.344 21 5.229 21 9C21 12.771 21 13.657 19.535 14.828C18.072 16 15.714 16 11 16C8.49 16 7.2 17.738 5 19V15.788C3.906 15.625 3.101 15.338 2.464 14.828Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 7.514H13C13.5304 7.514 14.0391 7.72471 14.4142 8.09979C14.7893 8.47486 15 8.98357 15 9.514V12M7 7.514L9.39 10.027M7 7.514L9.39 5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Response</span>
          </button>
        </div>

        {/* Content area */}
        <div className="bg-white rounded-[8px] p-8 ">
            {renderPage()}  
        </div>
      </div>
    </>
  );
};

export default Help;
