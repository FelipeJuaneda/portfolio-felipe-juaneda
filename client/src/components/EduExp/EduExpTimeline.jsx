import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import infoEdu from "./educationData";
import infoExp from "./experienceData";
import { useDarkMode } from "../../context/DarkModeContext";

const EduExpTimeline = () => {
  const { theme } = useDarkMode();
  const sortedEducation = [...infoEdu].sort((a, b) => a.order - b.order);
  const sortedExperience = [...infoExp].sort((a, b) => a.order - b.order);

  return (
    <div className="pb-12">
      <div className="mb-11">
        <span className="text-3xl font-semibold border-b-2 dark:text-white text-blackRich md:text-3xl font-notoFont border-celestePrincipal">
          Educación y Experiencia
        </span>
      </div>
      <VerticalTimeline
        animate={true}
        lineColor={theme === "dark" ? "#f3f4f6" : "#0C1618"}
        className="overflow-x-hidden"
      >
        {[...sortedEducation, ...sortedExperience].map((item, index) => {
          const isRight = index % 2 === 0;
          const isEdu = item.type === "education";

          return (
            <VerticalTimelineElement
              key={item.id}
              contentStyle={{
                background: "#1f2937",
                color: "#fff",
              }}
              contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
              date={item.duration}
              dateClassName="text-left text-black dark:text-white"
              iconStyle={{
                background: isEdu ? "#5be9b9" : "#6e07f3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  theme === "dark"
                    ? "0 0 0 4px rgba(255, 255, 255, 0.2)"
                    : "0 0 0 4px rgba(0, 0, 0, 0.1)",
              }}
              icon={
                <i
                  className={
                    isEdu
                      ? "ri-book-open-line text-black text-xl"
                      : "ri-briefcase-line text-white text-xl"
                  }
                />
              }
            >
              <div className="relative">
                <div
                  className={`flex items-center gap-3 mb-3
                    ${isRight ? "flex-row-reverse text-end" : ""}
                    1170:flex-row 1170:text-start`}
                >
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={`Logo de ${item.title}`}
                      className="object-contain w-10 h-10 p-1 rounded-md"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    {item.subtitle && (
                      <h4 className="font-medium text-gray-300 text-md">
                        {item.subtitle}
                      </h4>
                    )}
                  </div>
                </div>
                <p className="text-left text-gray-200">{item.description}</p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group mt-4 flex items-center gap-2 text-sm font-medium text-white transition duration-200
                      ${
                        isRight
                          ? "flex-row justify-end"
                          : "flex-row-reverse justify-end"
                      }
                      1170:justify-end 1170:flex-row 1170:absolute 1170:right-[12px] 1170:bottom-[-33px] `}
                  >
                    <span className="relative after:absolute after:bottom-0 after:h-[2px] after:w-full after:bg-teal-400 after:transition-transform after:scale-x-0 group-hover:after:scale-x-100 after:left-0 after:origin-left">
                      Ver más
                    </span>
                    <i className="text-base text-teal-400 transition-transform ri-arrow-right-line group-hover:translate-x-1" />
                  </a>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default EduExpTimeline;
