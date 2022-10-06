import React from "react";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Navigation } from "swiper";

const SkillsSwiper = ({ children }) => {
  return (
    <Swiper
      grabCursor={false}
      slidesPerGroup={3}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      speed={6000}
      freeMode={{
        enabled: true,
      }}
      modules={[Navigation, Autoplay, FreeMode]}
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
