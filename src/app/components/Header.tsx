"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../rtk/languageSlice";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { baseUrl } from "../constants/constants";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const [selectedLink, setSelectedLink] = useState(null);
  const language = useSelector((state) => state.language);
  const [units, setUnits] = useState([]);
  const [quality, setQuality] = useState([]);

  const [departments, setDepartments] = useState([]);
  const fetchUnits = async () => {
    const res = await fetch(
      `${baseUrl}/api/Unit/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    console.log(data);
    setUnits(data);
  };
  const fetchQuality = async () => {
    const res = await fetch(
      `${baseUrl}/Get_All_Qualitys/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    console.log(data);
    setQuality(data);
  };
  const fetchDepartments = async () => {
    const res = await fetch(
      `${baseUrl}/Get_All_Departments/${language === "english" ? "eng" : "ar"}`
    );
    const data = await res.json();
    console.log(data);
    setDepartments(data);
  };

  useEffect(() => {
    fetchUnits();
    fetchDepartments();
    fetchQuality();
  }, [language]);
  return (
    <>
      <div className="bg-primary ">
        <div className="w-[90%] xl:w-[80%]  mx-auto flex justify-between items-center py-2 flex-col lg:flex-row gap-2 lg:gap-0">
          <ul className="text-white flex text-sm v-sm:text-lg">
            <li className="ml-6">
              {language === "english" ? "Hurghada University" : "جامعة الغردقة"}
            </li>
            <li className="ml-6">
              {language === "english" ? "library" : "مكتبة"}
            </li>
            <li className="ml-6">
              {language === "english" ? "Contact Us" : "تواصل معنا"}
            </li>
          </ul>
          <div className="flex items-center justify-center">
            <form className="relative w-80">
              <input
                type="text"
                placeholder={
                  language === "english" ? "search here" : "ابحث هنا"
                }
                className="w-full pl-2 pr-6 py-[2px] rounded-full"
              />
              <AiOutlineSearch className="absolute top-1/2 -translate-y-1/2 text-lg right-1" />
            </form>
            <button
              className="relative"
              onClick={() => {
                if (language === "english") {
                  dispatch(setLanguage("arabic"));
                } else {
                  dispatch(setLanguage("english"));
                }
              }}
            >
              <img
                src={
                  language === "english" ? "/icons/usa.png" : "/icons/egypt.png"
                }
                className={`w-[50px] ${
                  language === "english" ? "h-[30px] ml-2" : "h-[40px] mr-2"
                } `}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-lg  ">
        <div className="w-[90%] xl:w-[80%] mx-auto py-1 flex items-center justify-between relative">
          <div className="flex items-center relative">
            <Link href="/">
              <Image
                src="/images/logo.jpeg"
                width={90}
                height={90}
                alt="logo"
                className="rounded-full border border-1 border-black"
              />
            </Link>

            <h1
              className={`text-primary font-bold text-base md-sm:text-lg ${
                language === "english" ? "ml-2" : "mr-2"
              }`}
            >
              {language === "english"
                ? "Hurghada Faculty of Computers & Artificial Intelligence"
                : "كلية الحاسبات والذكاء الاصطناعى بالغردقة"}
            </h1>
          </div>
          <ul className="items-center relative hidden xl:flex">
            <li className="ml-4 font-bold hover:text-secondary transition-colors duration-150">
              <Link href="/">
                {language === "english" ? "Home" : "الرئيسية"}
              </Link>
            </li>
            <li className="ml-4 font-bold group cursor-pointer relative">
              <p className="hover:text-secondary transition-colors duration-150 ">
                {language === "english" ? "About" : "عن الكلية"}
              </p>
              <div className="hidden group-hover:flex flex-col absolute top-full left-0 bg-primary text-white p-2 z-50 shadow-lg transition-all duration-700 ease-in-out w-64">
                {[
                  { href: "/DeanWord", en: "Dean word", ar: "كلمة العميد" },
                  { href: "/History", en: "History", ar: "تاريخ الكلية" },
                  { href: "/mission", en: "Mission", ar: "الهدف" },
                  { href: "/vision", en: "Vision", ar: "الرؤية" },
                  {
                    href: "/stratigicGoal",
                    en: "Strategic goal",
                    ar: "الاهداف الاستراتيجية",
                  },
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="p-2 hover:bg-secondary transition-colors duration-150 text-sm"
                    onClick={() => {
                      setOpenMenu(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    {language === "english" ? link.en : link.ar}
                  </Link>
                ))}
              </div>
            </li>

            <li className="ml-4 font-bold group cursor-pointer relative">
              <p className="hover:text-secondary transition-colors duration-150 ">
                {language === "english" ? "Academic Life" : "الحياة الاكاديمية"}
              </p>
              <div className="hidden group-hover:flex flex-row absolute top-full left-0 bg-primary text-white p-2 z-50 shadow-lg transition-all duration-700 ease-in-out w-96 ">
                <div
                  className={`flex flex-col ${
                    language === "english" ? "mr-4" : "ml-4"
                  }`}
                >
                  <p className="mb-2 font-bold text-lg">
                    {language === "english" ? "Departments" : "الاقسام"}:
                  </p>
                  {departments.map((department, index) => (
                    <Link
                      key={index}
                      href={`/departments/${department.departmentId}`}
                      className="p-2 hover:bg-secondary transition-colors duration-150 text-sm"
                    >
                      {department.name}
                    </Link>
                  ))}
                </div>
                <div
                  className={`flex flex-col ${
                    language === "english" ? "ml-4" : "mr-4"
                  }`}
                >
                  <p className="mb-2 font-bold text-lg">
                    {language === "english" ? "Student Systems" : "نظم الطلاب"}
                  </p>
                  <Link
                    href="/course-descriptions"
                    className="p-2 hover:bg-secondary transition-colors duration-150 text-sm"
                  >
                    {language === "english"
                      ? "Courses Description"
                      : "توصيف المقررات"}
                  </Link>
                </div>
              </div>
            </li>

            <li className="ml-4 font-bold group cursor-pointer relative">
              <p className="hover:text-secondary transition-colors duration-150 ">
                {language === "english" ? "Administrations" : "الادارت"}
              </p>
              <div className="hidden group-hover:flex flex-col absolute top-full left-0 bg-primary text-white p-4 z-50 shadow-lg transition-all duration-700 ease-in-out w-72 ">
                <Link
                  href="/seniorManagment"
                  className="p-2 hover:bg-secondary transition-colors duration-150 "
                >
                  {language === "english"
                    ? "Senior management"
                    : "الادارة العليا"}
                </Link>
                <Link
                  href="/administrations"
                  className="p-2 hover:bg-secondary transition-colors duration-150 "
                >
                  {language === "english"
                    ? "Administrative structure"
                    : "الهيكل الادارى"}
                </Link>
              </div>
            </li>

            <li className="ml-4 font-bold hover:text-secondary transition-colors duration-150">
              <Link href="/services">
                {language === "english" ? "Services" : "الخدمات"}
              </Link>
            </li>
            <li className="ml-4 font-bold group cursor-pointer relative">
              <p className="hover:text-secondary transition-colors duration-300 ">
                {language === "english" ? "Units" : "الوحدات"}
              </p>
              <div className="hidden group-hover:flex flex-col absolute top-full -left-6 bg-primary text-white p-4 z-50 shadow-lg transition-all duration-700 ease-in-out w-48 ">
                <p className="mb-1 font-bold">
                  {language === "english" ? "Quality" : ":ضمان الجوده"}
                </p>
                {quality.map((singleQuality, index) => (
                  <Link
                    href={`/quality-assurance/${singleQuality.id}`}
                    className="ml-2 p-2 text-[13px] hover:bg-secondary transition-colors duration-300"
                    key={index}
                  >
                    {singleQuality.name}
                  </Link>
                ))}
                <p className="mb-1 font-bold">
                  {language === "english" ? "Units" : ":الوحدات"}
                </p>
                {units.map((unit, index) => (
                  <Link
                    href={`/unit-courses/${unit.id}`}
                    className="ml-2 p-2 text-[13px] hover:bg-secondary transition-colors duration-300"
                    key={index}
                  >
                    {unit.name}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
          <ul
            className={`absolute top-[100%] z-[10] bg-white w-full md:w-[70%] transition-all duration-500 ${
              openMenu ? "left-1/2 " : "left-[-100%]"
            } border -translate-x-1/2 border-4 border-secondary p-4 border-x-0 text-xl xl:hidden `}
          >
            <li className="pb-2 border border-2 border-secondary border-t-0 border-x-0">
              <Link
                href="/"
                onClick={() => {
                  setOpenMenu(false);
                  window.scrollTo(0, 0);
                }}
              >
                {language === "english" ? "Home" : "الرئيسية"}
              </Link>
            </li>
            <li className="py-2 border border-2 border-secondary border-t-0 border-x-0">
              <p
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {
                  if (selectedLink === "about") {
                    setSelectedLink(null);
                  } else {
                    setSelectedLink("about");
                  }
                }}
              >
                {language === "english" ? "About" : "عن الكلية"}
                <IoIosArrowForward
                  className={`${
                    selectedLink === "about" && "rotate-90"
                  } text-2xl text-secondary`}
                />
              </p>
              <div
                className={`${
                  selectedLink === "about" ? "h-fit" : "h-0"
                } flex flex-col ml-2 overflow-y-hidden`}
              >
                <Link
                  href="/DeanWord"
                  className=""
                  onClick={() => {
                    setOpenMenu(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {language === "english" ? "Dean word" : "كلمة العميد"}
                </Link>
                <Link
                  href="/History"
                  className=""
                  onClick={() => {
                    setOpenMenu(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {language === "english" ? "History" : "تاريخ الكلية"}
                </Link>
                <Link
                  href="/mission"
                  className=""
                  onClick={() => {
                    setOpenMenu(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {language === "english" ? "Mission" : "الهدف"}
                </Link>
                <Link
                  href="/vision"
                  className=""
                  onClick={() => {
                    setOpenMenu(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {language === "english" ? "vision" : "الرؤية"}
                </Link>
                <Link
                  href="/stratigicGoal"
                  onClick={() => {
                    setOpenMenu(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {language === "english"
                    ? "stratigic goal"
                    : "الاهداف الاستراتيجية"}
                </Link>
              </div>
            </li>
            <li className="py-2 border border-2 border-secondary border-t-0 border-x-0">
              <p
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {
                  if (selectedLink === "academic") {
                    setSelectedLink(null);
                  } else {
                    setSelectedLink("academic");
                  }
                }}
              >
                {language === "english" ? "Academic Life" : "الحياة الاكاديمية"}
                <IoIosArrowForward
                  className={`${
                    selectedLink === "academic" && "rotate-90"
                  } text-2xl text-secondary`}
                />
              </p>
              <div
                className={`${
                  selectedLink === "academic" ? "h-fit" : "h-0"
                } flex flex-col ml-2 overflow-y-hidden`}
              >
                <div className="">
                  <p className="">
                    {language === "english" ? "departments" : "الاقسام"}:
                  </p>
                  <div className="ml-2 flex flex-col">
                    {departments.map((department, index) => (
                      <Link
                        href={`/departments/${department.departmentId}`}
                        className=""
                        key={index}
                        onClick={() => {
                          setOpenMenu(false);
                          window.scrollTo(0, 0);
                        }}
                      >
                        {department.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="">
                  <p className="">
                    {language === "english" ? "student systems:" : "نظم الطلاب"}
                  </p>
                  <div className="flex flex-col ml-2">
                    <Link
                      href="/course-descriptions"
                      className=""
                      onClick={() => {
                        setOpenMenu(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {language === "english"
                        ? "courses description"
                        : "توصيف المقررات"}
                    </Link>
                    <Link
                      href="/graduation-projects"
                      className=" "
                      onClick={() => {
                        setOpenMenu(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {language === "english"
                        ? "graduation projects"
                        : "مشاريع التخرج"}
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="py-2 border border-2 border-secondary border-t-0 border-x-0">
              <p
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {
                  if (selectedLink === "administrations") {
                    setSelectedLink(null);
                  } else {
                    setSelectedLink("administrations");
                  }
                }}
              >
                {language === "english" ? "Administrations" : "الادارت"}
                <IoIosArrowForward
                  className={`${
                    selectedLink === "administrations" && "rotate-90"
                  } text-2xl text-secondary`}
                />
              </p>
              <div
                className={`${
                  selectedLink === "administrations" ? "h-fit" : "h-0"
                } flex flex-col ml-2 overflow-y-hidden`}
              >
                <Link
                  href="/seniorManagment"
                  className=""
                  onClick={() => {
                    setOpenMenu(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {language === "english"
                    ? "senior management"
                    : "الادارة العليا"}
                </Link>
                <Link
                  href="/administrations"
                  onClick={() => {
                    setOpenMenu(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {language === "english"
                    ? "administrative structure"
                    : "الهيكل الادارى"}
                </Link>
              </div>
            </li>
            <li className="py-2 border border-2 border-secondary border-t-0 border-x-0">
              <Link
                href="/services"
                onClick={() => {
                  setOpenMenu(false);
                  window.scrollTo(0, 0);
                }}
              >
                {language === "english" ? "Services" : "الخدمات"}
              </Link>
            </li>
            <li className="py-2 border border-2 border-secondary border-t-0 border-x-0">
              <p
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {
                  if (selectedLink === "units") {
                    setSelectedLink(null);
                  } else {
                    setSelectedLink("units");
                  }
                }}
              >
                {language === "english" ? "Units" : "الوحدات"}
                <IoIosArrowForward
                  className={`${
                    selectedLink === "units" && "rotate-90"
                  } text-2xl text-secondary`}
                />
              </p>
              <div
                className={`${
                  selectedLink === "units" ? "h-fit" : "h-0"
                } flex flex-col ml-2 overflow-y-hidden`}
              >
                <p className="">
                  {language === "english" ? "quality" : ":ضمان الجوده"}
                </p>

                {quality.map((singleQuality, index) => {
                  return (
                    <Link
                      href={`/quality-assurance/${singleQuality.id}`}
                      className="ml-2"
                      key={index}
                      onClick={() => {
                        setOpenMenu(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {singleQuality.name}
                    </Link>
                  );
                })}
                <p className="">
                  {language === "english" ? "Units" : ":الوحدات"}
                </p>
                <div className="ml-2 flex flex-col">
                  {units.map((unit, index) => {
                    return (
                      <Link
                        href={`/unit-courses/${unit.id}`}
                        className=""
                        key={index}
                        onClick={() => {
                          setOpenMenu(false);
                          window.scrollTo(0, 0);
                        }}
                      >
                        {unit.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </li>
          </ul>
          <IoMenu
            className="text-3xl text-primary xl:hidden cursor-pointer"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
