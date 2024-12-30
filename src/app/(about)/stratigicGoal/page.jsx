"use client";
import { useSelector } from "react-redux";
import "./Goals.css";

function Goals() {
  const language = useSelector((state) => state.language);

  return (
    <>
      <div className={`Main-Div p-10 ${language === "arabic" ? "rtl" : ""}`}>
        <div className="Title flex">
          <img
            src="/images/pin-icon.png"
            alt="Pin Icon"
            className={`iconimage ${language === "english" ? "mr-4" : "ml-4"}`}
          />
          {language === "english"
            ? "Strategic college's goals"
            : "أهداف الكلية الاستراتيجية"}
        </div>

        <p className="Goals-body text-lg">
          {language === "english" ? (
            <>
              The college's strategic plan adopted a set of strategic goals and
              objectives, which represent an expression of its vision, a true
              translation of its mission, and a product of the four-way analysis
              that included all sectors of the college, which highlighted its
              true reality. The goals represent the possible objectives that the
              college aspires to during the next five years, from 2021 to 2025.
              The following is a presentation of the college's final goals and
              the desired strategic objective for each of them. The first goal:
              to improve institutional capacity and the existence of a system of
              governance in accordance with quality standards.
              <span className="FirstG_Objectives mt-6">
                <span className="Points"> First goal: </span> to improve
                institutional capacity and the existence of a system of
                governance in accordance with quality standards.
                <br />
                Objective 1: continuous development of the capabilities of
                faculty members and their assistants.
                <br />
                Objective 2: developing human resources in the administrative
                apparatus and improve the efficiency of administrative
                performance.
                <br />
                Objective 3: modernization and maintenance of laboratories and
                classrooms.
                <br />
                Objective 4: raising the efficiency of the use of information
                technology in the college.
                <br />
                Objective 5: supporting academic freedom and intellectual
                protection within the framework of the value system.
                <br />
                Objective 6: systems for governance, follow-up and internal
                audit.
                <br />
              </span>
              <span className="SecondG_Objectives">
                <span className="Points"> Second goal: </span> to improve the
                educational effectiveness of the college in accordance with
                quality standards.
                <br />
                Objective 1: supporting the educational process for a
                distinguished graduate who is able to compete to achieve the
                college's vision and mission.
                <br />
                Objective 2: developing a system to manage the educational
                process in the college.
                <br />
                Objective 3: creating programs and mechanisms to support student
                services.
                <br />
              </span>
              <span className="ThirdG_Objectives">
                <span className="Points"> Third goal: </span> to develop
                community participation and maximizing the college’s role in
                community service and environmental development.
                <br />
                Objective 1: increasing the effective participation of the
                college in serving the local community to serve Dakahlia
                Governorate.
                <br />
                Objective 2: mechanisms to activate the activities of the Public
                Service Center.
                <br />
                Objective 3: mechanisms for activating the services of units
                affiliated to the community service sector.
                <br />
              </span>
            </>
          ) : (
            <>
              تبنت الخطة الاستراتيجية للكلية مجموعة من الأهداف الاستراتيجية
              والمقاصد التي تمثل تعبيرًا عن رؤيتها وترجمة حقيقية لمهمتها، وهي
              نتاج التحليل الرباعي الذي شمل جميع قطاعات الكلية، مما أبرز واقعها
              الحقيقي. تمثل الأهداف المقاصد الممكنة التي تطمح الكلية لتحقيقها
              خلال السنوات الخمس القادمة، من 2021 إلى 2025. فيما يلي عرض للأهداف
              النهائية للكلية والهدف الاستراتيجي المطلوب لكل منها.
              <span className="FirstG_Objectives mt-6">
                <span className="Points"> الهدف الأول: </span> تحسين القدرة
                المؤسسية ووجود نظام للحكم وفقًا لمعايير الجودة.
                <br />
                الهدف 1: التطوير المستمر لقدرات أعضاء هيئة التدريس ومعاونيهم.
                <br />
                الهدف 2: تطوير الموارد البشرية في الجهاز الإداري وتحسين كفاءة
                الأداء الإداري.
                <br />
                الهدف 3: تحديث وصيانة المعامل والفصول الدراسية.
                <br />
                الهدف 4: رفع كفاءة استخدام تكنولوجيا المعلومات في الكلية.
                <br />
                الهدف 5: دعم حرية البحث والحماية الفكرية في إطار النظام القيمي.
                <br />
                الهدف 6: أنظمة الحوكمة والمتابعة والتدقيق الداخلي.
                <br />
              </span>
              <span className="SecondG_Objectives">
                <span className="Points"> الهدف الثاني: </span> تحسين الفعالية
                التعليمية للكلية وفقًا لمعايير الجودة.
                <br />
                الهدف 1: دعم العملية التعليمية لخريج متميز قادر على المنافسة
                لتحقيق رؤية الكلية ورسالتها.
                <br />
                الهدف 2: تطوير نظام لإدارة العملية التعليمية في الكلية.
                <br />
                الهدف 3: إنشاء برامج وآليات لدعم خدمات الطلاب.
                <br />
              </span>
              <span className="ThirdG_Objectives">
                <span className="Points"> الهدف الثالث: </span> تطوير المشاركة
                المجتمعية وتعظيم دور الكلية في خدمة المجتمع والتنمية البيئية.
                <br />
                الهدف 1: زيادة المشاركة الفعالة للكلية في خدمة المجتمع المحلي
                لخدمة محافظة الدقهلية.
                <br />
                الهدف 2: آليات تفعيل أنشطة مركز الخدمة العامة.
                <br />
                الهدف 3: آليات تفعيل خدمات الوحدات التابعة لقطاع خدمة المجتمع.
                <br />
              </span>
            </>
          )}
        </p>
      </div>
    </>
  );
}

export default Goals;
