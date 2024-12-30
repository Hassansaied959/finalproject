"use client";
import Link from "next/link";
import React from "react";
import { MdDateRange } from "react-icons/md";
import { useSelector } from "react-redux";

const LatestEvents = ({ events }) => {
  const language = useSelector((state) => state.language);

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-4">
        {events.map((singleEvent) => (
          <div
            className="flex border border-1 justify-between p-3 rounded-md"
            key={singleEvent.eventId}
          >
            <div>
              <h1 className="text-sm md-sm:text-lg mb-4 font-bold max-w-96 mr-2">
                {singleEvent.name.length > 75
                  ? `${singleEvent.name.slice(0, 75)}...`
                  : singleEvent.name}
              </h1>
              <p className="flex items-center">
                <MdDateRange className="ml-1" />
                {singleEvent.event_Start_Date}
              </p>
            </div>
            <img src={singleEvent.img} className="w-40 h-28 rounded-md" />
          </div>
        ))}
      </div>
      <Link
        href="/events"
        className="text-white bg-primary w-44 py-2 rounded-md mt-8 mx-auto text-center block"
      >
        {language === "english" ? "all events" : "كل الاحداث"}
      </Link>
    </>
  );
};

export default LatestEvents;
