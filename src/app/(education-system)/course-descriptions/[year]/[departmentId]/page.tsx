"use client";
import MainBox from "@/app/components/MainBox";
import React, { useEffect, useState } from "react";
import "./page.css";
import { useSelector } from "react-redux";
import { baseUrl } from "@/app/constants/constants";
import Link from "next/link";

const Page = ({ params }) => {
  const language = useSelector((state) => state.language);
  const [courses, setCourses] = useState([]);
  const { year, departmentId } = React.use(params);

  const fetchCourses = async () => {
    const res = await fetch(
      `${baseUrl}/Get_All_Courses/${year}/${language === "english" ? "eng" : "ar"}?departmentId=${departmentId}`
    );
    const data = await res.json();
    console.log(data);
    setCourses(data);
  };

  useEffect(() => {
    fetchCourses();
  }, [language]);
  return (
    <MainBox
      title={`${language === "english" ? "Course Descriptions" : "توصيف المقررات"} - ${year === "Junior" ? (language === "english" ? "third year" : "الفرقة الثالثة") : year === "Senior" ? (language === "english" ? "fourth year" : "الفرقة الرابعة") : ""}`}
    >
      <div className="course-description">
        {courses.map((course, index) => (
          <p key={index} className="text-xl">
            <a href={course.pdfDescription} target="_blank">
              {course.title}
            </a>
          </p>
        ))}
      </div>
    </MainBox>
  );
};

export default Page;
