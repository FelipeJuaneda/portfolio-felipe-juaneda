import React from "react";
import decoration from "../../images-cv/deco.svg";
import AboutMe from "../AboutMe/AboutMe";

const Home = () => {
  return (
    <section>
      <AboutMe />
      <div className="w-2/3 pt-5 m-auto 580:w-11/12">
        <img src={decoration} alt="web developer" />
      </div>
    </section>
  );
};

export default Home;
