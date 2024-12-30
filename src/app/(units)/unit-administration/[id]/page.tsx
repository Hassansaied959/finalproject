"use client";
import MainBox from "@/app/components/MainBox";
import "./page.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { baseUrl } from "@/app/constants/constants";

const Page = ({ params }) => {
  const { id } = React.use(params);
  const [loader, setLoader] = useState(true);

  const language = useSelector((state) => state.language);

  const [administrations, setAdministrations] = useState([]);
  const fetchAdministrations = async () => {
    const res = await fetch(
      `${baseUrl}/api/Unit/Get_Employee_By_UnitId${id}/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    setAdministrations(data);
  };

  useEffect(() => {
    fetchAdministrations();
  }, [language]);

  return (
    <MainBox
      title={
        language === "english"
          ? "The administrative structure of the center"
          : "الهيكل الإداري للمركز"
      }
    >
      <p>
        {language === "english"
          ? `The administrative structure of the ${administrations.length > 0 && administrations[0].unitName} center`
          : ` الهيكل الاداري لمركز ${administrations.length > 0 && administrations[0].unitName}`}
      </p>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>{language === "english" ? "Name" : "الاسم"}</th>
              <th>{language === "english" ? "job title" : "المسمي الوظيفي"}</th>
            </tr>
          </thead>
          <tbody>
            {administrations.map((administration, index) => (
              <tr key={index}>
                <td>
                  <a href={administration.resume} target="_blank">
                    {administration.name}
                  </a>
                </td>
                <td>{administration.job_Title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainBox>
  );
};

export default Page;
