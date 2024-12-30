"use client";
import React from "react";
import { useSelector } from "react-redux";

const MainBox = ({ title, children }) => {
  const language = useSelector((state) => state.language);

  return (
    <div className="Main-Div py-12 ">
      <span className="Title mb-6 px-10  flex">
        <img
          src="/images/pin-icon.png"
          alt="Pin Icon"
          className={`iconimage ${language === "english" ? "mr-4" : "ml-4"}`}
        />
        {title} <br />{" "}
      </span>
      <div className="px-10">{children}</div>
    </div>
  );
};

export default MainBox;
