"use client";
import Overlay from "@/app/components/Overlay";
import React from "react";
import { useSelector } from "react-redux";

const Landing = () => {
  const language = useSelector((state) => state.language);

  return (
    <div className="landingImage h-[calc(100vh-450px)] v-sm:h-[calc(100vh-380px)] md-sm:h-[calc(100vh-340px)] sm:h-[calc(100vh-250px)] md:h-[calc(100vh-150px)] relative">
      <img
        src="/images/landing.jpeg"
        className="w-full h-full absolute left-0 top-0"
      />
      <Overlay />
      <div className="container py-10 relative text-white text-center relative top-1/2 -translate-y-1/2">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4">
          {language === "english"
            ? "Welcome to the Faculty of Computer and Artificial Intelligence"
            : "مرحبا بكم فى كلية الحاسبات والذكاء الاصطناعى بالغردقة"}
        </h1>
        <p className="text-lg md-sm:text-xl sm:text-2xl">
          {language === "english" ? "hurghada university" : "جامعة الغردقة"}
        </p>
      </div>
    </div>
  );
};

export default Landing;
