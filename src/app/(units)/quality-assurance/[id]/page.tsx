"use client";
import MainBox from "@/app/components/MainBox";
import { baseUrl } from "@/app/constants/constants";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = ({ params }) => {
  const { id } = React.use(params);
  const [quality, setQuality] = useState({});
  const language = useSelector((state) => state.language);
  const fetchQuality = async () => {
    const res = await fetch(
      `${baseUrl}/Get_Quality_By_Id/${id}/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    console.log(data);
    setQuality(data);
  };
  useEffect(() => {
    fetchQuality();
  }, [language]);
  return (
    <MainBox
      title={
        language === "english"
          ? "Quality Assurance and Academic Accreditation Unit"
          : "وحدة ضمان الجودة والاعتماد الأكاديمي"
      }
    >
      <div>
        <h2 className="text-red-500 text-xl mb-2 pl-6 font-bold">
          {quality.name}
        </h2>
        <p className="pl-10 max-w-full">{quality.description}</p>
      </div>
    </MainBox>
  );
};

export default Page;
