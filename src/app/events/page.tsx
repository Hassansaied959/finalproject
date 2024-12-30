"use client";
import React, { useEffect, useState } from "react";
import EventsCard from "./components/EventsCard";
import { useSelector } from "react-redux";
import { baseUrl } from "../constants/constants";
import Loader from "../components/Loader";

const Events = () => {
  const language = useSelector((state) => state.language);
  const [loader, setLoader] = useState(true);

  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    const res = await fetch(
      `${baseUrl}/Get_All_Events/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    console.log(data);
    setEvents(data);
    setLoader(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [language]);
  return (
    <div>
      <div className="container">
        <h1 className="bg-primary font-bold text-white px-4 py-2 text-xl mt-4">
          {language === "english" ? "events archive" : "ارشيف الاحداث"}
        </h1>

        {loader ? (
          <Loader height={"h-96"} />
        ) : (
          events.map((singleEvent) => (
            <EventsCard singleEvent={singleEvent} key={singleEvent.eventId} />
          ))
        )}
      </div>
    </div>
  );
};

export default Events;
