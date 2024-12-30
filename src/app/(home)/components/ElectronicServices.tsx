"use client";
import SectionStarter from "@/app/components/SectionStarter";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

const ElectronicServices = () => {
  const language = useSelector((state) => state.language);

  return (
    <div className="py-16 bg-[#E0E7F2ED]">
      <div className="container">
        <SectionStarter
          title={
            language === "english"
              ? "electronic services"
              : "الخدمات الالكنرونية"
          }
        />
        <div className="grid grid-cols-3 mt-4">
          <div className="flex flex-col items-center">
            <Image
              src="/icons/electronic1.png"
              width={40}
              height={40}
              className="w-20 sm:w-28 md:w-40"
              alt="image"
            />
            <h2 className="md:text-2xl font-bold">
              {language === "english" ? "students" : "الطلاب"}
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/electronic2.png"
              className="w-20 sm:w-28 md:w-40"
              width={40}
              height={40}
              alt="img"
            />
            <h2 className="md:text-2xl font-bold">
              {language === "english"
                ? "post-graduate education"
                : "التعليم بعد الجامعى"}
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/icons/electronic3.png"
              className="w-20 sm:w-28 md:w-40"
              width={40}
              height={40}
              alt="img"
            />
            <h2 className="md:text-2xl font-bold">
              {language === "english" ? "departments" : "الاقسام"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicServices;
