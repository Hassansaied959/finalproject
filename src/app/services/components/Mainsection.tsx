import React from "react";
import "./mainsection.css";

const Mainsection = ({ content }) => {
  return (
    <div className="section">
      <main className="!w-full main-section">
        {/* Heading with Pin Icon and Service Name */}
        <div className="heading-with-icon">
          <img
            src="/images/pin-icon.png"
            alt="Pin Icon"
            className="iconimage"
          />
          <h1 className="font-bold text-2xl">
            {content && content.name ? content.name : "Welcome"}
          </h1>{" "}
          {/* Display dynamic service name */}
        </div>

        {/* Dynamic Content */}
        <div className="section-content">
          <div className="content">
            {content && content.details
              ? content.details
              : "Please select a service to view details."}{" "}
            {/* Display dynamic details */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Mainsection;
