"use client";
import React from "react";
import AdministrationStarter from "./AdministrationStarter";
import { useSelector } from "react-redux";

const CollegeSecretary = () => {
  const language = useSelector((state) => state.language);

  return (
    <div>
      <h1 className="text-lg v-sm:text-2xl font-bold mb-4">
        {" "}
        {language === "english" ? "College Secretary" : "سكرتير الكلية "}
      </h1>
      <p className="text-lg v-sm:text-xl font-bold text-[#DF0000] mb-4">
        {language === "english"
          ? "College Secretary/ Mahmoud Mohamed Mohamed"
          : "سكرتير الكلية/ محمود محمد محمد"}{" "}
      </p>
      <AdministrationStarter
        title={language === "english" ? "Job description" : "المسمى الوظيفى"}
      />
      <ul
        style={{ listStyleType: "disc" }}
        className={`${language === "english" ? "ml-6" : "mr-6"} text-lg`}
      >
        <li className="mb-4">
          {language === "english"
            ? "This position is at the top of the administrative roles within the college."
            : "هذا المنصب على رأس الأدوار الإدارية داخل الكلية."}
        </li>
        <li className="mb-4">
          {language === "english"
            ? "The incumbent is responsible for formulating the financial and administrative policies of the college and monitoring theirimplementation."
            : "ويتولى شاغل الوظيفة صياغة السياسات المالية والإدارية للكلية ومراقبة تنفيذها."}
        </li>
        <li className="mb-4">
          <p className="font-bold">
            {" "}
            {language === "english"
              ? "Duties and Responsibilities:"
              : "الواجبات والمسؤوليات"}
          </p>
          {language === "english"
            ? "The incumbent is subject to the general guidance of the Dean of the college."
            : "يخضع شاغل الوظيفة للتوجيه العام لعميد الكلية."}
        </li>
        <li className="mb-4">
          {language === "english"
            ? "Supervise the planning of financial and administrative operations at the college and propose and print the executive programs accordingly."
            : "الإشراف على تخطيط العمليات المالية والإدارية بالكلية واقتراح وطباعة البرامج التنفيذية وفقا لذلك."}
        </li>
        <li className="mb-4">
          {language === "english"
            ? "Oversee the application of laws, regulations, and issued decisions, and monitor their implementation."
            : "الإشراف على تطبيق القوانين واللوائح والقرارات الصادرة ومراقبة تنفيذها."}
        </li>
        <li className="mb-4">
          {language === "english"
            ? "Supervise the preparation of control systems for the execution of all financial activities and monitor their implementation."
            : "الإشراف على إعداد نظم الرقابة لتنفيذ جميع الأنشطة المالية ومراقبة تنفيذها."}{" "}
        </li>
        <li className="mb-4">
          {language === "english"
            ? "Monitor the overall results of the activities of the departments under their supervision and identify means to develop and improve work performance."
            : "مراقبة النتائج الإجمالية لأنشطة الإدارات الخاضعة لإشرافها وتحديد سبل تطوير وتحسين أداء العمل."}{" "}
        </li>
        <li className="mb-8">
          {" "}
          {language === "english"
            ? "Supervise the formulation of purchasing and storage plans for all required items in accordance with the general policy of the university and monitor their implementation."
            : "الإشراف على وضع خطط الشراء والتخزين لجميع الأصناف المطلوبة وفقا للسياسة العامة للجامعة ومتابعة تنفيذها."}
        </li>
        <li className="mb-4">
          {" "}
          {language === "english"
            ? "Supervise the formation of technical committees."
            : "الإشراف على تشكيل اللجان الفنية."}{" "}
        </li>
        <li className="mb-4">
          {language === "english"
            ? "Monitor the implementation of decisions made by the college council and the university council."
            : "مراقبة تنفيذ القرارات التي يتخذها مجلس الكلية ومجلس الجامعة."}
        </li>
        <li className="mb-4">
          {language === "english"
            ? "Participate in specialized technical committees."
            : "المشاركة في اللجان الفنية المتخصصة."}
        </li>
        <li className="mb-4">
          {" "}
          {language === "english"
            ? "Perform any other similar tasks assigned to them."
            : "القيام بأداء أي مهام أخرى مماثلة تم اسنادها إليهم."}
        </li>
      </ul>
    </div>
  );
};

export default CollegeSecretary;
