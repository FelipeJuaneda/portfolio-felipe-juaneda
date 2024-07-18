import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import "./SkillsSwiper.css";

const SkillsSwiper = ({ children }) => {
  return (
    <Swiper
      slidesPerGroup={1}
      loop={true}
      allowTouchMove={false}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: false,
      }}
      speed={1700}
      modules={[Autoplay]}
      navigation={false}
      breakpoints={{
        0: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        350: {
          slidesPerView: 3.5,
          spaceBetween: 15,
        },
        500: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 4.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5.7,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
      }}
      className="skills-swiper"
    >
      {children}
    </Swiper>
  );
};

export default SkillsSwiper;
