"use client";
import MainBox from "@/app/components/MainBox";
import React, { useEffect, useState } from "react";
import "./page.css";
import Link from "next/link";
import { baseUrl } from "@/app/constants/constants";
import { useSelector } from "react-redux";

const Page = () => {
  const language = useSelector((state) => state.language);
  const [departments, setDepartments] = useState([]);
  const fetchDepartments = async () => {
    const res = await fetch(
      `${baseUrl}/Get_All_Departments/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    console.log(data);
    setDepartments(data);
  };

  useEffect(() => {
    fetchDepartments();
  }, [language]);
  return (
    <MainBox
      title={
        language === "english"
          ? "Course Descriptions"
          : "توصيف المقررات الدراسية"
      }
    >
      <div className="course-content">
        <p className="year first-year">
          <Link href="/course-descriptions/Freshman">
            {language === "english" ? "First Year" : "الفرقة الاولي"}
          </Link>
        </p>
        <p className="year second-year">
          <Link href="/course-descriptions/Sophomore">
            {language === "english" ? "Second Year" : "الفرقة الثانية"}
          </Link>
        </p>
        <div className="year third-year">
          {language === "english" ? "Third Year" : "الفرقة الثالثة"}
          <ul className="departments">
            {departments.map((department, index) => (
              <li key={index}>
                <Link
                  href={`/course-descriptions/Junior/${department.departmentId}`}
                  className="info-systems"
                >
                  {department.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="year fourth-year">
          {language === "english" ? "Fourth Year" : "الفرقة الرابعة"}
          <ul className="departments">
            {departments.map((department, index) => (
              <li key={index}>
                <Link
                  href={`/course-descriptions/Senior/${department.departmentId}`}
                  className="info-systems"
                >
                  {department.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainBox>
  );
};

export default Page;
