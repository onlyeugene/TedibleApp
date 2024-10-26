import React from "react";
import { Link } from "react-router-dom";
import component1 from "../../src/assets/img/Component 1.png";

const CoverPage = () => {
  return (
    <div className="container pb-5">
      <div className="d-md-flex align-items-center gap-5 my-5 cardd">
        <div className="d-flex flex-column gap-3 position-relative">
          <h1 className="text-start">
            <span className="d-block fw-bold">Manage your Tasks on</span>
            <span className=" fw-bold main-color">Task Duty</span>
          </h1>
          <p className="fs-3 text-start lor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            sapiente sit earum? Dignissimos quae nobis harum atque eligendi
            placeat consequatur quis officia ab! Eveniet accusantium odit
            dignissimos, modi tempora dicta!
          </p>
          <Link to="/tasks">
            <button className="px-5 py-2 position-absolute text-white fs-4 border-0 rounded-2 bg-button">
              Go to My Tasks
            </button>
          </Link>
        </div>
        <img src={component1} alt="" />
      </div>
    </div>
  );
};

export default CoverPage;
