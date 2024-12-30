"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Mainsection from "./components/Mainsection";
import { useSelector } from "react-redux";
import { baseUrl } from "../constants/constants";
const Service = () => {
  const language = useSelector((state) => state.language);
  const [loader, setLoader] = useState(true);
  const [linkIndex, setLinkIndex] = useState(0);

  const [services, setServices] = useState([]);
  const fetchServices = async () => {
    const res = await fetch(
      `${baseUrl}/api/Service/All/${linkIndex + 1}/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    console.log(data);
    setServices(data);
    setLoader(false);
  };

  useEffect(() => {
    fetchServices();
  }, [language, linkIndex]);

  const links = [
    "Lecture Schedule",
    "Exam Schedule",
    "Exam Results",
    "Employee Affairs",
    "Secretarial Forms",
    "Student Affairs",
    "Youth Care",
  ];
  const arLinks = [
    "جدول المحاضرات",
    "جدول الامتحانات",
    "نتائج الامتحانات",
    "شئون الموظفين",
    "نماذج السكرتارية",
    "شئون الطلاب",
    "رعاية الشباب",
  ];

  return (
    <div>
      <div className="w-[95%] md:w-[90%] xl:w-[80%] my-10 mx-auto">
        <ul className="bg-secondary text-white flex flex-wrap  justify-between text-lg px-10 py-2 rounded-lg  mx-auto">
          {language === "english"
            ? links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setLinkIndex(index);
                  }}
                  className={`${linkIndex === index ? "font-bold" : "font-normal"} transition-all duration-800`}
                >
                  {link}
                </button>
              ))
            : arLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setLinkIndex(index);
                  }}
                  className={`${linkIndex === index ? "font-bold" : "font-normal"} transition-all duration-800`}
                >
                  {link}
                </button>
              ))}
        </ul>
        <div className="pb-20 pt-12">
          <Mainsection
            content={{
              name:
                language === "english" ? links[linkIndex] : arLinks[linkIndex],
              details: services.map((service, index) => (
                <p key={index}>
                  <a href={service.pdfDescription} target="_blank">
                    {service.title}
                  </a>
                </p>
              )),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
