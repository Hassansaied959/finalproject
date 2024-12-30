"use client";
import { baseUrl } from "@/app/constants/constants";
import Mainsection from "@/app/services/components/Mainsection";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = ({ params }) => {
  const language = useSelector((state) => state.language);
  const { id } = React.use(params);
  const [loader, setLoader] = useState(true);
  const [detail, setDetail] = useState({});
  const fetchDetail = async () => {
    const res = await fetch(
      `${baseUrl}/Get_Department_By_Id/${id}/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    console.log(data);
    setDetail(data);
    setLoader(false);
  };
  useEffect(() => {
    fetchDetail();
  }, [language]);
  return (
    <div className="pt-6 w-full v-sm:w-[90%] mx-auto pb-16">
      <Mainsection
        content={{
          name: detail.name,
          details: (
            <div>
              <div className="professor-info-section">
                <img
                  src={detail.empImage}
                  alt="Professor"
                  className="professor-image"
                />{" "}
                {/* Image of the professor */}
                <a
                  href={detail.empResume}
                  className="biography-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === "english" ? "Biography" : "السيرة الذاتية"}
                </a>{" "}
                {/* Biography link */}
                <h3 className="professor-name">{`${language === "english" ? "Professor" : "الدكتور"} ${detail.empName}`}</h3>{" "}
                {/* Professor's name */}
                <p className="professor-subtitle">
                  {`${language === "english" ? "Head of Department of" : "رئيس قسم "} ${detail.name}`}
                </p>{" "}
                {/* Professor's subtitle */}
              </div>

              <div className="faculty-section">
                <Link href={`/department-members/${id}`}>
                  {language === "english"
                    ? "Faculty Members in the Department"
                    : "أعضاء هيئة التدريس في القسم"}
                </Link>
              </div>
              <hr className="section-divider" />
              <div className="description-section py-6">
                <p className="description-text">{detail.description}</p>
              </div>
              <hr className="section-divider" />
            </div>
          ),
        }}
      />
    </div>
  );
};

export default Page;
