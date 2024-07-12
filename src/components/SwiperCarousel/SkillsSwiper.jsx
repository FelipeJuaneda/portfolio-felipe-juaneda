import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Autoplay, Navigation } from "swiper";

const SkillsSwiper = ({ children }) => {
  return (
    <Swiper
      slidesPerGroup={9}
      allowTouchMove={false}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      speed={7000}
      modules={[Navigation, Autoplay]}
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
    >
      {children}
    </Swiper>
  );
};

export default SkillsSwiper;
