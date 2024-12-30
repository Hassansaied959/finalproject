"use client";
import { useSelector } from "react-redux";

function MissionBody() {
  const language = useSelector((state) => state.language);

  return (
    <>
      <div className="Main-Div py-12 px-10">
        <span className="Title mb-6  flex">
          <img
            src="/images/pin-icon.png"
            alt="Pin Icon"
            className={`iconimage ${language === "english" ? "mr-4" : "ml-4"}`}
          />
          {language === "english" ? "Faculty Mission" : "رسالة الكلية"} <br />{" "}
        </span>
        <p className=" mt-8 text-lg">
          {language === "english"
            ? `The Faculty of Computers and Information, Hurghada University, is an
               educational, research and service institution that adopts innovation and qualifies
               cognitively and skillfully graduates able to compete in the labor market and community service
               in accordance with global developments while adhering to the principles of originality.`
            : `كلية الحاسبات والمعلومات، جامعة الغردقة، هي مؤسسة تعليمية وبحثية وخدمية
               تتبنى الابتكار وتؤهل خريجين معرفيًا ومهاريًا قادرين على المنافسة
               في سوق العمل وخدمة المجتمع وفقًا للتطورات العالمية مع الالتزام بمبادئ الأصالة.`}
        </p>
      </div>
    </>
  );
}

export default MissionBody;
