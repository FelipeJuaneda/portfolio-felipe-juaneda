import React from "react";
import fotoFeli from "../../images-cv/felihome.png";

const AboutMe = () => {
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
    <div className="p-10 py-10 text-center">
      <h2 className="py-2 text-5xl font-medium text-black dark:text-teal-400 md:text-6xl">
        Felipe Juaneda
      </h2>
      <h3 className="py-2 text-2xl text-blackRich md:text-3xl">
        Desarrollador FrontEnd
      </h3>
      <p className="max-w-xl py-5 mx-auto leading-8 text-blackRich text-md md:text-xl font-notoFont">
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
    </div>
  );
};

export default AboutMe;
