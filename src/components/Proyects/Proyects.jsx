import React from "react";
import { SwiperSlide } from "swiper/react";
import ProyectsSwiper from "../SwiperCarousel/ProyectsSwiper";
import useData from "../../hook/useData";

const Proyects = () => {
  const { data } = useData("/data/proyectsData.json");

  return (
    <div id="proyects">
      <section className="bg-violetaPrincipal ">
        <div className="mx-auto py-14 900:py-10">
          <div className="pb-9">
            <h1 className="text-3xl font-semibold text-center capitalize font-notoFont text-blackRich lg:text-4xl">
              Proyectos
            </h1>

            <p className="mt-4 text-center text-white ">
              Algunos de mis proyectos que mas me gustan! Click para entrar!😉
            </p>
          </div>
          <ProyectsSwiper>
            {data
              ? data.map((proyect) => {
                  return (
                    <SwiperSlide key={proyect.id} className="select-none">
                      <a href={proyect.to} target="_blank" rel="noreferrer">
                        <div
                          className="overflow-hidden bg-center bg-no-repeat bg-cover rounded-lg cursor-pointer h-72 900:h-64 group 900:bg-contain"
                          style={{ backgroundImage: proyect.bgImg }}
                        >
                          <div className="relative flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 900:opacity-80">
                            <h2 className="mt-4 text-2xl font-semibold text-white capitalize">
                              {proyect.title}
                            </h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                              {proyect.lenguajes}
                            </p>
                            <button
                              onClick={() =>
                                window.open(proyect.github, "_blank")
                              }
                              target="_blank"
                              rel="noreferrer"
                              className="absolute bottom-0 text-4xl right-5"
                            >
                              <i className="ri-github-fill" />
                            </button>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                  );
                })
              : null}
          </ProyectsSwiper>
        </div>
        <hr className="w-3/4 m-auto" />
      </section>
    </div>
  );
};

export default Proyects;
