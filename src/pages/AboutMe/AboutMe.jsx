import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import fotoFeli from "../../images-cv/felihome.png";
import Education from "../../components/EduExp/Education/Education";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/EduExp/Experience/Experience";
import decoration from "../../images-cv/deco.svg";

const AboutMe = () => {
  const [listRef] = useAutoAnimate();
  const [showEducation, setShowEducation] = useState(true);

  const networks = [
    {
      id: 1,
      className: "ri-linkedin-fill",
      url: "https://www.linkedin.com/in/felipe-juaneda-8b7103190/",
    },
    {
      id: 2,
      className: "ri-instagram-fill",
      url: "https://www.instagram.com/felipejuaneda/",
    },
    {
      id: 3,
      className: "ri-github-fill",
      url: "https://github.com/FelipeJuaneda",
    },
  ];

  const handleButtonClick = (showEducation) => {
    setShowEducation(showEducation);
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
  const edad = calculateAge("2001-03-20");

  return (
    <main id="aboutme" className="dark:bg-blackRich">
      <div className="p-0 py-10 text-center bg-white sm:p-10 dark:bg-blackRich">
        <h1 className="py-2 text-5xl font-medium text-teal-400 md:text-6xl">
          Felipe Juaneda
        </h1>
        <h2 className="py-2 text-2xl text-blackRich md:text-3xl dark:text-white">
          Desarrollador FrontEnd
        </h2>
        <p className="max-w-xl py-5 mx-auto leading-8 text-blackRich dark:text-white text-md md:text-xl font-notoFont">
          Soy Felipe Agustín Juaneda, de {edad} años, Argentino residente en
          Córdoba. Actualmente programador Full Stack 👨‍🎓 especializado en Front
          End. Creciendo dia a dia en este mundo tecnológico que tanto me
          apasiona.
        </p>
        <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600">
          {networks.map((network) => (
            <a
              key={network.id}
              href={network.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:translate-y-[-4px] transition-all duration-100"
            >
              <i className={network.className} />
            </a>
          ))}
        </div>

        <div className="mx-auto mt-10 overflow-hidden rounded-full bg-gradient-to-b from-teal-500 w-80 h-80 md:h-96 md:w-96 450:h-60 450:w-60">
          <img src={fotoFeli} alt="Foto de Felipe Juaneda" />
        </div>

        <Skills />

        <div ref={listRef}>
          <div className="flex items-center justify-center gap-3 px-3 md:gap-8 lg:gap-14">
            <button
              onClick={() => handleButtonClick(true)}
              className="px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md bg-violetaPrincipal w-96 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Educación
            </button>
            <button
              onClick={() => handleButtonClick(false)}
              className="px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md bg-violetaPrincipal w-96 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Experiencia
            </button>
          </div>
          {showEducation ? <Education /> : <Experience />}
        </div>
      </div>
      <div className="w-2/3 pt-5 m-auto 580:w-11/12">
        <img src={decoration} alt="Decoración" />
      </div>
    </main>
  );
};

export default AboutMe;
