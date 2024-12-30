"use client";
import SectionStarter from "@/app/components/SectionStarter";
import React, { useEffect } from "react";
import LatestNews from "./LatestNews";
import { useState } from "react";
import LatestEvents from "./LatestEvents";
import { useSelector } from "react-redux";
import { baseUrl } from "@/app/constants/constants";
import Loader from "@/app/components/Loader";
const LatestNewsEvents = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("news");

  const language = useSelector((state) => state.language);
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const fetchNews = async () => {
    const res = await fetch(
      `${baseUrl}/Get_Latest4_News/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    console.log(data);
    setNews(data);
  };
  const fetcEvents = async () => {
    const res = await fetch(
      `${baseUrl}/Get_Latest4_Events/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    setEvents(data);
  };
  useEffect(() => {
    fetchNews();
    fetcEvents();
  }, [language]);

  return (
    <div className="pb-16">
      <div className="md-sm:w-[90%]  xl:w-[80%] mx-auto">
        <SectionStarter
          title={
            language === "english"
              ? "latest news and events"
              : "اخر الاحداث والاخبار"
          }
        />
        <div className="max-w-96 flex justify-between items-center h-16 rounded-lg overflow-hidden  mx-auto shadow-lg mb-10 shadow-gray-200">
          <button
            className={`${selectedTopic === "news" && "bg-primary text-white"} text-lg transition-colors duration-300 h-full px-10`}
            onClick={() => {
              setSelectedTopic("news");
            }}
          >
            {language === "english" ? "news" : "الاخبار"}
          </button>
          <button
            className={`${selectedTopic === "events" && "bg-primary text-white"} text-lg  h-full px-10 transition-colors duration-300`}
            onClick={() => {
              setSelectedTopic("events");
            }}
          >
            {language === "english" ? "events" : "الاحداث"}
          </button>
        </div>
        {news.length > 0 && events.length > 0 ? (
          selectedTopic === "news" ? (
            <LatestNews news={news} />
          ) : (
            <LatestEvents events={events} />
          )
        ) : (
          <Loader height={"h-40"} />
        )}
      </div>
    </div>
  );
};

export default LatestNewsEvents;
