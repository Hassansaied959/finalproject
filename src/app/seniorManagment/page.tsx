"use client";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const language = useSelector((state) => state.language);

  const administrators = [
    {
      image: "/images/admin1.jpg",
      role: language === "english" ? "college Dean’s:" : "عميد الكلية",
      name:
        language === "english"
          ? "Mr. Professor Dr. Osama Emara"
          : "الدكتور اسامة عماره",
      subRole: language === "english" ? "College Dean's" : "عميد الكلية",
    },
    {
      image: "/images/admin2.jpg",

      role:
        language === "english"
          ? "College Vice Dean for Education and Student Affairs:"
          : "وكيل الكلية لشئون التعليم والطلاب:",
      name:
        language === "english"
          ? "Mr.Prof.Dr. Osama Ahmed Atta"
          : "أ. د. أسامة أحمد عطا",
      subRole: language === "english" ? "assistant professor" : "أستاذ مساعد",
    },
    ,
    {
      image: "/images/admin3.jpg",

      role:
        language === "english"
          ? "Vice Dean of the College for Community Service and Environmental Development Affairs:"
          : "وكيل الكلية لشئون خدمة المجتمع وتنمية البيئة:",
      name:
        language === "english"
          ? "Dr. Rabab Ismail Zamzami"
          : "د. رباب إسماعيل زمزامي",
      subRole: language === "english" ? "assistant professor" : "أستاذ مساعد",
    },
  ];
  return (
    <div>
      <div className="w-[90%] xl:w-[80%] mx-auto my-10">
        {administrators.map((admin, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row shadow-xl shadow-[#eee] mb-20 overflow-hidden rounded-xl border border-1"
          >
            <img src={admin.image} className="lg:w-[400px] h-[430px] " />
            <div className="flex items-center flex-col flex-1 mt-10 mb-4">
              <p className="text-xl sm:text-3xl text-center text-primary font-bold mb-10 px-2">
                {admin.role}
              </p>
              <p className="text-xl sm:text-3xl font-bold">{admin.name}</p>
              <p className="text-xl sm:text-3xl font-bold mt-8 text-slate-500 mb-8">
                {admin.subRole}
              </p>
              <p className="text-[#B6000096] font-bold text-lg mb-4">
                {language === "english" ? "Biography" : "السيره الذاتية"}
              </p>
              <img src="/images/cv.png" className="h-[40px] w-[40px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
