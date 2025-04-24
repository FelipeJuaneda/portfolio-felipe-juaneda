import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import Proyects from "./components/Proyects/Proyects";
import "./App.css";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutMe />
                <Proyects />
                <Contact />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
