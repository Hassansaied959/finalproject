// "use client";
// import React, { useState } from "react";

// import HumanResource from "./components/HumanResource";
// import StudentAffair from "./components/StudentAffair";
// import CollegeSecretary from "./components/CollegeSecretary";
// import DeansOffice from "./components/DeansOffice";
// import { useSelector } from "react-redux";

// const Administrations = () => {
//   const language = useSelector((state) => state.language);

//   const [selectedContent, setSelectedContent] = useState("college secretary");
//   return (
//     <div>
//       <div className="container">
//         <ul className="bg-secondary text-white flex w-full justify-between text-lg px-10 py-2 rounded-lg mt-10 mx-auto">
//           <li>
//             <button
//               className={`${selectedContent == "college secretary" && "font-bold"}`}
//               onClick={() => {
//                 setSelectedContent("college secretary");
//               }}
//             >
//               College Secretary
//             </button>
//           </li>
//           <li>
//             <button
//               className={`${selectedContent == "deans office" && "font-bold"}`}
//               onClick={() => {
//                 setSelectedContent("deans office");
//               }}
//             >
//               Dean's office
//             </button>
//           </li>
//           <li>
//             <button
//               className={`${selectedContent == "human resources" && "font-bold"}`}
//               onClick={() => {
//                 setSelectedContent("human resources");
//               }}
//             >
//               Human resources management
//             </button>
//           </li>
//           <li>
//             <button
//               className={`${selectedContent == "student affair" && "font-bold"}`}
//               onClick={() => {
//                 setSelectedContent("student affair");
//               }}
//             >
//               Student Affairs
//             </button>
//           </li>
//           <li>
//             <button
//               className={`${selectedContent == "student care" && "font-bold"}`}
//               onClick={() => {
//                 setSelectedContent("student care");
//               }}
//             >
//               Student Care
//             </button>
//           </li>
//           <li>
//             <button
//               className={`${selectedContent == "library" && "font-bold"}`}
//               onClick={() => {
//                 setSelectedContent("library");
//               }}
//             >
//               library{" "}
//             </button>
//           </li>
//         </ul>
//         <div className="my-10">
//           {selectedContent === "college secretary" ? (
//             <CollegeSecretary />
//           ) : selectedContent === "deans office" ? (
//             <DeansOffice />
//           ) : selectedContent === "human resources" ? (
//             <HumanResource />
//           ) : selectedContent === "student affair" ? (
//             <StudentAffair />
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Administrations;

"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import HumanResource from "./components/HumanResource";
import StudentAffair from "./components/StudentAffair";
import CollegeSecretary from "./components/CollegeSecretary";
import DeansOffice from "./components/DeansOffice";

const Administrations = () => {
  const language = useSelector((state) => state.language);
  const [selectedContent, setSelectedContent] = useState("college secretary");

  const getButtonText = (section) => {
    if (language === "english") {
      switch (section) {
        case "college secretary":
          return "College Secretary";
        case "deans office":
          return "Dean's office";
        case "human resources":
          return "Human resources management";
        case "student affair":
          return "Student Affairs";
        case "student care":
          return "Student Care";
        case "library":
          return "Library";
        default:
          return "";
      }
    } else if (language === "arabic") {
      switch (section) {
        case "college secretary":
          return "أمين الكلية";
        case "deans office":
          return "مكتب العميد";
        case "human resources":
          return "إدارة الموارد البشرية";
        case "student affair":
          return "شؤون الطلاب";
        case "student care":
          return "رعاية الطلاب";
        case "library":
          return "المكتبة";
        default:
          return "";
      }
    }
  };

  return (
    <div>
      <div className="w-[95%] md:w-[90%]  xl:w-[80%] mx-auto">
        <ul
          className={`bg-secondary text-white flex w-full justify-between text-lg px-10 py-2 rounded-lg mt-10 mx-auto flex-wrap ${
            language === "arabic" ? "rtl" : ""
          }`}
        >
          <li>
            <button
              className={`${selectedContent == "college secretary" && "font-bold"}`}
              onClick={() => setSelectedContent("college secretary")}
            >
              {getButtonText("college secretary")}
            </button>
          </li>
          <li>
            <button
              className={`${selectedContent == "deans office" && "font-bold"}`}
              onClick={() => setSelectedContent("deans office")}
            >
              {getButtonText("deans office")}
            </button>
          </li>
          <li>
            <button
              className={`${selectedContent == "human resources" && "font-bold"}`}
              onClick={() => setSelectedContent("human resources")}
            >
              {getButtonText("human resources")}
            </button>
          </li>
          <li>
            <button
              className={`${selectedContent == "student affair" && "font-bold"}`}
              onClick={() => setSelectedContent("student affair")}
            >
              {getButtonText("student affair")}
            </button>
          </li>
        </ul>

        <div className="my-10">
          {selectedContent === "college secretary" ? (
            <CollegeSecretary />
          ) : selectedContent === "deans office" ? (
            <DeansOffice />
          ) : selectedContent === "human resources" ? (
            <HumanResource />
          ) : selectedContent === "student affair" ? (
            <StudentAffair />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Administrations;
