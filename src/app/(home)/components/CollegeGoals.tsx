"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useSelector } from "react-redux";
const CollegeGoals = () => {
  const language = useSelector((state) => state.language);

  const [selectedGoal, setSelectedGoal] = useState<string>("none");
  return (
    <div className="py-16">
      <div className="w-[90%] md-sm:w-[70%] mx-auto flex justify-between items-center flex-col gap-10 xl:flex-row xl:gap-0">
        <div className={`${language === "english" ? "xl:mr-16" : "xl:ml-16"}`}>
          <h1 className="text-3xl mb-10 xl:text-start text-center">
            <span className="xl:border border-x-transparent border-t-transparent xl:border-4 pb-2 border-primary">
              {language === "english" ? "welcome " : "مرحبا "}
            </span>
            {language === "english"
              ? "to computer science Faculty"
              : "فى كلية الحاسبات والذكاء الاصطناعى"}
          </h1>
          <button
            className={`${selectedGoal === "vision" ? "bg-primary text-white" : "bg-gray-100"} transition-color duration-500 w-full flex justify-between items-center px-5 py-4`}
            onClick={() => {
              if (selectedGoal === "vision") {
                setSelectedGoal("none");
              } else {
                setSelectedGoal("vision");
              }
            }}
          >
            <p className="text-2xl font-bold">
              {language === "english" ? "vision" : "الرؤية"}
            </p>{" "}
            <MdArrowForwardIos
              className={`${selectedGoal === "vision" && "rotate-90"} transition-transform duration-500`}
            />
          </button>
          <div
            className={`${selectedGoal === "vision" ? "h-28 bg-gray-50 py-4 overflow-y-scroll" : "h-0"}  px-2 transition-all duration-500 overflow-hidden w-full custom-scroll`}
          >
            {language === "english"
              ? "Achieving excellence and leadership locally and globally in the field of computer science, information systems and technology and building a digital society through sustainable development,effective community partnership and internationalization."
              : "تحقيق التميز والريادة محليا وعالميا في مجال علوم الحاسب ونظم المعلومات والتكنولوجيا وبناء مجتمع رقمي من خلال التنمية المستدامة والشراكة المجتمعية الفعالة والتدويل."}
          </div>
          <button
            className={`${selectedGoal === "message" ? "bg-primary text-white" : "bg-gray-100"} transition-color duration-500 w-full flex justify-between items-center px-5 py-4`}
            onClick={() => {
              if (selectedGoal === "message") {
                setSelectedGoal("none");
              } else {
                setSelectedGoal("message");
              }
            }}
          >
            <p className="text-2xl font-bold">
              {language === "english" ? "message" : "الرسالة"}
            </p>
            <MdArrowForwardIos
              className={`${selectedGoal === "message" && "rotate-90"} transition-transform duration-500`}
            />
          </button>
          <div
            className={`${selectedGoal === "message" ? "h-28 bg-gray-50 py-4 overflow-y-scroll" : "h-0"}  px-2 transition-all duration-500 overflow-hidden w-full custom-scroll`}
          >
            {language === "english"
              ? "Graduating a generation of graduates proficient in computer science and artificial intelligence receiving education from specialized professors with the aim of making a qualitative leap in the development of the country intellectually and culturally in line with global changes in the field of computer science and artificial intelligence"
              : "تخريج جيل من الخريجين يتقنون علوم الحاسب والذكاء الاصطناعي يتلقون التعليم من أساتذة متخصصين بهدف إحداث نقلة نوعية في تنمية البلاد فكريا وثقافيا بما يتماشى مع المتغيرات العالمية في مجال علوم الحاسب والذكاء الاصطناعي"}
          </div>
        </div>
        <Image
          src="/images/college1.jpg"
          width={450}
          height={490}
          alt="img"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default CollegeGoals;
