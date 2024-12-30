"use client";
import SectionStarter from "@/app/components/SectionStarter";
import React from "react";
import { useSelector } from "react-redux";

const ImportantLinks = () => {
  const language = useSelector((state) => state.language);

  const imagesLinks = [
    "http://sdsegypt2030.com/",
    "https://scholar.google.com/",
    "https://www.ekb.eg/",
    "https://naqaae.eg/",
  ];
  return (
    <div>
      <div className="container py-16">
        <SectionStarter
          title={language === "english" ? "important links" : "روابط مهمه"}
        />
        <div className="flex justify-between max-w-4xl mx-auto">
          {imagesLinks.map((link, index) => (
            <a href={link} target="_blank" key={index}>
              <img src={`/images/importantlinks${index + 1}.png`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantLinks;
