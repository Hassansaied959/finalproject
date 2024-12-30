"use client";
import MainBox from "@/app/components/MainBox";
import "./page.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { baseUrl } from "@/app/constants/constants";
import Loader from "@/app/components/Loader";

const Page = ({ params }) => {
  const [loader, setLoader] = useState(true);

  const language = useSelector((state) => state.language);

  const { id } = React.use(params);
  const [courses, setCourses] = useState([]);
  const fetchCourses = async () => {
    const res = await fetch(
      `${baseUrl}/api/Unit/Get_Course_By_UnitId${id}/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    console.log(data);
    setCourses(data);
    setLoader(false);
  };

  useEffect(() => {
    fetchCourses();
  }, [language]);
  return (
    <div>
      {loader ? (
        <Loader height={"h-96"} />
      ) : (
        <MainBox
          title={
            language === "english"
              ? "The administrative structure of the center"
              : "الدورات التدريبية في المركز"
          }
        >
          <div className="training-courses">
            {courses.map((course, index) => (
              <p key={index}>
                <a href={course.pdfDescription} target="_blank">
                  {course.title}
                </a>
              </p>
            ))}

            <Link href={`/unit-administration/${id}`}>
              <h2>
                {language === "english"
                  ? "The administrative structure of the center"
                  : "الهيكل الإداري للمركز"}
              </h2>
            </Link>
          </div>
        </MainBox>
      )}
    </div>
  );
};

export default Page;
