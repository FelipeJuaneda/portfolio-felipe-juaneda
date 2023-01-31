import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import fotoFeli from "../../images-cv/felihome.png";
import Education from "../EduExp/Education/Education";
import Skills from "../Skills/Skills";

const AboutMe = () => {
  const location = useLocation();
  const networks = [
    {
      key: 1,
      className: "ri-linkedin-fill",
      to: "https://www.linkedin.com/in/felipe-juaneda-8b7103190/",
    },
    {
      key: 2,
      className: "ri-instagram-fill",
      to: "https://www.instagram.com/felipejuaneda/",
    },
    {
      key: 3,
      className: "ri-github-fill",
      to: "https://github.com/FelipeJuaneda",
    },
  ];
  return (
    <div className="p-0 py-10 text-center bg-white sm:p-10 dark:bg-blackRich">
      <h2 className="py-2 text-5xl font-medium text-teal-400 md:text-6xl">
        Felipe Juaneda
      </h2>
      <h3 className="py-2 text-2xl text-blackRich md:text-3xl dark:text-white">
        Desarrollador FrontEnd
      </h3>
      <p className="max-w-xl py-5 mx-auto leading-8 text-blackRich dark:text-white text-md md:text-xl font-notoFont">
        Soy Felipe Agustín Juaneda, de 21 años, Argentino residente en Córdoba.
        Actualmente estudiando Programación Full Stack 👨‍🎓, trabajando de Tutor
        en CoderHouse, y creciendo en este mundo tecnológico que tanto me
        apasiona.
      </p>
      <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600 ">
        {networks.map((e) => {
          return (
            <a
              key={e.key}
              href={e.to}
              target="_blank"
              rel="noreferrer"
              className=" hover:translate-y-[-4px] transition-all duration-100"
            >
              <i className={e.className} />
            </a>
          );
        })}
      </div>

      <div className="mx-auto mt-10 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 w-80 h-80 md:h-96 md:w-96 450:h-60 450:w-60">
        <img src={fotoFeli} alt="" />
      </div>

      <Skills />

      <div>
        <div className="flex items-center justify-center gap-3 px-3 md:gap-8 lg:gap-14">
          <Link
            to={"education"}
            type="button"
            className="px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md bg-violetaPrincipal w-96 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Educacion
          </Link>
          <Link
            to={"experience"}
            type="button"
            className="px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md bg-violetaPrincipal w-96 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Experiencia
          </Link>
        </div>
        <Outlet />
      </div>
      {location.pathname === "/" || location.pathname === "/aboutme" ? (
        <Education />
      ) : null}
    </div>
  );
};

export default AboutMe;
