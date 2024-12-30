"use client";
import "./HistStyle.css";
import { useSelector } from "react-redux";

function HistoryPage() {
  const language = useSelector((state) => state.language);

  const text =
    language === "english"
      ? [
          "It is one of the first four faculties of computers and information that was established in Egyptian universities with the aim of preparing graduates specialized in the fields of computers and information technology that are qualified to work and deal with the labor market and the competitive capabilities it requires to meet the growing need for specialists in these fields.",
          "The Faculty of Computers and Information at Mansoura University was established by presidential decree No. 419 of 1995. The study began at the college in the academic year 1996/1997 and included the Departments of Information Systems and Computer Science. In the year 2006, the college began to register for postgraduate studies.",
          "In the year 2007, the college bylaw was developed in line with the requirements of science and technological development, and a new department was established, the Department of Information Technology.",
          "Since the development has been successive in the field of computer and information technology, the college has established a number of special programs at the undergraduate and postgraduate levels.",
          "The college also grants a bachelor's degree, diploma degree, master's degree, and doctorate degree in the disciplines, computer science, information systems, and information technology.",
          "According to ministerial decree No. 1786 dated 6/5/2014, it was approved to grant the college the degree of an applied graduate diploma and a master’s degree according to the credit hour system in three programs: information security, geographic information systems and business information technology.",
          "According to the ministerial decree No. 1787 dated 5/6/2014, it was approved to grant the college a bachelor’s degree in software engineering by the credit hour system. According to the ministerial decree No. 4607 dated 10/22/2014, the college was approved to grant the college a bachelor’s degree in medical informatics using the credit hour system. According to the ministerial decree No. 1553 dated 20/5/2020, it was approved to grant the college a bachelor’s degree in artificial intelligence with the credit-hour system.",
        ]
      : [
          "إنها واحدة من أول أربع كليات للحاسبات والمعلومات التي تم إنشاؤها في الجامعات المصرية بهدف إعداد خريجين متخصصين في مجالات الحاسوب وتكنولوجيا المعلومات، ومؤهلين للعمل والتعامل مع سوق العمل والقدرات التنافسية التي يتطلبها لتلبية الحاجة المتزايدة إلى المتخصصين في هذه المجالات.",
          "تم إنشاء كلية الحاسبات والمعلومات بجامعة المنصورة بموجب القرار الجمهوري رقم 419 لسنة 1995. وبدأت الدراسة بالكلية في العام الدراسي 1996/1997 وشملت قسمي نظم المعلومات وعلوم الحاسب. وفي عام 2006، بدأت الكلية بتسجيل الدراسات العليا.",
          "في عام 2007، تم تطوير لائحة الكلية لتتماشى مع متطلبات التقدم العلمي والتكنولوجي، وتم إنشاء قسم جديد وهو قسم تكنولوجيا المعلومات.",
          "نظرًا للتطور المتواصل في مجال الحاسوب وتكنولوجيا المعلومات، قامت الكلية بإنشاء عدد من البرامج الخاصة على مستوى البكالوريوس والدراسات العليا.",
          "تمنح الكلية أيضًا درجة البكالوريوس، ودرجة الدبلوم، ودرجة الماجستير، ودرجة الدكتوراه في تخصصات علوم الحاسب، ونظم المعلومات، وتكنولوجيا المعلومات.",
          "وفقًا للقرار الوزاري رقم 1786 بتاريخ 6/5/2014، تمت الموافقة على منح الكلية درجة دبلوم الدراسات العليا التطبيقي ودرجة الماجستير وفقًا لنظام الساعات المعتمدة في ثلاثة برامج: أمن المعلومات، ونظم المعلومات الجغرافية، وتكنولوجيا معلومات الأعمال.",
          "وفقًا للقرار الوزاري رقم 1787 بتاريخ 5/6/2014، تمت الموافقة على منح الكلية درجة بكالوريوس في هندسة البرمجيات بنظام الساعات المعتمدة. وفقًا للقرار الوزاري رقم 4607 بتاريخ 22/10/2014، تمت الموافقة على منح الكلية درجة بكالوريوس في المعلوماتية الطبية باستخدام نظام الساعات المعتمدة. وفقًا للقرار الوزاري رقم 1553 بتاريخ 20/5/2020، تمت الموافقة على منح الكلية درجة بكالوريوس في الذكاء الاصطناعي بنظام الساعات المعتمدة.",
        ];

  return (
    <>
      <div className="Main-Div ">
        <div className="Title mb-6 px-10 pt-10 flex">
          <img
            src="/images/pin-icon.png"
            alt="Pin Icon"
            className={`iconimage ${language === "english" ? "mr-4" : "ml-4"}`}
          />
          {language === "english"
            ? "College inception and history"
            : "تأسيس الكلية وتاريخها"}
        </div>
        <div className="Image">
          <img src="./images/HistoryPage_Image.jpg" alt="History" />
        </div>
        <ul style={{ listStyleType: "square" }} className="px-10 mt-10 mb-10">
          {text.map((e, index) => (
            <li key={index} className="mb-6">
              <p>{e}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HistoryPage;
