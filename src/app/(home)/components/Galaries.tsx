"use client";
import SectionStarter from "@/app/components/SectionStarter";
import React from "react";
import { useSelector } from "react-redux";

const Galaries = () => {
  const language = useSelector((state) => state.language);

  const galariesNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="py-16">
      <div className="container">
        <SectionStarter
          title={language === "english" ? "Photo allery" : "معرض الصور"}
        />
        <div className="flex overflow-x-scroll">
          {galariesNumbers.map((gallery, index) => (
            <img
              key={index}
              src={`/images/gallery${gallery}.jpg`}
              className="w-80 h-80 mr-8 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galaries;
