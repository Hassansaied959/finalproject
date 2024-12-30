"use client";
import Overlay from "@/app/components/Overlay";
import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const language = useSelector((state) => state.language);

  return (
    <div className="contact-background relative px-4 py-16">
      <Overlay />
      <div className="max-w-4xl mx-auto text-white relative">
        <h1 className="text-center text-3xl mb-10">
          {" "}
          {language === "english" ? "contact us" : "تواصل معنا"}
        </h1>
        <form className="w-full">
          <div className="flex gap-10">
            <input
              placeholder={language === "english" ? "your name" : "اسمك"}
              className="contact-input"
            />
            <input
              placeholder={
                language === "english" ? "your email" : "بريدك الالكترونى"
              }
              className="contact-input"
            />
          </div>
          <input
            placeholder={language === "english" ? "subject" : "الموضوع"}
            className="contact-input"
          />
          <textarea
            placeholder={language === "english" ? "message" : "الرسالة"}
            className="contact-input h-60"
          />
          <button className="text-white bg-primary px-4 py-4 text-xl rounded-lg w-full">
            {language === "english" ? "send" : "ارسل"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
