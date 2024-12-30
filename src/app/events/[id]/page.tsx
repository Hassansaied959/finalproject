"use client";
import Loader from "@/app/components/Loader";
import { baseUrl } from "@/app/constants/constants";
import React, { useEffect, useState } from "react";
import { FaShare } from "react-icons/fa";
import { useSelector } from "react-redux";
const NewsDetails = ({ params }) => {
  const { id } = React.use(params);
  const language = useSelector((state) => state.language);
  const [loader, setLoader] = useState(true);

  const [eventDetails, setEventDetails] = useState([]);
  const fetchEvent = async () => {
    const res = await fetch(
      `${baseUrl}/Get_Event_By_Id/${id}/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    console.log(data);
    setEventDetails(data);
    setLoader(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetchEvent();
  }, [language]);
  return (
    <div className="mb-10">
      <div className="w-[90%] xl:w-[85%] mx-auto">
        <h1 className="bg-primary text-white px-4 py-2 text-xl mt-4">
          {eventDetails.name}
        </h1>
        {loader ? (
          <Loader height={"h-96"} />
        ) : (
          <div className="flex mt-10 flex-col xl:flex-row">
            <img
              src={eventDetails.img}
              className={`w-full xl:max-w-[600px] ${language === "english" ? "xl:mr-10" : "xl:ml-10"} max-h-96 rounded-md mb-2 xl:mb-0`}
            />
            <div>
              <p className="text-lg">{eventDetails.description}</p>
              <div className="mt-5">
                <p className="flex items-center text-lg font-bold">
                  <FaShare className="mr-2" />
                  {language === "english" ? "share on:" : "مشاركة علي"}
                </p>
                <ul className="flex mt-2">
                  <li>
                    <img src="/icons/facebook.png" className="w-12 h-12 ml-2" />
                  </li>
                  <li>
                    <img src="/icons/linkedin.png" className="w-12 h-12 ml-2" />
                  </li>
                  <li>
                    <img src="/icons/twitter.png" className="w-12 h-12 ml-2" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetails;
