import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Education from "./components/EduExp/Education/Education";
import Experience from "./components/EduExp/Experience/Experience";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Proyects from "./components/Proyects/Proyects";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Proyects />
              <Contact />
            </>
          }
        >
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
        </Route>
        <Route path="/aboutme" element={<AboutMe />}>
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
        </Route>
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
