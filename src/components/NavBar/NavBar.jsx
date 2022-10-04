import React, { useState } from "react";
import curriculum from "../../images-cv/curriculum.pdf";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "Inicio", link: "/" },
    { name: "Sobre mi", link: "/" },
    { name: "Proyectos", link: "/" },
    { name: "Contacto", link: "/" },
  ];

  return (
    <div className="sticky top-0 left-0 w-full shadow-md">
      <div className="items-center justify-between py-4 bg-white md:flex 1024:px-5 xl:px-10 px-7 768:py-2">
        <div className="flex items-center justify-between">
          <div
            className=" cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            <span className="text-lg font-semibold font-notoFont">
              Felipe Agustin Juaneda
            </span>
          </div>
          <div onClick={() => setOpen(!open)} className=" md:hidden">
            <i
              className="text-2xl ri-menu-3-line"
              name={open ? "close" : "menu"}
            />
          </div>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute font-notoFont md:static bg-white md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-[50px] " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="text-base md:ml-6 md:my-0 my-7 900:text-base"
            >
              <a
                href={link.link}
                onClick={() => setOpen(false)}
                className="text-gray-800 duration-500 hover:text-gray-400"
              >
                {link.name}
              </a>
            </li>
          ))}
          <a
            href={curriculum}
            download={"Curriculim Felipe Juaneda"}
            className="px-6 py-2 text-white duration-500 bg-indigo-600 rounded md:ml-8 hover:bg-indigo-400 font-notoFont"
          >
            Descargar Cv
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
