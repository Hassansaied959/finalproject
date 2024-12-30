import Link from "next/link";
import React from "react";
import { MdDateRange } from "react-icons/md";
import { useSelector } from "react-redux";

const EventsCard = ({ singleEvent }) => {
  const language = useSelector((state) => state.language);

  return (
    <div className="flex flex-col md:flex-row border border-x-0 border-t-0 py-4">
      <img
        src={singleEvent.img}
        className="w-full h-[180px] md:max-w-64 mb-2 md:mb-0"
      />
      <div className={`${language === "english" ? "md:ml-5" : "md:mr-5"}`}>
        <h2 className="text-primary text-2xl font-bold mb-2">
          {singleEvent.name}
        </h2>
        <p className="mb-2">
          {singleEvent.description.length > 200
            ? `${singleEvent.description.slice(0, 200)}...`
            : singleEvent.description}
        </p>
        <p className="flex items-center mb-4">
          <MdDateRange className="ml-1 text-primary" />
          {singleEvent.event_Start_Date}
        </p>
        <Link
          href={`/events/${singleEvent.eventId}`}
          className="bg-primary text-white px-4 py-1 mt-2 rounded-md"
        >
          {language === "english" ? "read more" : "اقرأ المذيد"}
        </Link>
      </div>
    </div>
  );
};

export default EventsCard;
