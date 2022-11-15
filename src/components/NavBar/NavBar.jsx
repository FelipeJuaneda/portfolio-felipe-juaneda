import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import curriculum from "../../images-cv/curriculum.pdf";
import "./NavBar.css";
import { animateScroll as scroll } from "react-scroll";
import ScrollProgressBar from "../ScrollProgressBar/ScrollProgressBar";
import DarkModeButton from "../DarkModeButton/DarkModeButton";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  const Links = [
    { id: 1, name: "Inicio", link: "/" },
    { id: 2, name: "Sobre mi", link: "/aboutme" },
    { id: 3, name: "Proyectos", link: "/proyects" },
    { id: 4, name: "Contacto", link: "/contact" },
  ];

  let ubicacionActual = window.pageYOffset;
  const effectScroll = () => {
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionActual >= desplazamientoActual && window.scrollY > 0) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
    ubicacionActual = desplazamientoActual;
  };
  window.addEventListener("scroll", effectScroll);

  return (
    <div
      className={
        scrollActive
          ? "sticky top-0 left-0 z-50 w-full shadow-md transition-all duration-150 ease-linear bg-white "
          : "top-[-68px] z-50 transition-all duration-150 ease-linear sticky "
      }
    >
      <ScrollProgressBar />

      <div className="items-center justify-between py-4 bg-white 910:flex 1024:px-5 xl:px-10 px-7 900:py-2 dark:bg-blackRich">
        <div className="flex items-center justify-between">
          <div
            className=" cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            <Link to={"/"}>
              <span className="text-lg font-semibold border-b-2 font-notoFont border-celestePrincipal dark:text-grisDark">
                Felipe Agustin Juaneda
              </span>
            </Link>
          </div>
          <div onClick={() => setOpen(!open)} className=" 910:hidden">
            <i
              className="text-2xl ri-menu-3-line dark:text-grisDark"
              name={open ? "close" : "menu"}
            />
          </div>
        </div>

        <ul
          className={`910:flex 910:items-center 910:pb-0 pb-12 absolute font-notoFont 910:static bg-white dark:bg-blackRich 910:z-auto z-50 left-0 w-full 910:w-auto 910:pl-0 pl-9 ${
            open ? "top-[50px] " : "top-[-490px]"
          }`}
        >
          <DarkModeButton />
          {Links.map((link) => (
            <li
              key={link.id}
              className="text-base 910:ml-6 910:my-0 my-7 900:text-base"
            >
              <NavLink
                to={link.link}
                onClick={() => {
                  setOpen(false);
                  scroll.scrollToTop();
                }}
                activeclassname="active"
                className="navLink text-blackRich dark:text-grisDark hover:border-b-2 hover:border-celestePrincipal "
                end
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <a
            href={curriculum}
            download={"Curriculim Felipe Juaneda"}
            className="px-6 py-2 text-white duration-500 rounded bg-violetaPrincipal 910:ml-8 hover:bg-violet-600 font-notoFont"
          >
            Descargar Cv
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
