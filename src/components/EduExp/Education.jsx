import React, { useEffect, useState } from "react";

const Education = () => {
  const [infoEdu, setInfoEdu] = useState([]);
  useEffect(() => {
    const getEducationData = async () => {
      const fetchEdu = await fetch("/data/educationData.json");
      const dataEduJson = await fetchEdu.json();
      setInfoEdu(dataEduJson);
    };

    getEducationData();
  }, []);

  return (
    <div className="mt-9">
      <span className="text-4xl font-medium border-b-2 text-blackRich border-celestePrincipal">
        Educación
      </span>
      <div className="items-center justify-center gap-4 text-center sm:flex">
        {infoEdu.map((data) => {
          return (
            <div key={data.id} className={data.divFatherClass}>
              <a href={data.link} target="_blank" rel="noreferrer">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
                    <img src={data.logo} alt="" />
                  </div>
                </div>
                <h3 className="pt-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                  {data.title}
                </h3>
                <h4 className="text-gray-400">{data.duration}</h4>
                <p className="py-4 text-gray-500 text-md dark:text-gray-300">
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

export default Education;
