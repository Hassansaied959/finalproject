"use client";
import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const language = useSelector((state) => state.language);

  return (
    <div className="text-white" style={{ backgroundColor: "rgb(1 34 73)" }}>
      <div className="container py-8 relative">
        <div className="left-1/2 w-[1px] h-[85%] -translate-x-1/2 bg-white absolute top-1/2 -translate-y-1/2 hidden sm:inline"></div>
        <div className="flex justify-between flex-col sm:flex-row">
          <div className="sm:w-1/2 sm:pr-2">
            <p className="text-3xl font-bold mb-10">
              {language === "english" ? "Related sites" : "المواقع المرتبطة"}
            </p>
            <div
              className={`relative ${language === "english" ? "pl-3" : "pr-4"} text-xl mb-6`}
            >
              <a href="https://scu.eg/" target="_blank">
                <div
                  className={`w-0 h-0 absolute ${language === "english" ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 border border-[6px] border-y-transparent border-r-transparent border-white`}
                ></div>{" "}
                {language === "english"
                  ? "Supreme Council of Universities"
                  : " المجلس الأعلى للجامعات"}
              </a>
            </div>
            <div
              className={`relative ${language === "english" ? "pl-3" : "pr-4"} text-xl mb-6`}
            >
              <a href="http://portal.mohesr.gov.eg/" target="_blank">
                <div
                  className={`w-0 h-0 absolute ${language === "english" ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 border border-[6px] border-y-transparent border-r-transparent border-white`}
                ></div>{" "}
                {language === "english"
                  ? "Ministry of Higher Education"
                  : "وزارة التعليم العالى"}
              </a>
            </div>
            <div
              className={`relative ${language === "english" ? "pl-3" : "pr-4"} text-xl mb-6`}
            >
              <a href="https://naqaae.eg/" target="_blank">
                <div
                  className={`w-0 h-0 absolute ${language === "english" ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 border border-[6px] border-y-transparent border-r-transparent border-white`}
                ></div>{" "}
                {language === "english"
                  ? "National Authority for Quality Assurance of Education"
                  : "الهيئة الوطنية لضمان جودة التعليم"}
              </a>
            </div>
          </div>
          <div
            className={`sm:w-1/2 ${language === "english" ? "sm:pl-6" : "sm:pr-6"}`}
          >
            <p className="text-3xl font-bold mb-10">
              {language === "english" ? "contact data" : "بيانات الاتصال"}
            </p>
            <p className="text-lg mb-6">
              {language === "english"
                ? "hurghada University, Faculty of Computers and Information - Al-Gouna Street - hurghada - Egypt"
                : "جامعة الغردقة -كلية الحاسبات والذكاء الاصطناعى - طريق الجونة - الغردقة - مصر "}
            </p>
            <p className="mb-2">
              <span className="font-bold mr-2">
                {language === "english" ? "phone" : "الهاتف"}:{" "}
              </span>
              2203274 (50) 20+
            </p>
            <p className="mb-2">
              <span className="font-bold mr-2">
                {language === "english" ? "phone" : "الهاتف"}:{" "}
              </span>
              2203274 (50) 20+
            </p>
            <p className="mb-2">
              <span className="font-bold mr-2">
                {language === "english" ? "email" : "الايميل"}:
              </span>
              cscidean@mans.edu.eg
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="text-center py-2 border border-1 border-white border-x-0 border-b-0">
          {language === "english"
            ? "All rights reserved © 2024 Communications and Information TechnologyCenter - Hurghada University"
            : "جميع الحقوق محفوظة -2024- مركز تكنولوجيا المعلومات"}
        </p>
      </div>
    </div>
  );
};

export default Footer;
