import React, { useState, useEffect } from "react";

const DarkModeButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      className="p-1 text-xl 910max:absolute 910max:right-5 910max:top-5"
      onClick={handleThemeSwitch}
    >
      <i
        className={
          theme === "light" ? `ri-moon-fill` : "ri-sun-line text-white"
        }
      />
    </button>
  );
};

export default DarkModeButton;
