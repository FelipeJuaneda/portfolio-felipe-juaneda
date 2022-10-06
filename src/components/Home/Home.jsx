import React from "react";
import decoration from "../../images-cv/deco.svg";
import Skills from "./Skills";
import "./Home.css";
import EduExp from "../EduExp/EduExp";
import AboutMe from "../AboutMe/AboutMe";

const Home = () => {
  return (
    <section>
      <AboutMe />
      <Skills />
      <div>{/* <EduExp/> */}</div>
      <div className="w-2/3 pt-5 m-auto 580:w-11/12">
        <img src={decoration} alt="web developer" />
      </div>
    </section>
  );
};

export default Home;
