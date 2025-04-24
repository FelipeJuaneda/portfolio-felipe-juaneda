import React from "react";
import fotoFeli from "../../assets/felihome.png";
import Skills from "../../components/Skills/Skills";
import decoration from "../../assets/deco.svg";
import EduExpTimeline from "../../components/EduExp/EduExpTimeline";

const AboutMe = () => {
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
          Desarrollador Full Stack
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

        <EduExpTimeline />
      </div>
      <div className="w-2/3 pt-5 m-auto 580:w-11/12">
        <img src={decoration} alt="Decoración" />
      </div>
    </main>
  );
};

export default AboutMe;
