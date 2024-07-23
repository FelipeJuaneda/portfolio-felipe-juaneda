import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import infoEdu from "./educationData";
import "./Education.css";

const Education = () => {
  return (
    <div className="mt-9">
      <span className="text-4xl font-medium border-b-2 text-blackRich border-celestePrincipal dark:text-white">
        Educación
      </span>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 1.8,
          },
          1024: {
            slidesPerView: 2.6,
          },
          1450: {
            slidesPerView: 3.7,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
        className="mt-10 education-swiper"
      >
        {infoEdu.map((data) => (
          <SwiperSlide key={data.id} className="flex justify-center">
            <div className="flex flex-col w-full max-w-md  p-6 bg-gray-800 rounded-lg shadow-lg h-[22rem]">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 bg-gray-700 rounded-md aspect-square">
                  <img
                    src={data.logo}
                    alt={`Logo de ${data.title}`}
                    className="object-contain w-10 h-10"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-base text-gray-400 md:text-md lg:text-lg text-start">
                    {data.title}
                  </div>
                  <div className="text-sm text-gray-400 text-start">
                    {data.duration}
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-grow gap-2">
                <p
                  className="overflow-hidden text-gray-400 overflow-ellipsis text-start"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 8,
                    WebkitBoxOrient: "vertical",
                    height: "190px",
                  }}
                >
                  {data.description}
                </p>
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2 mt-auto font-medium text-blue-500 text-start hover:underline"
                >
                  <i className="text-sm ri-link" />
                  <span className="ml-1 text-sm">Ver Certificado</span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Education;
