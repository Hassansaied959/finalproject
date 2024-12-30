"use client";
import React from "react";
import { useSelector } from "react-redux";

const PageDirection = ({ children }) => {
  const language = useSelector((state) => state.language);

  return (
    <div style={{ direction: language === "english" ? "ltr" : "rtl" }}>
      {children}
    </div>
  );
};

export default PageDirection;
