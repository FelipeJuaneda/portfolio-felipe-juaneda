import React from "react";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Navigation, Pagination } from "swiper";

import "./MySwiper.css";
const ProyectsSwiper = ({ children }) => {
  return (
    <Swiper
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Navigation, FreeMode]}
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 70,
        },
        350: {
          slidesPerView: 1.2,
          spaceBetween: 60,
        },
        400: {
          slidesPerView: 1.4,
          spaceBetween: 50,
        },
        500: {
          slidesPerView: 1.6,
          spaceBetween: 50,
        },
        640: {
          slidesPerView: 1.9,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 3.5,
          spaceBetween: 40,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default ProyectsSwiper;
