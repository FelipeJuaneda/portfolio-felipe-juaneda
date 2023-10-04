import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import SkillsSwiper from "../SwiperCarousel/SkillsSwiper";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  const getSkillData = async () => {
    try {
      const response = await fetch("/data/skillsData.json");
      if (response.ok) {
        const dataSkillsJson = await response.json();
        setSkills(dataSkillsJson);
      } else {
        console.error("Error");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  useEffect(() => {
    getSkillData();
  }, []);

  return (
    <div className="py-20">
      <div className="mb-5 text-center">
        <span className="text-3xl font-semibold border-b-2 dark:text-white text-blackRich md:text-3xl font-notoFont border-celestePrincipal">
          Skills
        </span>
      </div>
      <SkillsSwiper>
        {skills.map((logo) => (
          <SwiperSlide className="select-none" key={logo.id}>
            <div className="flex flex-col items-center justify-center w-full text-center group">
              <img
                className="skillImg object-contain w-28 h-28 768Min:grayscale-[90%] group-hover:grayscale-0 transition-all duration-200"
                id="skillImg"
                src={logo.img}
                alt={logo.alt}
              />
              <span className="text-base transition-opacity duration-200 768Min:opacity-0 skillName group-hover:opacity-100 font-notoFont dark:text-white">
                {logo.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </SkillsSwiper>
    </div>
  );
};

export default Skills;
