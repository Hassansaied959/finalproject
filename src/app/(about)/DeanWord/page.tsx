"use client";
import React from "react";
import "./dean.css";
import { useSelector } from "react-redux";
const Page = () => {
  const language = useSelector((state) => state.language);

  return (
    <>
      <div className="w-[95%] xl:w-[80%]  mx-auto py-20">
        <div className="flex flex-col lg:flex-row gap-x-16">
          <div className="flex flex-col items-center mb-4">
            <div className="Dean-photo">
              <img
                src="/images/Dean.jpg"
                alt="Dean's Photo"
                className=" border border-2 border-black"
              />
            </div>

            <div className="Biography-Section mt-4 w-full v-sm:w-[400px]">
              <div className="Bio-Content text-center lg:w-[400px]  py-4">
                <h3> College Dean </h3>
                <p> Prof. Osama Omara </p>

                <div className="biography">
                  <a href="#" target="_blank">
                    Biography
                    <i className="fa-solid fa-user"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Dean-content text-xl">
            <p>
              {language === "english"
                ? "We welcome you to the website of the Faculty of Computers and Information - hurghada University, <br />and based on the prominent role of computer and information technologies in the modern era <br />and the huge technological revolution witnessed in this field in the past few years,<br />the college has played its role in qualifying specialized technical cadres from its graduates <br /> who are able to deal efficiently with computer technology and the information technology revolution.<br />Within this framework, the college and its human cadresrepresented by faculty members and their assistants, <br /> in addition to its financial capabilities, offers three academicprograms <br /> that we always strive to develop to obtain a bachelor’sdegree <br />in the following specializations:<br />• Computer Science • Information Systems • InformationTechnology <br />The college also allows its graduates to obtain variouspostgraduate degrees, starting with a postgraduate diploma <br />and ending with a doctorate in those disciplines<br /> to support all areas of work with skills and expertise in the field of computers and information technology.<br /> We wish you the pleasure of touring the pages of our website onthe Internet<br /> and invite you to learn more about the college's programs and various activities."
                : "نرحب بكم في موقع كلية الحاسبات والمعلومات - جامعة الغردقة، حيث تلعب الكلية دورًا بارزًا في تأهيل كوادر تقنية متخصصة قادرة على التعامل مع تقنيات الحاسوب وتكنولوجيا المعلومات، من خلال تقديم ثلاثة برامج أكاديمية للبكالوريوس (علوم الحاسب، نظم المعلومات، تكنولوجيا المعلومات) وبرامج دراسات عليا متنوعة من الدبلوم إلى الدكتوراه، وندعوكم للاستمتاع بجولة في موقعنا للتعرف على البرامج والأنشطة المختلفة."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
