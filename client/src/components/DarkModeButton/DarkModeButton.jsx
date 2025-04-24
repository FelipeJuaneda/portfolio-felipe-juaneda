import React, { useEffect, useState } from "react";

const DarkModeButton = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      className="p-1 text-xl 910max:absolute 910max:right-5 910max:top-5"
      onClick={toggleTheme}
    >
      <i
        className={theme === "dark" ? "ri-sun-line text-white" : "ri-moon-fill"}
      />
    </button>
  );
};

export default DarkModeButton;
