import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import curriculum from "../../images-cv/curriculum.pdf";
import { animateScroll as scroll } from "react-scroll";
import ScrollProgressBar from "../ScrollProgressBar/ScrollProgressBar";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import "./NavBar.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  const Links = [
    { id: 2, name: "Sobre mi", to: "aboutme", offset: -72 },
    { id: 3, name: "Proyectos", to: "proyects" },
    { id: 4, name: "Contacto", to: "contact" },
  ];

  let ubicacionActual = window.pageYOffset;
  const effectScroll = () => {
    setOpen(false);
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionActual >= desplazamientoActual && window.scrollY > 0) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
    ubicacionActual = desplazamientoActual;
  };
  window.addEventListener("scroll", effectScroll);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleCloseClick = () => {
    setOpen(false);
  };

  return (
    <div
      className={
        scrollActive
          ? "sticky top-0 left-0 z-50 w-full shadow-md transition-all duration-150 ease-linear bg-white "
          : `top-[-68px] z-50 transition-all duration-150 ease-linear sticky`
      }
    >
      <ScrollProgressBar />

      <div className="items-center justify-between py-4 bg-white 910:flex 1024:px-5 xl:px-10 px-7 900:py-2 dark:bg-blackRich">
        <div className="flex items-center justify-between">
          <div
            className=" cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            <LinkScroll to="/" onClick={() => scroll.scrollToTop()}>
              <span className="text-lg font-semibold border-b-2 font-notoFont border-celestePrincipal dark:text-grisDark">
                Felipe Agustin Juaneda
              </span>
            </LinkScroll>
          </div>
          <div onClick={handleToggle} className=" 910:hidden">
            <i
              className="text-2xl ri-menu-3-line dark:text-grisDark"
              name={open ? "close" : "menu"}
            />
          </div>
        </div>
        <ul
          className={`910:flex 910max:shadow-md 910:items-center 910:pb-0 pb-12 absolute font-notoFont 910:static bg-white dark:bg-blackRich 910:z-auto z-50 left-0 w-full 910:w-auto 910:pl-0 pl-9 ${
            open ? "top-[50px] " : "top-[-490px]"
          }`}
        >
          <DarkModeButton />
          {Links.map((link) => (
            <li
              key={link.id}
              className="text-base 910:ml-6 910:my-0 my-7 900:text-base"
            >
              <LinkScroll
                to={link.to}
                activeClass="active"
                spy={true}
                className="cursor-pointer navLink text-blackRich dark:text-grisDark hover:border-b-2 hover:border-celestePrincipal"
                smooth={true}
                offset={link.offset}
                onClick={handleCloseClick}
              >
                {link.name}
              </LinkScroll>
            </li>
          ))}
          <a
            href={curriculum}
            download={"CV Felipe Juaneda"}
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
