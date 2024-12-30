"use client";
import SectionStarter from "@/app/components/SectionStarter";
import React from "react";
import AdministrationStarter from "./AdministrationStarter";
import { useSelector } from "react-redux";

const DeansOffice = () => {
  const language = useSelector((state) => state.language);

  return (
    <div>
      <h1 className="text-lg v-sm:text-2xl font-bold mb-4">
        {" "}
        {language === "english" ? "Dean's Office<" : "مكتب العميد "}{" "}
      </h1>
      <AdministrationStarter
        title={language === "english" ? "Office Tasks:" : "مهام المكتب"}
      />
      <ol
        className={`${language === "english" ? "ml-6" : "mr-6"} text-lg`}
        style={{ listStyleType: "decimal" }}
      >
        <li className="mb-2">
          {language === "english"
            ? "Create individual files for each task: physical folders for reference when needed and digital files saved on the computer."
            : "قم بإنشاء ملفات فردية لكل مهمة: المجلدات الفعلية للرجوع إليها عند الحاجة والملفات الرقمية المحفوظة على الكمبيوتر."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Create additional files (physical folders + computer files) for faculty members and staff containing their personal information."
            : "إنشاء ملفات إضافية (مجلدات فعلية + ملفات كمبيوتر) لأعضاء هيئة التدريس والموظفين تحتوي على معلوماتهم الشخصية"}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Receive correspondence from external parties, whether from within or outside the university, and register it in the incoming correspondence log."
            : "تلقي المراسلات من جهات خارجية سواء من داخل الجامعة أو خارجها وتسجيلها في سجل المراسلات الواردة."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Present this correspondence to the esteemed Professor Dean of the college for review and signature, then redistribute it to the relevant departments after taking photocopies for record-keeping."
            : "تقديم هذه المراسلات إلى الأستاذ عميد الكلية الموقر لمراجعتها وتوقيعها ثم إعادة توزيعها على الأقسام ذات العلاقة بعد أخذ صور لحفظ السجلات."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Present this correspondence to the esteemed Professor Dean of the college for review and signature, then redistribute it to the relevant departments after taking photocopies for record-keeping."
            : "تقديم هذه المراسلات إلى الأستاذ عميد الكلية الموقر لمراجعتها وتوقيعها ثم إعادة توزيعها على الأقسام ذات العلاقة بعد أخذ صور لحفظ السجلات."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Write outgoing correspondence signed by the esteemed Professor Dean of the college and record it in the outgoing correspondence log, then distribute it to the concerned parties."
            : "كتابة المراسلات الصادرة موقعة من الأستاذ عميد الكلية الموقر وتسجيلها في سجل المراسلات الصادرة، ثم توزيعها على الجهات المعنية."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Receive incoming phone calls and faxes, respond to inquiries if answers are available, and log them in a special register for presentation to the esteemed Professor Dean of the college."
            : "استقبال المكالمات الهاتفية والفاكسات الواردة والرد على الاستفسارات في حال توفر الإجابات وتسجيلها في سجل خاص لعرضها على الأستاذ عميد الكلية الموقر."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Monitor the implementation of the instructions from the esteemed Professor Dean of the college regarding the college's departments and prepare periodic reports on what has been accomplished and the status of unfinished tasks."
            : "متابعة تنفيذ تعليمات الأستاذ الموقر عميد الكلية فيما يتعلق بأقسام الكلية وإعداد التقارير الدورية عما تم إنجازه وحالة المهام المتبقية."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Regularly follow up with the university's public relations office to inquire about the social cases of faculty members and staff related to their colleagues at the university."
            : "المتابعة الدورية مع مكتب العلاقات العامة بالجامعة للاستعلام عن الحالات الاجتماعية لأعضاء هيئة التدريس والموظفين المرتبطين بزملائهم في الجامعة."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Prepare meeting agendas for meetings chaired by the esteemed Professor Dean of the college."
            : "إعداد جداول أعمال الاجتماعات التي يرأسها الأستاذ عميد الكلية الموقر."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Responsible for the college council, attending these meetings,recording the discussions, and drafting minutes of the meetings."
            : "مسؤول عن مجلس الكلية وحضور هذه الاجتماعات وتسجيل المناقشات وصياغة محاضر الاجتماعات."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Follow up on the approval of these meeting minutes by the esteemed Professor President of the university and draft the executive orders and decisions related to these resolutions, distributing them to various departments."
            : "متابعة اعتماد محاضر هذه الاجتماعات من قبل الأستاذ الموقر رئيس الجامعة وصياغة الأوامر التنفيذية والقرارات المتعلقة بهذه القرارات وتوزيعها على الإدارات المختلفة."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Receive and send emails on behalf of the esteemed Professor Dean of the college to follow up on his correspondence, including messages from the Supreme Council of Universities and the Medical Studies Sector Committee."
            : "استقبال وإرسال رسائل البريد الإلكتروني نيابة عن الأستاذ عميد الكلية الموقر لمتابعة مراسلاته ومنها رسائل من المجلس الأعلى للجامعات ولجنة قطاع الدراسات الطبية."}
        </li>
        <li className="mb-2">
          {language === "english"
            ? "Participate in organizing and preparing for all seminars, meetings,and research projects organized by the college."
            : "المشاركة في تنظيم وإعداد جميع الندوات والاجتماعات والمشاريع البحثية التي تنظمها الكلية."}
        </li>
      </ol>
    </div>
  );
};

export default DeansOffice;
