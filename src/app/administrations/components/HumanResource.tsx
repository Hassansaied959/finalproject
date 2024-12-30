"use client";
import React from "react";
import AdministrationStarter from "./AdministrationStarter";
import { useSelector } from "react-redux";

const HumanResource = () => {
  const language = useSelector((state) => state.language);

  const missions = [
    {
      title:
        language === "english" ? "First: Entitlements:" : "أولا: الاستحقاقات",
      description:
        language === "english"
          ? "The Human Resources Department of the college is responsible for preparing salary and bonus forms for faculty members, their assistants, permanent employees, contracted staff, and seconded personnel from Egyptian universities on a monthly basis using the Farouk Human Resources system. The HR Department registers the salaries of faculty members, their assistants, permanent employees, contracted staff, and seconded personnel in the 129 regular records, as well as recording bonuses and additional wages in the bonus register."
          : "تتولى إدارة الموارد البشرية بالكلية إعداد نماذج الرواتب والمكافآت لأعضاء هيئة التدريس ومعاونيهم والموظفين الدائمين والموظفين المتعاقدين والموظفين المعارين من الجامعات المصرية بشكل شهري باستخدام نظام فاروق للموارد البشرية. يقوم قسم الموارد البشرية بتسجيل رواتب أعضاء هيئة التدريس ومعاونيهم والموظفين الدائمين والموظفين المتعاقدين والموظفين المعارين في السجلات العادية البالغ عددها 129 سجلا، وكذلك تسجيل المكافآت والأجور الإضافية في سجل المكافآت.",
    },
    {
      title:
        language === "english" ? "Second: Appointments:" : "ثانيا: المواعيد",
      description:
        language === "english"
          ? "The HR Department of the college handles the delivery of appointment documents to new teaching assistants and ensures the completion of their hiring procedures. The HR Department also follows up on the handover of duties for staff seconded to the college and informs the university HR Department about their work commencement and the renewal of their secondments."
          : "يتولى قسم الموارد البشرية في الكلية تسليم مستندات التعيين للمعيدين الجدد ويضمن استكمال إجراءات التوظيف الخاصة بهم. كما تقوم إدارة الموارد البشرية بمتابعة تسليم مهام الموظفين المعارين للكلية وإبلاغ إدارة الموارد البشرية بالجامعة عن بدء عملهم وتجديد إعارتهم.",
    },
    ,
    {
      title:
        language === "english"
          ? "Third: Pensions:"
          : "ثالثا: المعاشات التقاعدية",
      description:
        language === "english"
          ? "The HR Department of the college prepares monthly pension payment forms and sends them to the National Authority for Government Insurance. It also maintains records for pension payments and processes pensions for seconded staff and those on special leave. Additionally, the HR Department prepares variable wage cards for faculty members, their assistants, permanent employees, contracted staff, and seconded personnel from Egyptian universities."
          : "تقوم إدارة الموارد البشرية بالكلية بإعداد نماذج دفع المعاش الشهري وإرسالها إلى الهيئة القومية للتأمين الحكومي. وتحتفظ أيضا بسجلات لمدفوعات المعاشات التقاعدية وتعالج المعاشات التقاعدية للموظفين المعارين والذين يحصلون على إجازة خاصة. بالإضافة إلى ذلك ، يقوم قسم الموارد البشرية بإعداد بطاقات أجور متغيرة لأعضاء هيئة التدريس ومساعديهم والموظفين الدائمين والموظفين المتعاقدين والموظفين المعارين من الجامعات المصرية.",
    },
    ,
    {
      title: language === "english" ? "Fourth: Leaves:" : "رابعا: الإجازات",
      description:
        language === "english"
          ? "The HR Department of the college maintains leave records for faculty members and their assistants (special cadre) and for staff (general cadre), monitoring their annual, emergency, and sick leaves daily at the college and the university city. These tasks are carried out periodically and monthly, with oversight from the college secretary and the Dean of the college."
          : "يحتفظ قسم الموارد البشرية بالكلية بسجلات إجازات لأعضاء هيئة التدريس ومعاونيهم (كادر خاص) وللموظفين (كادر عام) ، ويراقب إجازاتهم السنوية والطارئة والمرضية يوميا في الكلية والمدينة الجامعية. يتم تنفيذ هذه المهام بشكل دوري وشهري ، بإشراف سكرتير الكلية وعميد الكلية.",
    },
  ];
  return (
    <div>
      <h1 className="font-bold text-lg v-sm:text-2xl mb-4">
        {" "}
        {language === "english"
          ? "Human Resource Management"
          : "ادارة الموارد البشرية "}
      </h1>
      <AdministrationStarter
        title={
          language === "english"
            ? "Responsibilities of Human Resource Management"
            : "مسؤوليات ادارة الموارد البشرية "
        }
      />
      <ul>
        {missions.map((mission, index) => (
          <li className="mb-8" key={index}>
            <h1 className="font-bold mb-3">{mission.title}</h1>
            <p>{mission.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HumanResource;
