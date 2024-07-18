import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import infoExp from "./experienceData";
import "../Education/Education.css";

const Experience = () => {
  const sortedInfoExp = infoExp.sort((a, b) => a.order - b.order);
  return (
    <div className="mt-9">
      <span className="text-4xl font-medium border-b-2 text-blackRich dark:text-white border-celestePrincipal">
        Experiencia
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
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
          1450: {
            slidesPerView: 4,
          },
        }}
        className={`mt-10 education-swiper`}
      >
        {sortedInfoExp.map((data) => (
          <SwiperSlide key={data.id} className="flex justify-center">
            <div className="flex flex-col items-center w-full max-w-sm p-6 text-center bg-gray-800 rounded-lg shadow-lg h-96">
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center w-full h-full"
              >
                <div className="flex-shrink-0 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto text-white rounded-md">
                    <img src={data.logo} alt={`Logo de ${data.title}`} />
                  </div>
                </div>
                <h3 className="pt-4 text-2xl font-semibold text-white sm:text-xl font-notoFont">
                  {data.title}
                </h3>
                <h4 className="text-gray-400">{data.duration}</h4>
                <h5 className="text-gray-400">{data.subtitle}</h5>
                <p className="py-4 overflow-hidden text-white text-md font-notoFont 768:text-sm text-ellipsis">
                  {data.description}
                </p>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Experience;
