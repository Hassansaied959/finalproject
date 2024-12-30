"use client";
import { useSelector } from "react-redux";

function VisionBody() {
  const language = useSelector((state) => state.language);

  return (
    <>
      <div className="Main-Div px-10 py-12">
        <span className="Title mb-6 flex">
          <img
            src="/images/pin-icon.png"
            alt="Pin Icon"
            className={`iconimage ${language === "english" ? "mr-4" : "ml-4"}`}
          />
          {language === "english" ? "Faculty Vision" : "رؤية الكلية"} <br />
        </span>
        <p className=" mt-8 text-lg">
          {language === "english"
            ? `To occupy its position among other colleges of computer science and artificial intelligence, on a par with the position of the Red Sea region, with what it represents in terms of systems of cultural exchange and scientific cooperation based on partnership and scientific projects that create a breakthrough in communication with the cultures of the developing world, technologically and cognitively.`
            : `أن تحتل مكانتها بين كليات علوم الحاسب والذكاء الاصطناعي، بما يتناسب مع موقعها في منطقة البحر الأحمر، مع ما تمثله من أنظمة التبادل الثقافي والتعاون العلمي المبني على الشراكة والمشروعات العلمية التي تخلق نقلة نوعية في التواصل مع ثقافات العالم النامي من الناحيتين التكنولوجية والمعرفية.`}
        </p>
      </div>
    </>
  );
}

export default VisionBody;
