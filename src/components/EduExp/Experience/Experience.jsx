import React from "react";
import infoExp from "./experienceData";

const Experience = () => {
  return (
    <div className="mt-9">
      <span className="text-4xl font-medium border-b-2 text-blackRich dark:text-white border-celestePrincipal">
        Experiencia
      </span>
      <div className="flex-wrap items-center justify-center gap-4 text-center md:flex xl:flex-nowrap ">
        {infoExp.map((data) => {
          return (
            <div key={data.id} className={data.classNameFather}>
              <a href={data.link} target="_blank" rel="noreferrer">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
                    <img src={data.logo} alt="" />
                  </div>
                </div>
                <h3 className="pt-4 text-2xl font-semibold text-white sm:text-xl font-notoFont">
                  {data.title}
                </h3>
                <h4 className="text-gray-400">{data.duration}</h4>
                <h5 className="text-gray-400">{data.subtitle}</h5>
                <p className="py-4 text-white text-md font-notoFont 768:text-sm">
                  {data.description}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
