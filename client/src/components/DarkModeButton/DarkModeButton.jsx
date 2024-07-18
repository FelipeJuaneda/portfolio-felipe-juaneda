import React, { useState, useEffect } from "react";

const DarkModeButton = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [element, theme]);

  return (
    <button
      className="p-1 text-xl 910max:absolute 910max:right-5 910max:top-5"
      onClick={handleThemeSwitch}
    >
      <i
        className={
          theme === "light" || theme === "system"
            ? "ri-moon-fill "
            : "ri-sun-line text-white"
        }
      />
    </button>
  );
};

export default DarkModeButton;
