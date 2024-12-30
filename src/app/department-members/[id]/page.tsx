"use client";
import MainBox from "@/app/components/MainBox";
import React, { useEffect, useState } from "react";
import "./page.css";
import { link } from "fs";
import { useSelector } from "react-redux";
import { baseUrl } from "@/app/constants/constants";

const Page = ({ params }) => {
  const language = useSelector((state) => state.language);
  const { id } = React.use(params);
  const [loader, setLoader] = useState(true);
  const [members, setMembers] = useState([]);
  const fetchMembers = async () => {
    const res = await fetch(
      `${baseUrl}/Get_All_Employees_In_Department/${id}/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    console.log(data);
    setMembers(data);
    setLoader(false);
  };
  useEffect(() => {
    fetchMembers();
  }, [language]);
  return (
    <MainBox
      title={language === "english" ? "Department Member" : "اعضاء القسم"}
    >
      <div className="doctor-list-container">
        <table className="doctor-table">
          <thead>
            <tr>
              <th>#</th>
              <th>{language === "english" ? "Name" : "الاسم"}</th>
              <th>{language === "english" ? "job title" : "المسمي الوظيفي"}</th>

              <th>{language === "english" ? "Department" : "القسم"}</th>
            </tr>
          </thead>
          <tbody>
            {members.map((doctor, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>
                  <a href={doctor.resume} target="_blank">
                    {doctor.name}
                  </a>
                </td>
                <td>
                  <a href={doctor.resume} target="_blank">
                    {doctor.job_Title}
                  </a>
                </td>
                <td>{doctor.departmentName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainBox>
  );
};

export default Page;
