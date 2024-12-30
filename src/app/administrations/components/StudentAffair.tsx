"use client";
import React from "react";
import AdministrationStarter from "./AdministrationStarter";
import { useSelector } from "react-redux";

const StudentAffair = () => {
  const language = useSelector((state) => state.language);

  const specializations = [
    "تحرير استمارات الكشف الطبى للطلاب المقبولين بالكلية .",
    "إصدار البطاقات الجامعية ( الكارنيه ) بعد أن يسدد الطالب الرسم المقرر .",
    "تأجيل التجنيد للطلاب الذكور فوق سن الـ18 عام لحين التخرج أو بلوغ سن الـ28 سنة .",
    "إصدار شهادات القـــيـــد .",
    "إجراءات صرف المكافأة التفوق .",
    "",
  ];
  return (
    <div>
      <h1 className="text-lg v-sm:text-2xl font-bold mb-2">
        {language === "english" ? "Student Affairs" : "شؤون الطلاب"}
      </h1>
      <div className="text-center mb-10">
        <h2 className="text-center text-primary font-bold text-lg v-sm:text-2xl mb-4">
          {language === "english"
            ? "Ms. Marlene Malak Milad"
            : "استاذة. مارلين ملاك"}
        </h2>
        <h3 className="text-[#0000006E] mb-1">
          {language === "english"
            ? "Director of Student Affairs"
            : "مدير شؤون الطلاب"}
        </h3>
        <p className="text-secondary">
          {language === "english"
            ? "Mr. Abu Al-Saud Habishi"
            : "استاذ .ابو السعود حبشى"}{" "}
        </p>
        <p className="text-secondary">
          {language === "english"
            ? "Mr. Mona Hamam Gad Ahmed"
            : "استاذة . منى همام جاد احمد "}
        </p>
      </div>
      <AdministrationStarter
        title={
          language === "english"
            ? "Student affairs specializations"
            : "مهام شئون الطلاب"
        }
      />
      <ol
        style={{ listStyleType: "decimal" }}
        className={`${language === "english" ? "ml-6" : "mr-6"} text-lg mb-10`}
      >
        <li className="mb-2">
          {language === "english"
            ? "Preparing medical examination forms for students accepted into the college."
            : "إعداد نماذج الفحص الطبي للطلبة المقبولين في الكلية."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Issuing university ID cards (carnets) after the student pays the required fee."
            : "إصدار بطاقات الهوية الجامعية (كارنيهات) بعد قيام الطالب بدفع الرسوم المطلوبة"}{" "}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Postponing military service for male students over the age of 18 until graduation or reaching the age of 28."
            : "تأجيل الخدمة العسكرية للطلاب الذكور الذين تزيد أعمارهم عن 18 عاما حتى التخرج أو بلوغهم سن 28 عاما."}{" "}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Issuing enrollment certificates."
            : "إصدار شهادات التسجيل ."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Procedures for disbursing the excellence scholarship."
            : "إجراءات صرف منحة التميز"}
        </li>
        <li className="mb-2">
          {" "}
          <p>
            {language === "english"
              ? "Approving all documents issued by the Youth Welfare Administration:"
              : "اعتماد جميع المستندات الصادرة عن إدارة رعاية الشباب:"}
          </p>{" "}
          <ul style={{ listStyleType: "disc" }} className="ml-2">
            <li>
              {" "}
              {language === "english"
                ? "Passport application forms,"
                : "نماذج طلب جواز السفر ،"}
            </li>
            <li>
              {language === "english"
                ? "Identity card applications,"
                : "طلبات بطاقات الهوية،"}
            </li>
            <li>
              {language === "english"
                ? "Social solidarity fund applications,"
                : "طلبات صندوق التضامن الاجتماعي ،"}
            </li>
            <li>
              {language === "english"
                ? "Sports course registration forms,:"
                : "استمارات التسجيل في الدورات الرياضية:"}
            </li>
            <li>
              {language === "english"
                ? "Referring students for medical examination in preparation for transfers or approving medical excuses."
                : "إحالة الطلاب للفحص الطبي تمهيدا للتحويلات أو إقرار الأعذار الطبية."}
            </li>
          </ul>
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Receiving applications from graduates with higher qualifications who wish to enroll."
            : "استقبال الطلبات من الخريجين ذوي المؤهلات العليا الراغبين في الالتحاق"}{" "}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Receiving applications from students expelled from other colleges and reviewing their total scores."
            : "استقبال طلبات الطلبة المطرودين من الكليات الأخرى ومراجعة علاماتهم الإجمالية"}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Receiving applications from disabled individuals and referring them to the medical commission to assess their condition."
            : "تلقي طلبات الأشخاص ذوي الإعاقة وإحالتها إلى اللجنة الطبية لتقييم حالتهم."}{" "}
        </li>
        <li className="mb-2">
          {" "}
          {language === "english"
            ? "Examination-related tasks."
            : "المهام المتعلقة بالفحص."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Tasks related to graduates."
            : "المهام المتعلقة بالخريجين."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Issuing graduation certificates."
            : "إصدار شهادات التخرج."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Issuing temporary certificates."
            : "إصدار الشهادات المؤقتة."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Issuing grade certificates for the years of study at the college."
            : "إصدار شهادات الدرجات لسنوات الدراسة في الكلية."}{" "}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Handing over the files of graduating students after confirming their clearance from the college."
            : "تسليم ملفات الطلاب المتخرجين بعد التأكد من براءة ذمتهم من الكلية."}{" "}
        </li>
      </ol>
      <AdministrationStarter
        title={
          language === "english"
            ? "Documents required for new students at the Faculty of Computers and Artificial Intelligence in Hurghada"
            : "المستندات المطلوبة للطلاب المستجدين بكلية الحاسبات والذكاء الاصطناعي بالغردقة"
        }
      />
      <ol
        style={{ listStyleType: "decimal" }}
        className={`font-bold ${language === "english" ? "ml-6" : "mr-6"} text-lg`}
      >
        <li>
          {language === "english" ? "Nomination card." : "بطاقة الترشيح."}
        </li>
        <li>
          {language === "english" ? "Birth certificate." : "شهادة الميلاد"}
        </li>
        <li>{language === "english" ? "6 personal photos." : "6 صور شخصية"}</li>
        <li>
          {language === "english"
            ? "Copy of the ID card."
            : "صورة من البطاقة الشخصية"}
        </li>
        <li>
          {language === "english"
            ? "Copy of the guardian's ID card."
            : "صورة من البطاقة الشخصية لولى الامر"}
        </li>
        <li>
          {language === "english"
            ? "High school certificate."
            : "شهادة الثانوية العامة "}
        </li>
        <li>{language === "english" ? "Plastic folder." : "ملف بلاستيكى"}</li>
      </ol>
    </div>
  );
};

export default StudentAffair;
