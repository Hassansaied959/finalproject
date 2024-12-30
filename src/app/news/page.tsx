"use client";
import React, { useEffect, useState } from "react";
import NewsCard from "./components/NewsCard";
import { useSelector } from "react-redux";
import { baseUrl } from "../constants/constants";
import Loader from "../components/Loader";

const News = () => {
  const [loader, setLoader] = useState(true);
  const language = useSelector((state) => state.language);
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    const res = await fetch(
      `${baseUrl}/Get_All_News/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    console.log(data);

    setNews(data);
    setLoader(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetchNews();
    console.log("hhllo");
  }, [language]);
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <h1 className="bg-primary font-bold text-white px-4 py-2 text-xl mt-4">
          {language === "english" ? "news archive" : "ارشيف الاخبار"}
        </h1>
        {loader ? (
          <Loader height={"h-96"} />
        ) : (
          news.map((singleNews) => (
            <NewsCard singleNews={singleNews} key={singleNews.newsId} />
          ))
        )}
      </div>
    </div>
  );
};

export default News;
