import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import SkillsSwiper from "../SwiperCarousel/SkillsSwiper";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const getSkillData = async () => {
    try {
      const dataSkills = await fetch("/data/skillsData.json");
      const dataSkillJson = await dataSkills.json();
      setSkills(dataSkillJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSkillData();
  }, []);

  return (
    <div className="py-20 ">
      <div className="mb-5 text-center ">
        <span className="text-3xl text-blackRich md:text-3xl font-notoFont">
          Skills
        </span>
      </div>
      <SkillsSwiper>
        {skills.map((logo) => {
          return (
            <SwiperSlide className="select-none" key={logo.id}>
              <div className="flex flex-col items-center justify-center w-full text-center group">
                <img
                  className="skillImg object-contain w-28 h-28 grayscale-[90%] group-hover:grayscale-0 transition-all duration-200"
                  id="skillImg"
                  src={logo.img}
                  alt={logo.alt}
                />
                <span className="transition-opacity duration-200 opacity-0 skillName group-hover:opacity-100 font-notoFont">
                  {logo.name}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </SkillsSwiper>
    </div>
  );
};

export default Skills;
