"use client";
import Link from "next/link";
import React from "react";
import { MdDateRange } from "react-icons/md";
import { useSelector } from "react-redux";
const LatestNews = ({ news }) => {
  const language = useSelector((state) => state.language);

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-4">
        {news.map((singleNews) => (
          <div
            className="flex border border-1 justify-between p-3 rounded-md"
            key={singleNews.newsId}
          >
            <div>
              <h1 className="text-sm md-sm:text-lg mb-4 font-bold max-w-96 mr-2">
                {singleNews.name.length > 75
                  ? `${singleNews.name.slice(0, 75)}...`
                  : singleNews.name}
              </h1>
              <p className="flex items-center">
                <MdDateRange className="ml-1" />
                {singleNews.news_Date}
              </p>
            </div>
            <img src={singleNews.img} className="w-40 h-28 rounded-md" />
          </div>
        ))}
      </div>
      <Link
        href="/news"
        className="text-white bg-primary w-44 py-2 rounded-md mt-8 mx-auto text-center block"
      >
        {language === "english" ? "all news" : "كل الاخبار"}
      </Link>
    </>
  );
};

export default LatestNews;
